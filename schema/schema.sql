DROP DATABASE IF EXISTS `slope_intercept`;
CREATE DATABASE `slope_intercept`;
USE `slope_intercept`;

CREATE TABLE `slope_intercept_list` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(10) NOT NULL,
  `min` integer(10) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `mx+b=y` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `b+mx=y` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);


CREATE TABLE `mx=y-b` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `negb+y=mx` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `negmx=b-y` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `y-b=mx` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ax=-by+c` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ax=c-by` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `c=ax+by` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `standard-form` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);
