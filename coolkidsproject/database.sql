CREATE TABLE Professors (
	ID integer(5) NOT NULL,
	Prefix varchar(10) NOT NULL,
	First_name varchar(100) NOT NULL,
	Last_name varchar(200) NOT NULL,
	Major_id integer(5) NOT NULL,
	Class_id integer(5) NOT NULL,
	Description varchar(200) NOT NULL,
	URL_img varchar(200) NOT NULL,
	Featured boolean NOT NULL
	PRIMARY KEY (ID),
	FOREIGN KEY (Major_id) REFERENCES Majors(ID),
	FOREIGN KEY (Class_id) REFERENCES Classes(ID)
);

CREATE TABLE Majors (
	ID integer(5) NOT NULL,
	Major_name varchar(100) NOT NULL,
	Class_id integer(5) NOT NULL,
	URL_img varchar(200) NOT NULL,
	Description varchar(200) NOT NULL,
	PRIMARY KEY (ID),
	FOREIGN KEY (Class_id) REFERENCES Classes(ID)
);

CREATE TABLE Classes (
	ID integer(5) NOT NULL,
	Course_id varchar(20) NOT NULL,
	Class_name varchar(100) NOT NULL,
	Professor_id integer(5) NOT NULL,
	Major_id integer(5) NOT NULL,
	Description varchar(200) NOT NULL,
	URL_img varchar(200) NOT NULL,
	PRIMARY KEY (ID),
	FOREIGN KEY (Professor_id) REFERENCES Professors(ID),
	FOREIGN KEY (Major_id) REFERENCES Majors(ID)
);

Create TABLE Professor_classes (
	Professor_id integer(5) NOT NULL,
	Major_id integer(5) NOT NULL,
	Class_id integer(5) NOT NULL,
	Raw_rating integer(5) NOT NULL,
	Votes integer(5) NOT NULL,
	PRIMARY KEY (Professor_id, Major_id, Class_id),
	FOREIGN KEY (Professor_id) REFERENCES Professors(ID),
	FOREIGN KEY (Major_id) REFERENCES Majors(ID),
	FOREIGN KEY	(Class_id) REFERENCES Class(ID)
);