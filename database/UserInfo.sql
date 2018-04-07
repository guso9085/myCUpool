# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS UserInfo;

CREATE TABLE IF NOT EXISTS UserInfo (
  UserID        INT           NOT NULL AUTO_INCREMENT,
  FirstName     VARCHAR(45)   NOT NULL,
  LastName      VARCHAR(45)   NOT NULL,
  PhoneNumber   VARCHAR(45)   NOT NULL,
  Email         VARCHAR(45)   NOT NULL,
  Description   VARCHAR(250)  NULL,
  Rating        DECIMAL(2,2)  NULL,
  Driver        BOOL          NULL,
  ProfPicture   BLOB          NULL,
  UNIQUE (UserID),
  PRIMARY KEY (UserID)
);

ALTER TABLE UserInfo AUTO_INCREMENT = 101; 

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Sam', 'Bennetts', '303-775-4695', 'samuel.bennetts@colorado.edu', 'I like to ski', 1);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Zhiren', 'Chen', '720-361-9447', 'Zhiren.Chen@colorado.edu', 'I love snowboarding', 1);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Thomas', 'Wold', '919-242-4413', 'ThomasEWold@real.com', 'I love pizza', 0);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Delores', 'Chavez', '715-478-0201', 'DeloresDChavez@outlook.com', 'I am single', 1);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Paul', 'Haddix', '682-841-9259', 'PaulTHaddix@gmail.com', 'I am a downhill expert rider', 1);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Angela', 'Davis', '303-293-2813', 'AngelaJDavis@armyspy.com', 'I’m an engineering graduate', 0);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Vanessa', 'Smith', '715-681-7909', 'VanessaMSmith@rhyta.com', 'I don’t like to follow trends', 0);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Keith', 'Smith', '614-461-9429', 'KeithJSmith@gmail.com', 'I’m a bit obsessive about cleanliness and personalization', 1);

INSERT INTO UserInfo (FirstName, LastName, PhoneNumber, Email, Description, Driver)
VALUES ('Lynn', 'Well', '309-568-1320', 'LynnRWell@rhyta.com', 'I prefer coffee over tea', 1);
