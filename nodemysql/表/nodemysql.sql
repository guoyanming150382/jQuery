-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2020 年 04 月 30 日 08:57
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `nodemysql`
--

-- --------------------------------------------------------

--
-- 表的结构 `nodemysql`
--

CREATE TABLE IF NOT EXISTS `nodemysql` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `produce` varchar(10) CHARACTER SET utf8 NOT NULL,
  `headP` varchar(10) CHARACTER SET utf8 NOT NULL,
  `moneyDate` char(10) CHARACTER SET utf8 NOT NULL,
  `number` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `nodemysql`
--

INSERT INTO `nodemysql` (`id`, `produce`, `headP`, `moneyDate`, `number`) VALUES
(2, '阿达', '阿斯达', '阿斯达', '阿达'),
(5, '人', '阿斯达', '阿达阿达', '阿达'),
(6, '1213', '12321', '1313', '131321'),
(8, '阿达', '阿达', '阿达', '阿达'),
(9, '刻录', '刻录', '刻录', '刻录54554545'),
(10, '刻录', '刻录', '啊大大', '2222'),
(11, '内车儿', '内车儿', '内车儿', '内车儿'),
(12, '委屈纹理', '驱蚊器·', '埃尔切翁', '1213');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
