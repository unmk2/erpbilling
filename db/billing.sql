-- --------------------------------------------------------
-- Host:                         172.17.0.3
-- Server version:               5.5.60-0ubuntu0.14.04.1 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table billing.login: ~0 rows (approximately)
DELETE FROM `login`;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` (`id`, `nome`, `email`, `rua`, `numero`, `bairro`, `cep`, `cidade`, `login`, `senha`, `lang`) VALUES
	(1, 'Alexandre Sousa', 'sousa.akira@gmail.com', 'Rua A ', '17', 'Centro', '63700000', 'Crateus', 'admin', 'admin', 'pt-br');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Dumping data for table billing.nas: ~0 rows (approximately)
DELETE FROM `nas`;
/*!40000 ALTER TABLE `nas` DISABLE KEYS */;
/*!40000 ALTER TABLE `nas` ENABLE KEYS */;

-- Dumping data for table billing.radacct: 0 rows
DELETE FROM `radacct`;
/*!40000 ALTER TABLE `radacct` DISABLE KEYS */;
/*!40000 ALTER TABLE `radacct` ENABLE KEYS */;

-- Dumping data for table billing.radcheck: 0 rows
DELETE FROM `radcheck`;
/*!40000 ALTER TABLE `radcheck` DISABLE KEYS */;
/*!40000 ALTER TABLE `radcheck` ENABLE KEYS */;

-- Dumping data for table billing.radgroupcheck: 0 rows
DELETE FROM `radgroupcheck`;
/*!40000 ALTER TABLE `radgroupcheck` DISABLE KEYS */;
/*!40000 ALTER TABLE `radgroupcheck` ENABLE KEYS */;

-- Dumping data for table billing.radgroupreply: 0 rows
DELETE FROM `radgroupreply`;
/*!40000 ALTER TABLE `radgroupreply` DISABLE KEYS */;
/*!40000 ALTER TABLE `radgroupreply` ENABLE KEYS */;

-- Dumping data for table billing.radippool: ~0 rows (approximately)
DELETE FROM `radippool`;
/*!40000 ALTER TABLE `radippool` DISABLE KEYS */;
/*!40000 ALTER TABLE `radippool` ENABLE KEYS */;

-- Dumping data for table billing.radpostauth: 0 rows
DELETE FROM `radpostauth`;
/*!40000 ALTER TABLE `radpostauth` DISABLE KEYS */;
/*!40000 ALTER TABLE `radpostauth` ENABLE KEYS */;

-- Dumping data for table billing.radreply: 0 rows
DELETE FROM `radreply`;
/*!40000 ALTER TABLE `radreply` DISABLE KEYS */;
/*!40000 ALTER TABLE `radreply` ENABLE KEYS */;

-- Dumping data for table billing.radusergroup: 0 rows
DELETE FROM `radusergroup`;
/*!40000 ALTER TABLE `radusergroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `radusergroup` ENABLE KEYS */;

-- Dumping data for table billing.wimax: 0 rows
DELETE FROM `wimax`;
/*!40000 ALTER TABLE `wimax` DISABLE KEYS */;
/*!40000 ALTER TABLE `wimax` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
