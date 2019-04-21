DROP DATABASE IF EXISTS `slope_intercept`;
CREATE DATABASE `slope_intercept`;
USE `slope_intercept`;

CREATE TABLE `slope_intercept_list` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `question` varchar(50) NOT NULL,
  `answer` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
);