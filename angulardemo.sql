-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2017 at 02:11 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angulardemo`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message_title` varchar(50) DEFAULT NULL,
  `message_body` text,
  `sender_id` int(11) DEFAULT NULL,
  `important` tinyint(4) DEFAULT '0',
  `receiver_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `delete_status` tinyint(4) DEFAULT '0',
  `status` varchar(50) DEFAULT 'Inactive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message_title`, `message_body`, `sender_id`, `important`, `receiver_id`, `created_date`, `modified_date`, `delete_status`, `status`) VALUES
(1, 'hi there', 'hi how are you ', 2, 0, 33, '2017-03-04 17:15:01', '2017-03-05 03:22:58', 0, 'Inactive'),
(3, 'hey there', 'this is from hey there', 36, 0, 33, '2017-03-04 17:40:19', '2017-03-05 03:38:48', 0, 'Inactive'),
(8, 'Re:email', 'hey vikram how do you do', 33, 1, 2, '2017-03-04 21:39:04', '2017-03-05 02:40:06', 0, 'Inactive'),
(9, 'reply to email', 'hey man m fine too', 2, 0, 33, '2017-03-04 21:39:56', '2017-03-05 03:38:46', 0, 'Inactive'),
(10, 'habib', 'micheal habib texted after long time man. Thanks', 33, 0, 36, '2017-03-04 22:07:24', '2017-03-05 03:07:24', 0, 'Inactive'),
(11, 'other reply', 'hey vikram this is an additional reply', 33, 0, 2, '2017-03-04 22:27:12', '2017-03-05 03:27:12', 0, 'Inactive'),
(12, 'hey this is habib', 'hi this is micheal habib m going out with my wife. I will find a nice girl for you. man. cut ur hair and you will get it', 36, 0, 33, '2017-03-04 22:38:10', '2017-03-05 21:08:32', 0, 'Inactive');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `contact_no` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `location`, `contact_no`) VALUES
(2, 'vikram', 'vikram@gmail.com', '20ram', 'vikram', 'newjersy', '3093303'),
(33, 'Bishwash sharma', '20wash.sharma@gmail.com', '20wash', 'GhartensionEight8', 'florida miami', '17862236745'),
(36, 'Bishwash sharma', '20wash1.sharma@gmail.com', '20wash1', 'ghartension', 'miami', '7862236745'),
(37, 'Sapana', 'sana@sapana.com', 'sana_sapana', 'bipana', 'pokhara', '9779849419785'),
(38, 'manisa', 'mani@manisa.com', 'man', 'manish', 'koteshwor', '393933939'),
(41, 'bishal sharma', 'shybishwas2047@yahoo.com', 'wash20', 'GhartensionEight8', 'manamaiju', '7862236745'),
(42, 'vkpatel', 'vkpatel@gmail.com', 'vk_patel', 'vkpatel', 'miami', '393034304'),
(43, '', '', '', '', '', ''),
(44, 'sapana kc', 'sana@gmail.com', 'my_sana', 'ghartension', 'pokhara', '7862236745');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
