# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS DriverPost;

CREATE TABLE IF NOT EXISTS DriverPost (
  PostingID       INT           NOT NULL AUTO_INCREMENT,
  DestinationID   INT           NOT NULL,
  DriverID        INT           NOT NULL,
  RideDate        DATETIME      NOT NULL,
  LeaveTime       DATETIME      NOT NULL,
  ReturnTime      DATETIME      NOT NULL,
  NumberSpots     INT           NOT NULL,
  LeaveLocation   VARCHAR(45)   NULL,
  DesiredGasMoney DECIMAL(5,2)  NULL,
  Rider1ID        INT           NULL,
  Rider2ID        INT           NULL,
  Rider3ID        INT           NULL,
  Rider4ID        INT           NULL,
  Rider5ID        INT           NULL,
  PRIMARY KEY (PostingID)
)

AUTO_INCREMENT = 500;

INSERT INTO DriverPost(DestinationID, DriverID, RideDate, LeaveTime, ReturnTime, NumberSpots, LeaveLocation, DesiredGasMoney)
VALUES(1,1,'2018-05-08','12:50:00','15:30:00',4,'Boulder',5);

INSERT INTO DriverPost(DestinationID, DriverID, RideDate, LeaveTime, ReturnTime, NumberSpots, LeaveLocation, DesiredGasMoney)
VALUES(2,2,'2018-05-13','11:20:00','15:30:00',1,'Boulder',0);

INSERT INTO DriverPost(DestinationID, DriverID, RideDate, LeaveTime, ReturnTime, NumberSpots, LeaveLocation, DesiredGasMoney)
VALUES(1,3,'2018-05-24','14:30:00','18:00:00',2,'Boulder',7);

INSERT INTO DriverPost(DestinationID, DriverID, RideDate, LeaveTime, ReturnTime, NumberSpots, LeaveLocation, DesiredGasMoney)
VALUES(3,4,'2018-06-09','10:30:00','19:30:00',4,'Boulder',0);

INSERT INTO DriverPost(DestinationID, DriverID, RideDate, LeaveTime, ReturnTime, NumberSpots, LeaveLocation, DesiredGasMoney)
VALUES(2,5,'2018-05-01','16:00:00','20:30:00',5,'Boulder',3);