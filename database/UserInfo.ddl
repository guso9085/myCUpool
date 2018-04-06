DROP TABLE IF EXISTS UserInfo;

CREATE TABLE IF NOT EXISTS UserInfo (

  UserID        INT          NOT NULL,
  FirstName     VARCHAR(45)  NOT NULL,
  LastName      VARCHAR(45)  NOT NULL,
  PhoneNumber   VARCHAR(45)  NULL,
  Email         VARCHAR(45)  NOT NULL,
  Description   VARCHAR(250) NULL,
  Rating        DECIMAL(2,2) NULL,
  Driver        TINYINT      NULL,
  ProfPicture   BLOB         NULL,
  PRIMARY KEY (UserID)
)