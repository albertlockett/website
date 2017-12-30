import * as React from 'react';
import { 
  Container, 
  Grid, 
  Header, 
  List, 
  Menu, 
  Segment
} from 'semantic-ui-react';

export class HomePage extends React.Component {

  public render() {
    return (
      <div className="home-page">
        <Segment
            inverted
            className="title-segment"
            textAlign="center"
            vertical>
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Webmail</Menu.Item>
            </Menu>
          </Container>
          <Container text>
            <Header 
                as="h1"
                className="title"
                content="albertlockett.ca"
                inverted />
            <Header
                as="h2"
                content="Welcome to my site"
                inverted />
          </Container>
        </Segment>

        <Segment className="main-segment" vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h1">Under Construction</Header>
                <p>Please be patient while I get this site back online</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> 

        <Segment className="footer-segment" inverted vertical>
          <Container>
            <Grid divided inserted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Contact</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Friends' />
                  <List link inverted>
                    <List.Item as='a'>lockett.ca</List.Item>
                    <List.Item as='a'>terrylockett.ca</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }

}