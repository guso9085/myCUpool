# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS RiderPost;

CREATE TABLE IF NOT EXISTS RiderPost (
  PostingID     INT       NOT NULL AUTO_INCREMENT,
  DestinationID   INT       NULL,
  PosterID      INT       NOT NULL,
  RideDate      DATE      NOT NULL,
  LeaveTime     TIME        NOT NULL,
  ReturnTime    TIME      NOT NULL,
  OfferedGasMoney   DECIMAL(5,2)  NULL,
  PRIMARY KEY (PostingID)
);

ALTER TABLE RiderPost AUTO_INCREMENT = 701;

INSERT INTO RiderPost (DestinationID, PosterID, RideDate, LeaveTime, ReturnTime, OfferedGasMoney)
VALUES(6,1,'2018-05-08','10:00:00','15:00:00',5);

INSERT INTO RiderPost (DestinationID, PosterID, RideDate, LeaveTime, ReturnTime, OfferedGasMoney)
VALUES(7,3,'2018-05-08','12:00:00','15:00:00',6);

INSERT INTO RiderPost (DestinationID, PosterID, RideDate, LeaveTime, ReturnTime, OfferedGasMoney)
VALUES(8,2,'2018-05-08','11:00:00','18:30:00',10);

INSERT INTO RiderPost (DestinationID, PosterID, RideDate, LeaveTime, ReturnTime, OfferedGasMoney)
VALUES(9,3,'2018-05-08','13:00:00','19:20:00',0);