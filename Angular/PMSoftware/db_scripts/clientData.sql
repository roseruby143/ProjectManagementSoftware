mysql >   CREATE TABLE CLIENT_DATA 
        ( CLIENT_ID integer NOT NULL AUTO_INCREMENT,
            CLIENT_NAME varchar(255) NOT NULL,
            CLIENT_EMAIL varchar(255) NOT NULL,
            CLIENT_ADDRESS VARCHAR(255),
            CLIENT_PHONE varchar(255) NOT NULL,
            POINTOFCONTACT varchar(255) NOT NULL,
            CLIENT_STATUS varchar(255),
            CLIENT_TIER varchar(255),
            CREATED_ON varchar(255),
            PRIMARY KEY (CLIENT_ID)
         );

mysql> SHOW TABLES;

mysql> DESC CLIENT_DATA;