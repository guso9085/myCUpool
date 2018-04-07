# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS Destination;

CREATE TABLE IF NOT EXISTS Destination (
  DestinationID   INT           NOT NULL AUTO_INCREMENT,
  DestinationName VARCHAR(45)   NOT NULL,
  LocationLat     DECIMAL(12,9) NULL,
  LocationLon     DECIMAL(12,9) NULL,
  PRIMARY KEY (DestinationID)
);



ALTER TABLE AUTO_INCREMENT = 300;

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('WINTER PARK', 39.886848 ,-105.762548);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('COPPER MOUNTAIN', 39.502141,-106.150995);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('BRECKENRIDGE', 39.480227 ,-106.066698);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('KEYSTONE', 39.604538 ,-105.954529);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('STEAMBOAT', 40.457175 ,-106.804533);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('BEAVER CREEK', 39.604286 ,-106.516711);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('ASPEN HIGHLANDS', 39.182256,-106.855495);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('VAIL', 39.606144 ,-106.354972);

INSERT into Destination (DestinationName,LocationLat,LocationLon) 
Values ('TELLURIDE', 37.938962 ,-107.847982);