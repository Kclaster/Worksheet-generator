DROP DATABASE IF EXISTS `nodejs_login`;
CREATE DATABASE `nodejs_login`;
USE `nodejs_login`;
ALTER TABLE `nodejs_login`.`users` 

CREATE TABLE `slope_intercept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(40) NOT NULL,
 PRIMARY KEY (`id`)
);