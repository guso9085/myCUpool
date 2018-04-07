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
VALUES ('Sam1234', 101, password('123456'),'2018-01-01 22:00:00');
