CREATE TABLE Users (
"userId" SERIAL PRIMARY KEY NOT NULL,
"email" varchar(255) NOT NULL UNIQUE,
"name" varchar(255),
"createdAt" TIMESTAMP,
"updatedAt" TIMESTAMP,
"active" BOOLEAN DEFAULT (true) NOT NULL,
"hash" varchar(255) NOT NULL,
"oAuthToken" varchar(100),
"oAuthTokenSecret" varchar(100),
"oAuthAccessToken" varchar(100),
"oAuthAccessTokenSecret" varchar(100),
"oAuthVerifier" varchar(100));