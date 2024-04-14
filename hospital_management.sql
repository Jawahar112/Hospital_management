-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2024 at 05:17 PM
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
  `Date` date NOT NULL,
  `appoinment_time` time NOT NULL,
  `Doctor_id` varchar(30) NOT NULL,
  `fees` varchar(30) NOT NULL,
  `Status` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `patient_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appoinment_id`, `patient_id`, `Date`, `appoinment_time`, `Doctor_id`, `fees`, `Status`, `email`, `patient_name`) VALUES
(31, '1be96536-bbb3-4f05-9ac9-434596', '2024-04-15', '10:00:00', '5833a2fc-e8d8-457e-8dce-b60f4c', 'pending', 'Booked', 'bh@gmail.com', 'jawahar'),
(32, '8a8965ca-0897-4743-acab-45db08', '2024-04-15', '10:30:00', '5833a2fc-e8d8-457e-8dce-b60f4c', 'pending', 'Booked', 'fd@gmail.xom', 'fd');

-- --------------------------------------------------------

--
-- Table structure for table `available_time`
--

CREATE TABLE `available_time` (
  `Available_id` varchar(30) NOT NULL,
  `Doctor_id` varchar(30) NOT NULL,
  `Avilable_time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Avilable_time`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `available_time`
--

INSERT INTO `available_time` (`Available_id`, `Doctor_id`, `Avilable_time`) VALUES
('1', '5833a2fc-e8d8-457e-8dce-b60f4c', '{\"Monday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Tuesday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Wednesday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Thursday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Friday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Saturnday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Sunday\": [\"12:00\", \"1:00\"]}'),
('2', 'b86e6760-cc59-4ee7-a6dd-09e397', '{\"Monday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Tuesday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Wednesday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Thursday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Friday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Saturnday\": [\"10:00\", \"10:30\", \"12:00\", \"1:00\", \"1:30\", \"2:00\"], \"Sunday\": [\"12:00\", \"1:00\"]}');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Department_id` char(5) NOT NULL,
  `Department_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Department_id`, `Department_name`) VALUES
('0', 'Anesthetics'),
('1', 'cardiology'),
('2', 'ENT'),
('3', 'neurology'),
('4', 'urology'),
('5', 'Renal unit'),
('6', 'Oncology');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `Id` varchar(30) NOT NULL,
  `Doctor_name` varchar(20) NOT NULL,
  `phone_no` int(15) NOT NULL,
  `specialist` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(11) NOT NULL,
  `department_id` varchar(30) NOT NULL,
  `salary` int(10) NOT NULL,
  `age` int(4) NOT NULL,
  `degree` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`Id`, `Doctor_name`, `phone_no`, `specialist`, `email`, `password`, `department_id`, `salary`, `age`, `degree`) VALUES
('5833a2fc-e8d8-457e-8dce-b60f4c', 'jansirani', 19289182, 'psyhologist', 'dkh@gmail.com', '1234', '2', 0, 0, 'Mbbs,bds'),
('b86e6760-cc59-4ee7-a6dd-09e397', 'natraj perumal', 832983928, 'ent specialist', 'natrajperumal12@gmail.com', '1234', '1', 0, 0, 'Mbbs,Bds');

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
('8a8965ca-0897-4743-acab-45db08', 'fd', 'df', 'Indian', 'df', '0000-00-00', 'fd@gmail.xom', 545, '45', 'male', 'A+', 0, ''),
('a0bc3a1e-32fb-43f1-8e57-2bc904', 'ENT', 'nataraj', 'natraj@gmail.co', '1234', '0000-00-00', 'undefined', 0, 'undefined', 'undefined', '8392893', 0, ''),
('c87ec922-e166-45f1-bda8-e6d95f', 'hg', 'g', 'Indian', 'rer', '0000-00-00', 'er@gmail.com', 65656, '3434', 'male', '', 0, '');

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
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `Doctor_Name` varchar(30) NOT NULL,
  `Doctor_id` varchar(30) NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL
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
  ADD KEY `doctor_key` (`Doctor_id`),
  ADD KEY `patient_key` (`patient_id`);

--
-- Indexes for table `available_time`
--
ALTER TABLE `available_time`
  ADD PRIMARY KEY (`Available_id`),
  ADD KEY `did` (`Doctor_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Department_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `dep_id` (`department_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appoinment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `doctor_key` FOREIGN KEY (`Doctor_id`) REFERENCES `doctors` (`Id`),
  ADD CONSTRAINT `patient_key` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`),
  ADD CONSTRAINT `pkey` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE;

--
-- Constraints for table `available_time`
--
ALTER TABLE `available_time`
  ADD CONSTRAINT `did` FOREIGN KEY (`Doctor_id`) REFERENCES `doctors` (`Id`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `d_id` FOREIGN KEY (`Department_id`) REFERENCES `department` (`Department_id`),
  ADD CONSTRAINT `dep_id` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);

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
