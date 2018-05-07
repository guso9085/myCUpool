# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS DriverPost;

CREATE TABLE IF NOT EXISTS DriverPost (
  PostingID       INT           NOT NULL AUTO_INCREMENT,
  Destination     VARCHAR(45)   NOT NULL,
  FirstName       VARCHAR(45)   NOT NULL,
  LastName        VARCHAR(45)   NOT NULL,
  Contact         VARCHAR(45)   NOT NULL,
  GasFee          VARCHAR(45)   NOT NULL,
  Role            VARCHAR(45)   NOT NULL,
  RideDate        VARCHAR(45)   NOT NULL,
  PRIMARY KEY (PostingID)
);

ALTER TABLE DriverPost AUTO_INCREMENT = 500;

INSERT INTO driverpost(Destination, FirstName, LastName, Contact, GasFee, Role, RideDate)
VALUES("Keystone", "Sam", "Bennetts", "303-775-4695", "50", "Driver", "2018-06-03");
