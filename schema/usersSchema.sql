DROP DATABASE IF EXISTS `nodejs_login`;
CREATE DATABASE `nodejs_login`;
USE `nodejs_login`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
 PRIMARY KEY (`id`)
);