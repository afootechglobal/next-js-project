-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2024 at 01:36 PM
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
-- Table structure for table `setup_backend_settings_tab`
--

CREATE TABLE `setup_backend_settings_tab` (
  `sn` int(11) NOT NULL,
  `backend_setting_id` varchar(10) NOT NULL,
  `smtp_host` varchar(100) NOT NULL,
  `smtp_username` varchar(100) NOT NULL,
  `smtp_password` varchar(100) NOT NULL,
  `smtp_port` int(11) NOT NULL,
  `sender_name` varchar(100) NOT NULL,
  `support_email` varchar(100) NOT NULL,
  `delivery_fee` decimal(10,0) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_number` varchar(20) NOT NULL,
  `promo_code` int(11) NOT NULL,
  `promo_amount_limit` int(11) NOT NULL,
  `payment_key` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `setup_backend_settings_tab`
--

INSERT INTO `setup_backend_settings_tab` (`sn`, `backend_setting_id`, `smtp_host`, `smtp_username`, `smtp_password`, `smtp_port`, `sender_name`, `support_email`, `delivery_fee`, `bank_name`, `account_name`, `account_number`, `promo_code`, `promo_amount_limit`, `payment_key`, `date`) VALUES
(1, 'BK_ID001', 'mail.agrohandlers.com', 'help@agrohandlers.com', '1971@@@ademorinola12', 465, 'AgroHandlers', 'vhilimited@gmail.com', 3000, 'GT BANK', 'VALUEHANDLERS INTERNATIONAL LTD - PROGRAMS', '0254628084', 223344, 10000, 'pk_test_5a27902934264b8a8f8120c15c4c0f198b9715e3', '2023-10-23 20:21:04');

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
(1, 'USER', 'USER ID COUNT', 5);

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
-- Dumping data for table `user_tab`
--

INSERT INTO `user_tab` (`sn`, `user_id`, `fullname`, `email`, `phone`, `address`, `status_id`, `otp`, `password`, `date`) VALUES
(1, 'USER001202431412171', 'AFOLABI TAIWO ABAYOMI', 'afolabitaiwoabayomi112@gmail.com', '09055066755', '12, KOTCO ROAD, ODE REMO', '1', '621662', '$2b$10$rkOuvQ3OGY7j/jQG4c7qTeo2kzYnRDCwwfJbD41sgRKs6CaR3WHIa', '2024-03-21 12:06:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `setup_backend_settings_tab`
--
ALTER TABLE `setup_backend_settings_tab`
  ADD PRIMARY KEY (`sn`);

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
-- AUTO_INCREMENT for table `setup_backend_settings_tab`
--
ALTER TABLE `setup_backend_settings_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

