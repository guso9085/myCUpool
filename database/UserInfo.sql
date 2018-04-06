DROP TABLE IF EXISTS UserInfo;

CREATE TABLE IF NOT EXISTS UserInfo (

  UserID        INT           NOT NULL AUTO_INCREMENT,
  FirstName     VARCHAR(45)   NOT NULL,
  LastName      VARCHAR(45)   NOT NULL,
  PhoneNumber   VARCHAR(45)   NULL,
  Email         VARCHAR(45)   NOT NULL,
  Description   VARCHAR(250)  NULL,
  Rating        DECIMAL(2,2)  NULL,
  Driver        BOOL          NULL,
  ProfPicture   BLOB          NULL,
  UNIQUE (UserID)
  PRIMARY KEY (UserID)
)

AUTO_INCREMENT = 100; 

INSERT INTO UserInfo (UserID, FirstName, LastName, PhoneNumber, Email, Description, Rating, Driver, ProfPicture)
VALUES ()