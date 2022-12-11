mysql > CREATE TABLE MEETING_DATA 
        (   MEETING_ID integer NOT NULL AUTO_INCREMENT,
            CLIENT_ID integer NOT NULL,
            CLIENT_NAME varchar(255) NOT NULL,
            CLIENT_EMAIL varchar(255) NOT NULL,
            CLIENT_PHONE varchar(255) NOT NULL,
            POINTOFCONTACT varchar(255) NOT NULL,
            POC_PHONE VARCHAR(255),
            MEETING_DATE DATE NOT NULL,
            MEETING_TIME TIME NOT NULL,
            SCHEDULED_ON DATE DEFAULT CURRENT_DATE,
            PRIMARY KEY (MEETING_ID),
            CONSTRAINT FK_clientData FOREIGN KEY (CLIENT_ID) 
                REFERENCES CLIENT_DATA(CLIENT_ID)
         );

mysql> SHOW TABLES;

mysql> DESC MEETING_DATA;