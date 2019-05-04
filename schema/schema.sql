DROP DATABASE IF EXISTS `slope_intercept`;
CREATE DATABASE `slope_intercept`;
USE `slope_intercept`;

CREATE TABLE `slope_intercept_positive` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(10) NOT NULL,
  `min` integer(10) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `slope_intercept_negative` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `slope_intercept_both` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);


CREATE TABLE `standard_form_positive` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(10) NOT NULL,
  `min` integer(10) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `standard_form_negative` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);

CREATE TABLE `standard_form_both` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  `max` integer(100) NOT NULL,
  `min` integer(100) NOT NUll,
  PRIMARY KEY (`id`)
);
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `created` DATE NULL,
  PRIMARY KEY (`id`));
