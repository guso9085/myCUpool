# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS UserLogin ;

CREATE TABLE IF NOT EXISTS UserLogin (
  LoginName 	VARCHAR(45) NOT NULL,
  UserID 		INT 		NOT NULL,
  PasswordHash 	BINARY(64) 	NOT NULL,
  LastLogin 	DATETIME 	NULL,
  PRIMARY KEY (LoginName)
)

