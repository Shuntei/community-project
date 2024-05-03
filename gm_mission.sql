-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2024 年 05 月 02 日 16:56
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ruins_final`
--

-- --------------------------------------------------------

--
-- 資料表結構 `gm_mission`
--

CREATE TABLE `gm_mission` (
  `mission_id` int(20) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `mission_name` varchar(255) NOT NULL,
  `activate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `gm_mission`
--

INSERT INTO `gm_mission` (`mission_id`, `user_id`, `mission_name`, `activate`) VALUES
(1, 1, 'Edit your avatar.', 1),
(2, 1, 'You\'ve found a LINK.', 0),
(3, 1, 'Teleport yourself.', 0),
(4, 1, 'Have you seen HomePage?', 0),
(5, 1, '!important member page', 0),
(6, 1, 'View SNS', 0),
(7, 1, 'Love window shopping', 0),
(8, 1, 'tour tour tour', 0),
(9, 1, 'LIVE WAREHOUSE.', 0),
(10, 1, 'shut up & pay attention', 0),
(11, 1, 'tic-tac-toe 01', 0),
(12, 1, 'tic-tac-toe harder', 0),
(13, 1, 'Done all.', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `gm_mission`
--
ALTER TABLE `gm_mission`
  ADD PRIMARY KEY (`mission_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `gm_mission`
--
ALTER TABLE `gm_mission`
  MODIFY `mission_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
