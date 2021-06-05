-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 05, 2021 at 12:10 PM
-- Server version: 5.7.34-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist`
--
CREATE DATABASE IF NOT EXISTS `todolist` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `todolist`;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `title` text,
  `description` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `done` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `id_user`, `title`, `description`, `created`, `done`) VALUES
(14, 11, 'hoje', 'vai ter uma festa. Bolo e guaraná, muitos doces para comer. É o seu aniversário', '2021-05-31 12:57:36', NULL),
(43, 11, 'xuxa', 'tudo vai bem com essa garota', '2021-06-05 07:57:16', '2021-06-05 09:57:54'),
(44, 11, 'fernando pessoa', 'triste de quem vive em casa\ncontente com seu lar\nsem que um sonho\nnum erguer de asas\nfaça até mais rubra a brasa\nda lareira a abandonar', '2021-06-05 08:04:50', '2021-06-05 10:05:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `login`, `email`, `password`) VALUES
(4, 'fabio', 'tenorio', 'fabio', 'fabio@gmail.com', 'test'),
(6, 'noemi', 'abrescia', 'noemi', 'noemi@gmail.com', 'test'),
(7, 'noemi', 'abrescia', 'noemi', 'noemi@gmail.com', 'test'),
(8, 'iris', 'abrescia', 'iris', 'iris@gmail.com', 'test'),
(9, 'tadeu', 'jadeu', 'naodeu', 'meudeu@gmail.com', 'test'),
(10, 'toto', 'toto', 'toto', 'toto@tdl.com', 'test'),
(11, 'malaco', 'maluco', 'malaco', 'malacomaluco@gmail.com', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
