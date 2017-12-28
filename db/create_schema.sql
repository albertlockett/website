create schema if not exists lockett;
use lockett;

create table if not exists mail (
  mail_id bigint not null auto_increment,
  sender text not null,
  receiver text not null,
  PRIMARY KEY (mail_id)
);