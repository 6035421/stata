-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 12:10 PM
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
-- Database: `stata`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(20) NOT NULL,
  `gebruikersnaam` varchar(225) NOT NULL,
  `wachtwoord` varchar(225) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `gebruikersnaam`, `wachtwoord`) VALUES
(0, 'STATA', '$2y$10$bBd3iKOYMe4uSHdatNRM3OwILaCKUqCx2HRQ1zOdwto7.gHQZAvbO');

-- --------------------------------------------------------

--
-- Table structure for table `badges`
--

CREATE TABLE `badges` (
  `foto` varchar(255) DEFAULT NULL,
  `naam` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `badges`
--

INSERT INTO `badges` (`foto`, `naam`) VALUES
('https://th.bing.com/th/id/OIP.zV6aewDilFu-ADngPn7NugAAAA?rs=1&pid=ImgDetMain', 'The man behind the slaughter'),
('https://th.bing.com/th/id/OIP.edIGC9T9rEYVQx5-AUhqsAAAAA?rs=1&pid=ImgDetMain', 'Nom Nom Nom welcome to STATA');

-- --------------------------------------------------------

--
-- Table structure for table `gebruikers`
--

CREATE TABLE `gebruikers` (
  `id` int(10) NOT NULL,
  `gebruikersnaam` varchar(225) NOT NULL,
  `wachtwoord` varchar(225) NOT NULL,
  `foto` varchar(225) DEFAULT '/assets/images/profile-icon.png',
  `vrienden` varchar(255) DEFAULT NULL,
  `badges` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gebruikers`
--

INSERT INTO `gebruikers` (`id`, `gebruikersnaam`, `wachtwoord`, `foto`, `vrienden`, `badges`) VALUES
(1, 'Piet', '123', '/assets/images/profile-icon.png', 'eeeeeeeeeeeeeeeeeeeee', NULL),
(2, 'stefan', '$2y$10$84fbaAziPXRlNcLRas9Poez4CX1.drWL4VsT0VNCTcqSsYEmqu3rO', '/assets/images/profile-icon.png', NULL, NULL),
(3, 'luke', '$2y$10$Q0fSMgLaTU4J1Mt8ON40xuGqacVUEAQoh60iyE7j9bEr6O9.tGPrO', '/assets/images/profile-icon.png', NULL, NULL),
(4, 'eee', '$2y$10$c9EjzZATqd4uLQdGC45KueuA0012VdAy.pBFC3Gc0xa.uGra61IaK', '/assets/images/profile-icon.png', NULL, NULL),
(5, 'eee', '$2y$10$Vd00U.j0FR4S4WgQLoIVx.E65COPpSYYszC9jK45xkU8e1JdaT4G6', '/assets/images/profile-icon.png', NULL, '0'),
(6, 'eee', '$2y$10$wxtSONyMUxfbNZkemhqg4uUsg8Ei2BPQQU2LCU2K9VdK8hBYRgH6K', '/assets/images/profile-icon.png', NULL, '0'),
(7, 'eee', '$2y$10$5DZqFmMTHuaJm6RSLRfCfOe4mpr0KQhU9thGo2tAxipq9IiXz8dyi', '/assets/images/profile-icon.png', NULL, '0'),
(8, 'eee', '$2y$10$PEarfYP9ePShz/JDjzZkOeIm/VNTu4XhiUOrk9vYRosvFYBN/NsLe', '/assets/images/profile-icon.png', NULL, '0'),
(9, 'eee', '$2y$10$BVxfkn0fFR5W5FpWzIOorO30n7ftt0I4DAxAF/cZKiWFjU4PMTrUO', '/assets/images/profile-icon.png', NULL, '0'),
(10, 'eee', '$2y$10$6ArJupwJLCqlyC9cfSmVxeNr1T8Vw1vv.Q4fPod3beQwsz97zd4t6', '/assets/images/profile-icon.png', NULL, '0'),
(11, 'eee', '$2y$10$O0ELMoZJBIrVRqlvCfG3DehZQzmtKZUPvqqY6/6ppujqnrYC/E5RC', '/assets/images/profile-icon.png', NULL, '0'),
(12, 'eee', '$2y$10$RDnNBx7WHB18en3M/X0AVu0gvmbU2gvHlZj4PMZZs2JbBklULu0zG', '/assets/images/profile-icon.png', NULL, '0'),
(13, 'eee', '$2y$10$GXJ/EFBF42vIJvTss6I9iez.z3dFePodoTmMB2/bHAW5VnOH03LA6', '/assets/images/profile-icon.png', NULL, '0'),
(14, 'eee', '$2y$10$dLtX/muXhfYk074j/YwbHeM3Bz8llC1RBAa6M.Rp2/3QmiZxCl8tK', '/assets/images/profile-icon.png', NULL, '0'),
(15, 'eee', '$2y$10$SpjEWmZxebMYaQQsSf25veCgv6scBofcMJy5C1dsCBpgfPyMbWwa2', '/assets/images/profile-icon.png', NULL, '0'),
(16, 'eee', '$2y$10$wTNq52ikrumQiV6KpuzcnebFBqb0mTS/MlYUYpB0b5qzU23ivAZrK', '/assets/images/profile-icon.png', NULL, '0'),
(17, 'eee', '$2y$10$pqkMNNhPhliPo8ji7yVyC.6H1zJ3hm5l.xHvsY4SGhe4OoETQ05NG', '/assets/images/profile-icon.png', NULL, '0'),
(18, 'eee', '$2y$10$xSkUlxp1KwizXE5.FCmZaOXd/XtkII96W4WWgkjbJMCfVOC1brSYu', '/assets/images/profile-icon.png', NULL, '0'),
(19, 'eee', '$2y$10$TEm6zEoKWkycDhqlP4WKZuVOyL5QFNEcPmMz.jqHwAze.peIcy/O.', '/assets/images/profile-icon.png', NULL, '0'),
(20, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(21, 'eee333', '$2y$10$OlCVZU24RDpQg.ZHjzHEKuuvn.9YjskXplAPt848ei8N0WKTkJ4Tq', '/assets/images/profile-icon.png', NULL, '0'),
(22, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(23, 'eee333', '$2y$10$ifFCmOG2.xs4RxQMvTGce.kuZRXJg.UMdVYuzZ7CmmB0loxCbfFZ2', '/assets/images/profile-icon.png', NULL, '0'),
(24, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(25, 'eee3333', '$2y$10$YkWerrf8DSYC95RE9cMAKe1NCB/7O4gReUTsiIpCKqOVK/tCdqk46', '/assets/images/profile-icon.png', NULL, '0'),
(26, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(27, 'eee3333', '$2y$10$8j4l.s8ED.wFDiv.KTonsOqWYGcb268DjOL8D/hY/aK4QgotF.LBi', '/assets/images/profile-icon.png', NULL, '0'),
(28, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(29, 'eee3333', '$2y$10$3GTLReZCvVO2U2.FekjrPu18ng4/x87SyAn6EXxAlgmGlTtqANkwi', '/assets/images/profile-icon.png', NULL, '0'),
(30, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(31, 'eee3333', '$2y$10$QFAefBuUsKDzt9cbqwEh6uqfG6LLQBfo5ete.mdw9CJiGNXUXj6yW', '/assets/images/profile-icon.png', NULL, '0'),
(32, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(33, 'eee3333', '$2y$10$qk0MWFniz/8uQ.uZkQkpEOWcS0fLSKbcXHxS2znY1qhmb0.Ah7SgG', '/assets/images/profile-icon.png', NULL, '0'),
(34, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(35, 'lukeeeeee', '$2y$10$Ut4WdNoKgYzd.JW.C.aCKOLu9Z.DsuzBLLnBEfDb2QvUaf6YmQ30.', '/assets/images/profile-icon.png', NULL, '0'),
(36, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(37, 'lukeeeeee', '$2y$10$0zdJRaOjgZapisVJ6wJ.MONjJIPXnZ9QjsSNJF4hZCWoH13RYfn5y', '/assets/images/profile-icon.png', NULL, '0'),
(38, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(39, 'lukeeeeee', '$2y$10$UdRiPgnRWTmJFDAeoBDCOuIPQWpbrJhMxPiHawcQnvnizhpUm9DYi', '/assets/images/profile-icon.png', NULL, '0'),
(40, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(41, 'lukeeeeee', '$2y$10$xx/oj3ND8nlTL4VtDnAEhuFNzyBYLFG0sF.q1DImSAzlhJBnGj5ru', '/assets/images/profile-icon.png', NULL, '0'),
(42, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(43, 'lukeeeeee', '$2y$10$POccYRkq7wktcmpg7uyBmOYhpUr7TlW8SiIfP24ZuyWbaPkZEXg9S', '/assets/images/profile-icon.png', NULL, '0'),
(44, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(45, 'lukeeeeee', '$2y$10$eQ9zg9W2Rz7LvvaRmP/F7OuUuibgWg7qhHy564N/Tpn/OBE9Se1ua', '/assets/images/profile-icon.png', NULL, '0'),
(46, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(47, 'lukeeeeee', '$2y$10$qdybt9BbxJ9I7NdfKxSdV.5xmv4H2/UC7yEWUJbzeSVd1onn/M1v.', '/assets/images/profile-icon.png', NULL, '0'),
(48, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(49, 'lukeeeeee', '$2y$10$M291ZL/MDwIepKuzNa2UUeXyYwcEv5hod4t5iD.otMdLBeaV1tW5m', '/assets/images/profile-icon.png', NULL, '0'),
(50, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(51, 'lukeeeeee', '$2y$10$jHGPixDRYIyOOrkALD0TV.c97sYxtXsU0HN46DmRvNhzgZwHsrNAi', '/assets/images/profile-icon.png', NULL, '0'),
(52, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(53, 'lukeeeeee', '$2y$10$D9.e76caap1Sc1yeTh0jTeG1a7qtz0Q8vRizwPh4iGON39jJs/T4C', '/assets/images/profile-icon.png', NULL, '0'),
(54, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(55, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$jGECv/bDcUiH9hJ90APMBOhTZ.TaTsFXyqEmgvYr32G.9xh7n1SrS', '/assets/images/profile-icon.png', NULL, '0'),
(56, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(57, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$SuGOs6.6xeiYK2CLEmN4h.ajSCN8zMph9rqIb02dObUnfROr1.IVC', '/assets/images/profile-icon.png', NULL, '0'),
(58, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(59, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$7KWRM32esSPPnaFAVdWXoOwa09ElRSn7ClW3u.Az8xRI8MXM3nuE.', '/assets/images/profile-icon.png', NULL, '0'),
(60, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(61, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$sTNdd1eNtNUlT5c1MdPS8eSKgB84XYoJvfUXvfdKasI2CdvhMM.R2', '/assets/images/profile-icon.png', NULL, '0'),
(62, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(63, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$nrBignDzO3pq/bd4Ospefu2L97CWEK5s5irtraap16rmHNYUFf.26', '/assets/images/profile-icon.png', NULL, '0'),
(64, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(65, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$lZENdkyEcJBbxhwPYQd5nevYzDMgn2nmRjbpZMjRXm7vGJpgkLkkO', '/assets/images/profile-icon.png', NULL, '0'),
(66, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(67, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', '$2y$10$wUCVzyR8MAioOQrsYsZe.uUoOegMcq2PBBaE8/zCfLIJ4euQsfhBK', '/assets/images/profile-icon.png', NULL, '0'),
(68, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(69, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(70, 'aaa', '$2y$10$ww2E/2zSt171VekerugnpeIMs/.lAGR5eD5NGVrpjTEfU10HAnPT6', '/assets/images/profile-icon.png', NULL, '0'),
(71, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(72, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(73, 'aaa', '$2y$10$0HLYMn8ea1hRnsk/UnQjIOhoLR88aipSv3mfe5IhrB0b9WVRdU4mS', '/assets/images/profile-icon.png', NULL, '0'),
(74, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(75, 'rrr', '$2y$10$OGkJfa7Xdp7vh3P6Pbs16e1Pxmf/bodo10tS1VAq5cKlpcODyhKEu', '/assets/images/profile-icon.png', NULL, '0,The man behind the slaughter'),
(76, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(77, '', '', '/assets/images/profile-icon.png', NULL, '0'),
(78, 'ttt', '$2y$10$jMffMgEpUfiy.t8XlOlRreZzZ.G5V0lj5aQlF3OLVHBIOWL84mi3.', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(79, 'ttt', '$2y$10$UciXUaxMXOrthMVsYUL/ru7xnwVNfAlqOo6zt8xiin/0lrS2PORm.', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(80, 'qqq', '$2y$10$j9Zrn9giUEWHavXjNSbh5uhZ.phXDOEpaVliDJb16dnJf70ITwXYa', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(81, 'qqq', '$2y$10$48JHsadrarnYAnXbuqSF1OAQvKBqGjIhUWDuOKXjz7pl/HHXrAuCS', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(82, 'ooo', '$2y$10$bZx/JHHLNxj.FYTb0rmMNelYcfduXPYgourK0i1q2L682.sfD./7a', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n,The man behind the slaughter'),
(83, 'hhh', '$2y$10$RiSKlQ0gDBCO4HH2YvQSJ.oVAwIu8174ht3MNV5CM0gX6Z6P98hri', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(84, 'yyy', '$2y$10$W.sBAo9mKHr0FVokO97hk.onuLTtBVBhEffDIUYjZLx/X4vyo8reW', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(85, 'ppp', '$2y$10$m24T1p3XrgWrpxfbIbapBOsCU6VXqTYoNB05Rma0C16VePEpBBbBC', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n'),
(86, 'ddd', '$2y$10$oQoBwkVT64leNQRauEA6DO1gj1mtfIvztUybW7uGMmOh7EnTkVulC', '/assets/images/profile-icon.png', NULL, 'Nom Nom Nom welcome to STATA\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
