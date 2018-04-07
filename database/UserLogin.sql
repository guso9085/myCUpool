# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS UserLogin ;

CREATE TABLE IF NOT EXISTS UserLogin (
  LoginName 	VARCHAR(45) NOT NULL,
  UserID 	INT 		NOT NULL,
  PasswordHash 	BINARY(64) 	NOT NULL,
  LastLogin 	DATETIME 	NULL,
  PRIMARY KEY (LoginName),
  FOREIGN KEY (UserID) REFERENCES UserInfo(UserID)
);

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('samuel.bennetts@colorado.edu', 101, password('123456'),'2018-01-01 22:00:00');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('Zhiren.Chen@colorado.edu', 102, password('950724'),'2018-03-07 14:13:55');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('ThomasEWold@real.com', 103, password('919242'),'2018-04-01 15:22:05');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('DeloresDChavez@outlook.com', 104, password('7159291'),'2018-04-03 08:13:44');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('PaulTHaddix@gmail.com', 105, password('688632'),'2018-02-16 03:44:51');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('AngelaJDavis@armyspy.com', 106, password('323283'),'2018-02-08 20:13:14');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('VanessaMSmith@rhyta.com', 107, password('7177909'),'2018-01-05 18:24:10');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('KeithJSmith@gmail.com', 108, password('6168848'),'2018-02-17 09:55:49');

INSERT INTO UserLogin (LoginName, UserID, PasswordHash, LastLogin)
VALUES ('LynnRWell@rhyta.com', 109, password('399000'),'2018-03-05 13:04:21');

