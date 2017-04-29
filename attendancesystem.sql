-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 03 Mar 2017, 22:04:53
-- Sunucu sürümü: 5.7.14
-- PHP Sürümü: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `attendancesystem`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `psh_raw`
--

CREATE TABLE `psh_raw` (
  `rid` int(11) NOT NULL COMMENT 'Row unique id',
  `fk_user` int(11) NOT NULL COMMENT 'Reference to user table',
  `time` datetime NOT NULL,
  `direct` int(11) NOT NULL COMMENT 'Enter = 1; Leave = 0',
  `type` int(11) NOT NULL COMMENT 'Type of leave: General = 1;Vacation = 2; Doctor = 3...'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `psh_raw`
--

INSERT INTO `psh_raw` (`rid`, `fk_user`, `time`, `direct`, `type`) VALUES
(62, 4, '2017-02-28 00:50:13', 0, 1),
(58, 4, '2017-02-28 00:50:05', 1, 1),
(59, 1, '2017-02-28 00:50:08', 0, 1),
(60, 2, '2017-02-28 00:50:10', 0, 1),
(57, 3, '2017-02-28 00:50:01', 1, 1),
(56, 2, '2017-02-28 00:49:57', 1, 1),
(88, 5, '2017-03-02 23:04:28', 0, 1),
(61, 3, '2017-02-28 00:50:11', 0, 1),
(55, 1, '2017-02-28 00:49:31', 1, 1),
(87, 5, '2017-03-02 23:04:17', 1, 1),
(84, 5, '2017-01-28 00:53:13', 0, 1),
(83, 5, '2017-01-28 00:50:13', 1, 1),
(82, 5, '2017-02-28 21:55:41', 0, 1),
(81, 5, '2017-02-28 21:55:36', 1, 1),
(80, 1, '2017-02-28 14:00:06', 1, 1),
(79, 2, '2017-02-28 13:59:22', 1, 1),
(78, 1, '2017-02-28 12:42:32', 0, 1),
(77, 1, '2017-02-28 12:42:28', 1, 1),
(76, 1, '2017-02-28 12:41:38', 0, 1),
(93, 5, '2017-03-02 15:51:12', 0, 1),
(92, 5, '2017-03-02 15:50:54', 1, 1),
(90, 1, '2017-03-02 23:06:51', 1, 1),
(91, 1, '2017-03-02 23:14:40', 0, 1),
(94, 4, '2017-02-28 00:50:30', 1, 1),
(95, 4, '2017-02-28 00:52:30', 0, 1),
(96, 3, '2017-03-03 19:05:41', 1, 1),
(97, 3, '2017-03-03 19:05:46', 0, 1),
(98, 4, '2017-03-04 00:40:01', 1, 1),
(99, 5, '2017-03-04 00:40:03', 1, 1),
(100, 4, '2017-03-04 00:40:05', 0, 1),
(101, 5, '2017-03-04 00:40:07', 0, 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `user`
--

INSERT INTO `user` (`uid`, `name`) VALUES
(1, 'James Montemagno'),
(2, 'Eva Adamkova'),
(3, 'Volkan Sahin'),
(4, 'John Doe'),
(5, 'Kaan Sahin');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `psh_raw`
--
ALTER TABLE `psh_raw`
  ADD PRIMARY KEY (`rid`);

--
-- Tablo için indeksler `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `psh_raw`
--
ALTER TABLE `psh_raw`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Row unique id', AUTO_INCREMENT=102;
--
-- Tablo için AUTO_INCREMENT değeri `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
