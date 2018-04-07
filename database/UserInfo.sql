# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS User;

CREATE TABLE IF NOT EXISTS User (
  UserID        INT           NOT NULL AUTO_INCREMENT,
  FirstName     VARCHAR(45)   NOT NULL,
  LastName      VARCHAR(45)   NOT NULL,
  PhoneNumber   VARCHAR(45)   NOT NULL,
  Email         VARCHAR(45)   NOT NULL,
  Description   VARCHAR(250)  NULL,
  Rating        DECIMAL(2,2)  NULL,
  Driver        BOOL          NULL,
  ProfPicture   BLOB          NULL,
  UNIQUE (UserID)
  PRIMARY KEY (UserID)
)

AUTO_INCREMENT = 101; 

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Sam', 'Bennetts', '303-775-4695', 'samuel.bennetts@colorado.edu', 'I like to ski', 1));

