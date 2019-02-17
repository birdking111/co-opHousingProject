/*
CREATE TABLE Users.[User] (
	UserId uniqueidentifier DEFAULT (newsequentialid()) NOT NULL PRIMARY KEY,
	UserRoleId uniqueidentifier FOREIGN KEY REFERENCES NOT NULL Users.Role(RoleId),
	Email varchar(255) NOT NULL UNIQUE,
	GivenName varchar(255),
	FamilyName varchar(255),
	DateCreated datetime2(3) DEFAULT (getdate()),
	DateUpdated datetime2(3),
	Hash varchar(255) NOT NULL,
	Active bit DEFAULT ((1)) NOT NULL,
	OAuthToken varchar(100),
	OAuthTokenSecret varchar(100),
	OAuthAccessToken varchar(100),
	OAuthAccessTokenSecret varchar(100),
	OAuthVerifier varchar(100)
)
CREATE TABLE Users.Role (
	RoleId uniqueidentifier DEFAULT (newsequentialid()) NOT NULL PRIMARY KEY,
	Name varchar(255) NOT NULL,
	Description varchar(255),
	Active bit DEFAULT ((1)) NOT NULL
)
CREATE TABLE Users.Endpoint (
	EndpointId uniqueidentifier DEFAULT (newsequentialid()) NOT NULL PRIMARY KEY, 
	Name varchar(255) NOT NULL,
	Description varchar(255),
	Active bit DEFAULT ((1)) NOT NULL
)
CREATE TABLE Users.EndpointRole (
	EndpointRoleId uniqueidentifier DEFAULT (newsequentialid()) NOT NULL PRIMARY KEY,
	EndpointId uniqueidentifier FOREIGN KEY REFERENCES NOT NULL Users.Endpoint(EndpointId),
	RoleId uniqueidentifier FOREIGN KEY REFERENCES NOT NULL Users.Role(RoleId)
)
INSERT INTO Users.Role
	(Name,
	Description)
	Values (
		'Consumer',
		'Role of user who is a consumer'
	)
INSERT INTO Users.Role
	(Name,
	Description)
	Values (
		'Dealer',
		'Role of user who is a dealer'
	)
	*/