-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2024 at 12:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `setup_counter_tab`
--

CREATE TABLE `setup_counter_tab` (
  `sn` int(11) NOT NULL,
  `counter_id` varchar(100) NOT NULL,
  `counter_discription` varchar(225) NOT NULL,
  `counter_value` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `setup_counter_tab`
--

INSERT INTO `setup_counter_tab` (`sn`, `counter_id`, `counter_discription`, `counter_value`) VALUES
(1, 'USER', 'USER ID COUNT', 0);

-- --------------------------------------------------------

--
-- Table structure for table `status_tab`
--

CREATE TABLE `status_tab` (
  `sn` int(11) NOT NULL,
  `status_id` varchar(50) NOT NULL,
  `status_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status_tab`
--

INSERT INTO `status_tab` (`sn`, `status_id`, `status_name`) VALUES
(1, 'STATUS001', 'ACTIVE'),
(2, 'STATUS002', 'SUSPENDED');

-- --------------------------------------------------------

--
-- Table structure for table `user_tab`
--

CREATE TABLE `user_tab` (
  `sn` int(11) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `status_id` varchar(50) NOT NULL,
  `otp` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `setup_counter_tab`
--
ALTER TABLE `setup_counter_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `status_tab`
--
ALTER TABLE `status_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `user_tab`
--
ALTER TABLE `user_tab`
  ADD PRIMARY KEY (`sn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `setup_counter_tab`
--
ALTER TABLE `setup_counter_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `status_tab`
--
ALTER TABLE `status_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_tab`
--
ALTER TABLE `user_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
