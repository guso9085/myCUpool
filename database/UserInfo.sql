

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `UserID` int(11) NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `Email` varchar(45) NOT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `Rating` decimal(2,2) DEFAULT NULL,
  `Driver` tinyint(1) DEFAULT NULL,
  `ProfPicture` blob,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserID` (`UserID`),
  CONSTRAINT `userlogin_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `userlogin` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `userinfo` VALUES ('101', 'Sam', 'Bennetts', '303-775-4695', 'samuel.bennetts@colorado.edu', 'I like to ski', null, '1', null);
INSERT INTO `userinfo` VALUES ('102', 'Zhiren', 'Chen', '720-361-9447', 'Zhiren.Chen@colorado.edu', 'I love snowboarding', null, '1', null);
INSERT INTO `userinfo` VALUES ('103', 'Thomas', 'Wold', '919-242-4413', 'ThomasEWold@real.com', 'I love pizza', null, '0', null);
INSERT INTO `userinfo` VALUES ('104', 'Delores', 'Chavez', '715-478-0201', 'DeloresDChavez@outlook.com', 'I am single', null, '1', null);
INSERT INTO `userinfo` VALUES ('105', 'Paul', 'Haddix', '682-841-9259', 'PaulTHaddix@gmail.com', 'I am a downhill expert rider', null, '1', null);
INSERT INTO `userinfo` VALUES ('106', 'Angela', 'Davis', '303-293-2813', 'AngelaJDavis@armyspy.com', 'I’m an engineering graduate', null, '0', null);
INSERT INTO `userinfo` VALUES ('107', 'Vanessa', 'Smith', '715-681-7909', 'VanessaMSmith@rhyta.com', 'I don’t like to follow trends', null, '0', null);
INSERT INTO `userinfo` VALUES ('108', 'Keith', 'Smith', '614-461-9429', 'KeithJSmith@gmail.com', 'I’m a bit obsessive about cleanliness and personalization', null, '1', null);
INSERT INTO `userinfo` VALUES ('109', 'Lynn', 'Well', '309-568-1320', 'LynnRWell@rhyta.com', 'I prefer coffee over tea', null, '1', null);
INSERT INTO `userinfo` VALUES ('143', 'tom', 'sss', null, '123', null, null, null, null);
