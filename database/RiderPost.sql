# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS RiderPost;

CREATE TABLE IF NOT EXISTS RiderPost (
  PostingID 		INT 			NOT NULL AUTO_INCREMENT,
  DestinationID		INT 			NULL,
  PosterID 			INT 			NOT NULL,
  RideDate 			DATETIME 		NOT NULL,
  LeaveTime 		DATETIME 		NOT NULL,
  ReturnTime 		DATETIME 		NOT NULL,
  OfferedGasMoney 	DECIMAL(5,2) 	NULL,
  PRIMARY KEY (PostingID)
)

AUTO_INCREMENT = 700;

