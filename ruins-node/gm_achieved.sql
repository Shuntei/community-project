-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2024 年 05 月 03 日 14:19
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
-- 資料表結構 `gm_achieved`
--

CREATE TABLE `gm_achieved` (
  `achieved_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `mission_id` int(11) NOT NULL,
  `mission_name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT 0,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `gm_achieved`
--

INSERT INTO `gm_achieved` (`achieved_id`, `user_id`, `mission_id`, `mission_name`, `title`, `description`, `activate`, `last_update`) VALUES
(1, 1, 1, 'Mission 001', 'Create account.', 'Game editing features are unlocked.', 1, '2024-05-03 05:56:29'),
(2, 1, 2, 'Mission 002', 'Found a Portal.', 'Awesome! You found a Portal.', 0, '2024-05-03 06:10:03'),
(3, 1, 3, 'Mission 003', 'Teleport yourself.', 'Link to some where else.', 0, '2024-05-03 06:10:46'),
(4, 1, 4, 'Mission 004', 'Rubbish?', 'Yes it smells like rotten garbage.', 0, '2024-05-03 06:13:06'),
(5, 1, 5, 'Mission 005', 'It\'s construction.', 'Don\'t stand too close you might hurt yourself.', 0, '2024-05-03 06:15:04'),
(6, 1, 6, 'Mission 006', 'Sooo Annoying.', 'Clap to welcome mosquito.', 0, '2024-05-03 06:16:56');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `gm_achieved`
--
ALTER TABLE `gm_achieved`
  ADD PRIMARY KEY (`achieved_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `gm_achieved`
--
ALTER TABLE `gm_achieved`
  MODIFY `achieved_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
