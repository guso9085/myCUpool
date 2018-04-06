DROP TABLE IF EXISTS Destination;

CREATE TABLE IF NOT EXISTS Destination (
  DestinationID INT NOT NULL,
  DestinationName VARCHAR(45) NOT NULL,
  LocationLat DECIMAL(12,9) NULL,
  LocationLon DECIMAL(12,9) NULL,
  PRIMARY KEY (DestinationID)
)
