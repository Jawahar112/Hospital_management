-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2024 at 08:11 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(30) NOT NULL,
  `password` varchar(15) NOT NULL,
  `phoneno` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`, `phoneno`) VALUES
('admin@gmail.com', '1234', '546546456');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appoinment_id` int(11) NOT NULL,
  `patient_id` varchar(30) NOT NULL,
  `Doctor_id` char(5) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Department_id` char(5) NOT NULL,
  `Department_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `Doctor_id` char(5) NOT NULL,
  `Doctor_name` varchar(20) NOT NULL,
  `Department_id` char(5) NOT NULL,
  `phone_no` int(15) NOT NULL,
  `specialist` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`Doctor_id`, `Doctor_name`, `Department_id`, `phone_no`, `specialist`, `email`, `password`) VALUES
('0', 'jansi', '0', 65656, 'cardiology', '0', '0'),
('1', 'jawahar', '1', 54545, 'arthologist', 'doctor@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `medicalrecords`
--

CREATE TABLE `medicalrecords` (
  `patient_id` int(11) NOT NULL,
  `treatment` varchar(11) NOT NULL,
  `testresults` varchar(11) NOT NULL,
  `appoinment_id` int(11) DEFAULT NULL,
  `record_Id` int(11) NOT NULL,
  `bills` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicalrecords`
--

INSERT INTO `medicalrecords` (`patient_id`, `treatment`, `testresults`, `appoinment_id`, `record_Id`, `bills`) VALUES
(5, 'yt', 'ty', NULL, 2, 'ty');

-- --------------------------------------------------------

--
-- Table structure for table `nurse`
--

CREATE TABLE `nurse` (
  `Nurse_Id` char(5) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone_no` int(10) NOT NULL,
  `Address` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nurseward`
--

CREATE TABLE `nurseward` (
  `WardAssignmentId` char(5) NOT NULL,
  `Nurse_id` int(5) NOT NULL,
  `Ward_Id` int(5) NOT NULL,
  `Shift` datetime NOT NULL,
  `Shifttime` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patient_id` varchar(30) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `Nationality` varchar(15) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `DoA` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone_no` int(10) NOT NULL,
  `Emergency_contact` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `Bloodtype` varchar(11) NOT NULL,
  `Age` int(3) NOT NULL,
  `weight` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patient_id`, `first_name`, `last_name`, `Nationality`, `Address`, `DoA`, `Email`, `Phone_no`, `Emergency_contact`, `gender`, `Bloodtype`, `Age`, `weight`) VALUES
('1be96536-bbb3-4f05-9ac9-434596', 'jawahar', 'B', 'Indian', 'rer34', '0000-00-00', 'bh@gmail.com', 4545, '4545', 'male', '', 0, ''),
('8a8965ca-0897-4743-acab-45db08', 'fd', 'df', 'Indian', 'df', '0000-00-00', 'fd@gmail.xom', 545, '45', 'male', 'A+', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentnumber` int(20) NOT NULL,
  `patient_id` char(5) NOT NULL,
  `treatement_id` char(5) NOT NULL,
  `Total_amount_due` decimal(10,2) NOT NULL,
  `Duedate` date NOT NULL,
  `Amount_paid` decimal(10,2) NOT NULL,
  `current_balance` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `Pharmacy_id` char(5) NOT NULL,
  `pharmacy_name` varchar(20) NOT NULL,
  `pharmacy_address` varchar(30) NOT NULL,
  `phone_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `Room_no` char(5) NOT NULL,
  `patient_id` char(5) NOT NULL,
  `staff_id` char(5) NOT NULL,
  `Admisson_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `Staff_id` char(5) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `Address` varchar(40) NOT NULL,
  `phonenumber` int(15) NOT NULL,
  `password` varchar(11) NOT NULL,
  `salary` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`Staff_id`, `fname`, `lastname`, `email`, `Address`, `phonenumber`, `password`, `salary`) VALUES
('0', 'kishore', 'kumar', 'kishore@gmail.com', '12090a', 842862583, '1234', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `ward`
--

CREATE TABLE `ward` (
  `Ward_id` char(5) NOT NULL,
  `wardname` varchar(20) NOT NULL,
  `description` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appoinment_id`),
  ADD KEY `pkey` (`patient_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Department_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`Doctor_id`);

--
-- Indexes for table `medicalrecords`
--
ALTER TABLE `medicalrecords`
  ADD PRIMARY KEY (`record_Id`),
  ADD KEY `ap_key` (`appoinment_id`);

--
-- Indexes for table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`Nurse_Id`);

--
-- Indexes for table `nurseward`
--
ALTER TABLE `nurseward`
  ADD PRIMARY KEY (`WardAssignmentId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentnumber`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`Pharmacy_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`Room_no`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`Staff_id`);

--
-- Indexes for table `ward`
--
ALTER TABLE `ward`
  ADD PRIMARY KEY (`Ward_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `d_key` FOREIGN KEY (`Doctor_id`) REFERENCES `doctors` (`Doctor_id`),
  ADD CONSTRAINT `pkey` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE;

--
-- Constraints for table `medicalrecords`
--
ALTER TABLE `medicalrecords`
  ADD CONSTRAINT `ap_key` FOREIGN KEY (`appoinment_id`) REFERENCES `appointment` (`appoinment_id`),
  ADD CONSTRAINT `pk` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
