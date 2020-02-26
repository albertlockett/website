---
path: "/blog/aws-site-setup"
date: "2020-02-19"
title: "AWS Website Setup"
---

In this modern age, where internet and computers are so ubiquitous, many indiviuals and businesses would like to 
have their own website. A website can be used to share information about yourself and your interests. Fortunately there
are many services that can be used to create your own  website and host it but these services vary widely in their cost, 
ease of use and features.

If you're an aspiring website administrator you may consider using AWS to host your site. It may not be as user friendly as some other services but it provies a lot of flexibility and the extra work you will have to do to deploy
your website on AWS may bring you a nice sense of accomplishment. What's more, it will be a good learning experience, 
and and having some AWS experience will look good on your resume.

This post will cover the steps to deploy your static website on AWS. It will show how to host the website
using an S3 bucket, use ACM to create a TLS certificate for your site, and use CloudFront to enable HTTPS and caching. 
If you don't already have an AWS account, you can
[create one now](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).

You'll need a domain for your website, but I won't be covering how to register your own domain or create DNS entries for 
it. If you don't already have a  domain name for your website, there are many services online that you can use to get 
one. One option is to 
[use AWS Route53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html).

I'm also not going to cover how to actually build your website. There are many ways to build it and far be it for
me to suggest the best way for you. If you don't have a site built yet, you can 
[download](/aws-site-setup-example-site.zip), extract and use the files from this exmaple to follow along

## 1. Create an S3 Bucket for your site

[Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/) 
is a service for storing files in the cloud. We'll be using S3 to store the
static files that make up your website. To use S3, navigate to the 
[AWS Console](https://console.aws.amazon.com/console/home) click on _Services_ and then search for S3. Clicking
S3 should take you to the [S3 home page](https://s3.console.aws.amazon.com/s3/home).

Now create a new bucket to hold the static content for your site
- Click the _Create bucket_ button
  ![create_bucket_button](./aws-site-setup/part_2/pic_1.png)

- In the _Bucket name_ input, type in the domain name of your website (i.e "albertlockett.ca")then  click Next
 ![create_bucket_button](./aws-site-setup/part_2/pic_2.png)
- Leave all defaults on Page 2 and click next
- On Page 3 (the _Set Permissions_ page), uncheck _Block all public access_, and when the banner with the 
  _I acknowlegdge..._ text appears click the checkbox and then click Next
  ![create_bucket_button](./aws-site-setup/part_2/pic_3.png)
- On Page 4 click _Create bucket_

Your bucket will now display on the S3 buckets page. The next step is to configure it for static web hosting. 
- Click on the name of the bucket, and then click on the Properties tab on the bucket details page. 
  ![create_bucket_button](./aws-site-setup/part_2/pic_4.png)
- Click on _Static website hosting_.
  ![create_bucket_button](./aws-site-setup/part_2/pic_5.png)
- In the Static website hosting form, type "index.html" in the _Index document_ field and click _Save_
  ![create_bucket_button](./aws-site-setup/part_2/pic_6.png)

Now add a Bucket Policy to allow your users from the internet to request your website's files:
- Click on the Permissions tab
- Click on Bucket Policy
- Enter the following Bucket Policy (make sure to change "albertlockett.ca" to the domain from Step 1 for the bucket's 
  name)
  ![create_bucket_button](./aws-site-setup/part_2/pic_7.png)

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::albertlockett.ca/*"
        }
    ]
}
```

Next we need to upload the content for the static site into the S3 bucket.
- On the _Overview_ tab click the _Upload_ button
- Click _Add Files_ and choose all the files for your website, click Next 
  ![create_bucket_button](./aws-site-setup/part_2/pic_8.png)
- On the _Set Permissions_ page, in the section called _Manage Public Permissions_ choose _Grant Public Read Access 
  to this Object(s) ![create_bucket_button](./aws-site-setup/part_2/pic_9.png)
- Click Next on Page 3 to accept defaults ![create_bucket_button](./aws-site-setup/part_2/pic_10.png)
- Click Upload

Now you'll see your objects in the bucket.
![create_bucket_button](./aws-site-setup/part_2/pic_11.png)

Now we can test our bucket is configured correctly. In your web browser, navigate to your bucket's URL like this
(change albertlockett.ca for your bucket name). You can also get the bucket URL by clicking Properties -> Static Web Hosting and  the link is beside a label called Endpoint.

For example:
http://albertlockett.ca.s3-website-us-east-1.amazonaws.com/

You have the option now to create a DNS alias record for your domain to this domain but this has two disadvantages. 
Depending on your needs, this might be good enough for practical purposes. The next sections of this guide will show
how to use CloudFront to improve the speed with which your website can be loaded and securely serve your website using 
HTTPS

## 2. Create a CloudFront Distrbution

[AWS CloudFront](https://aws.amazon.com/cloudfront/) is a service that allows you to have your static content 
distributed and cached on AWS's CDN. While that's nice for performance, using CloudFront also allows us to serve the 
content over HTTPS and it allows us to use custom error pages. We can use this custom error page functionality to 
return /index.html for any GET requests for content that isn't in our bucket. This is especially useful for sites 
using a client-side routing framework like react-router.

In the [AWS Console](https://console.aws.amazon.com/console/home) click on _Services_ and then search for CloudFront. 
Clicking CloudFront should take you to the [CloudFront home page](https://console.aws.amazon.com/cloudfront/home). On
this page, click _Create Distribution_. ![create_bucket_button](./aws-site-setup/part_3/pic_1.png)

- Chose _Get Started_ under the _Web_ section. You'll be taken to the _Create Distribution_ form
  ![create_bucket_button](./aws-site-setup/part_3/pic_2.png)
- In the _Origin Settings_ section, in the _Origin Domain Name_ field, choose your new bucket (for example: 
  albertlockett.ca.s3.amazonaws.com)
- In the _Distribution Settings_ section, choose _Use Only U.S., Canada and Europe_ in the Price Class setting (this is
  the cheapest option).
- Click _Create Distribution_

AWS will begin provisioning your CloudFront distribution. You'll see your distribution with Status of _In Progress_. It 
can take quite a while for the service to provision. ![create_bucket_button](./aws-site-setup/part_3/pic_3.png)

You can also see CloudFront creates a domain name for your distribution (i.e., d3f0oyjgi4e6fq.cloudfront.net). Once your 
distribution status changes to _Deployed_, you should be able to paste this in your browser and be taken to your site.

_Note_ you'll have to request an actual resource like /index.html, otherwise you may get a 403 message. e.g.
http://d3f0oyjgi4e6fq.cloudfront.net/index.html

This is not ideal, but we can get the right content by setting up a custom error response. 

- Click on the ID link of your distribution
- Click on the Error Pages tab
- Click Create Custom Error Response ![create_bucket_button](./aws-site-setup/part_3/pic_4.png)
- Choose _HTTP Error Code_ - _403: Forbidden_
- Choose _Customie Error Response_ - _Yes_
- In Response Page Path type _/index.html_
- Choose _HTTP Response Code_ - _200: OK_
- Click _Create_ ![create_bucket_button](./aws-site-setup/part_3/pic_5.png)

Your distribution may enter the _In Progress_ status again after setting up the custom error response. After some time,
you should be able to go to "/" at your CloudFront domain and get the right content (i.e. 
http://d3f0oyjgi4e6fq.cloudfront.net/)


## 3. Use your custom domain for CloudFront & Enable HTTPS

You can now create an Alias DNS record for your custom domain to the CloudFront domain, but CloudFront won't serve the
content unless you configure CloudFront with an SSL Certificate, so we'll set one of those up first. There are probably
many options to get yourself a cert but I'm going to use AWS's Certificate Manager (ACM) service.

Note that to request a cert through ACM, you either need access to create DNS records for that domain, or you need 
access to the email address associated with the WHOIS contact info for the domain (or one of the aminsistrative email
addresses, e.g. admin@example.com).

In the [AWS Console](https://console.aws.amazon.com/console/home) click on _Services_ and then search for Certificate 
Manager. Clicking Certificate Manger should take you to the [ACM home page](https://console.aws.amazon.com/acm/hom). On
this page, click _Request a certificate_.

- Choose Request a public certificate
- In the _Add domain names_ form, type your domain name and click Next 
  ![create_bucket_button](./aws-site-setup/part_4/pic_1.png)
- Here there are two options for validating that you are the owner of the cert. I'm going to use DNS Validation but if
  you want to use email validation you can do that 
  [here](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html). Choose _DNS Validation_
- Add tags if you like, or click _Review_
- Click _Confirm and Request_
  ![create_bucket_button](./aws-site-setup/part_4/pic_1_1.png)

You'll now have to go through a validation process with AWS to have the cert issued. If you're using DNS validation,
you'll see that it wants you to create a CNAME entry with your DNS provider in order to validate the cert. 
![create_bucket_button](./aws-site-setup/part_4/pic_2.png) 
If you're using Route 53, just click _Create Record in Route 53_ and it will create the validation record automatically.

Node that it may take up to 30 minutes for the DNS changes to propagate, and for AWS to validate the domain.

After Validation you can click _Continue_.

Now it's time to configure the CloudFront distribution with your custom domain name and SSL cert. 
- Go to CloudFront and clikc on the ID link for your distribution
- Click Edit
  ![create_bucket_button](./aws-site-setup/part_4/pic_3.png) 
- In the box that says _Alternate Domain Names (CNAMEs)_ type your custom domain name (e.g. albertlockett.ca)
- In the _SSL Certificate_ field, choose _Custom SSL Certificate (example.com):_
- In the textbox, choose your cert
  ![create_bucket_button](./aws-site-setup/part_4/pic_4.png) 
- click _Yes, Edit_ at the bottom of the form

Your CloudFront distribution will enter the _In Progress_ state again. After it's done you should be able to access 
your site at your own domain name:

http://albertlockett.ca

or using HTTPS

https://albertlockett.ca

## Closing Remarks

Creating your own website can be a good experience. I hope this article has helped you create your own website and that
you had a good time or learned something new.

Someday, you may want to update the content on your website. The first thing you'll need to do is to update the content
in your S3 bucket. You ca simply delete the files already in the bucket, and then replace them with your updated 
content.

After you update the content, it can take some time for the changes to propagate if you set up CloudFront CDN. This is 
because your files are cached in CDN for some time. To manually invalidate the cache, navigate to CloudFront in the 
AWS console and click _Invalidations_ and then click _Create Invalidation_ and in the _Object Paths_ input you can put 
/*.

All that said, having to log into the console every time can be kind of cumbersome, so you may consider 
[setting up the AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration/)
which would allow you to synchronize your website's files to the s3 bucket, and to create invalidations all from the 
comand line:

```
aws s3 sync ./my-website/ s3://albertlockett.ca

aws cloudfront create-invalidation \
  --distribution-id <MyDistId> \
  --paths "/*"
```

If you have any questions, comments or concerns about the information in this article please don't hesitate to 
[reach out](mailto:albert.lockett@gmail.com)