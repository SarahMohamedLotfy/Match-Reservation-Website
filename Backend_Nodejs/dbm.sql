-- create database EPLMRS;
-- use EPLMRS;
-- create table venue(
-- 	ID integer primary key auto_increment,
-- 	location varchar(255),
-- 	shape varchar(255),
-- 	no_seats integer
-- );
-- create table seats(
-- 	ID integer primary key,
-- 	venue_id integer,
-- 	VIP boolean, 
-- 	foreign key(venue_id) references venue(id)
-- );

-- create table referee(
-- 	ID integer primary key,
-- 	referee_type integer,
-- 	first_name varchar(255)
-- );
-- create table EPL_match(
-- 	ID integer primary key,
-- 	venue_id integer,
-- 	match_date datetime,
-- 	foreign key(venue_id) references venue(id)
-- 	-- primary key(venue_id,ID)
-- );
-- create table refe(
-- 	ref integer, 
-- 	match_id integer,
-- 	foreign key(match_id) references EPL_match(ID),
-- 	foreign key(ref) references referee(ID),
-- 	primary key(ref,match_id)
-- );
-- create table team(
-- 	ID integer auto_increment primary key,
-- 	team_name varchar(255),
-- 	team_town varchar(255)
-- );
-- create table match_team(
-- 	team integer,
-- 	match_id integer,
--     state varchar(255),
-- 	foreign key(team) references team(ID),
-- 	foreign key(match_id) references EPL_match(ID),
-- 	primary key(team,match_id)
-- );

-- create table app_user(
-- //	ID integer auto_increment primary key,
create database EPLMRS;
use EPLMRS;
create table venue(
	ID integer primary key auto_increment,
	location varchar(255),
	shape varchar(255),
	width integer,
    length integer
);
-- create table seats(
-- 	ID integer primary key,
-- 	venue_id integer,
-- 	VIP boolean,
-- 	foreign key(venue_id) references venue(id)
-- );

create table referee(
	ID integer auto_increment primary key,
	referee_type integer,
	first_name varchar(255)
);
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (1, 0,"Ahmed");
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (2, 1,"Mohamed");
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (3, 2,"Mostafa");
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (4, 0,"Adel");
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (5, 1,"Lotfy");
INSERT INTO referee(ID , referee_type ,first_name )
VALUES (6, 2,"Ibrahim");

create table EPL_match(
	ID integer auto_increment primary key,
	venue_id integer,
	match_date datetime,
	foreign key(venue_id) references venue(id)
	-- primary key(venue_id,ID)
);
create table refe(
	ref integer, 
	match_id integer,
	foreign key(match_id) references EPL_match(ID),
	foreign key(ref) references referee(ID),
	primary key(ref,match_id)
);
create table team(
	ID integer auto_increment primary key,
	team_name varchar(255),
	team_town varchar(255)
);
INSERT INTO team(ID , team_name ,team_town )
VALUES (1, "Ahly", "Cairo");
INSERT INTO team(ID , team_name ,team_town )
VALUES (2, "Zamalek", "Cairo");
INSERT INTO team(ID , team_name ,team_town )
VALUES (3, "Ismaily", "Cairo");
INSERT INTO team(ID , team_name ,team_town )
VALUES (4, "Makowlon", "Cairo");


create table match_team(
	team integer,
	match_id integer,
    state varchar(255),
	foreign key(team) references team(ID),
	foreign key(match_id) references EPL_match(ID),
	primary key(team,match_id)
);

create table app_user(
-- //	ID integer auto_increment primary key,
	user_name varchar(255) primary key,
	user_type integer,
	first_name varchar(255),
	last_name varchar(255),
	pass varchar(255),
	mail varchar(255),
	gender varchar(255),
	address varchar(255),
	city varchar(255),
	birth date
);
create table match_seats(
	match_ID integer,
	seat_id integer,
	-- vacant boolean,
    user_id varchar(255),
	-- foreign key(seat_id) references seats(ID),
    foreign key(match_ID) references EPL_match(ID),
    foreign key(user_id) references app_user(user_name),
    primary key(seat_id,match_ID)
);
INSERT INTO app_user(user_name , user_type ,first_name,last_name,pass ,mail ,gender ,address ,city)
VALUES ("Sarah",1,"Sarah","Lotfy","ss","ss","female","dd","Cairo");
INSERT INTO app_user(user_name , user_type ,first_name,last_name,pass ,mail ,gender ,address ,city)
VALUES ("Salma",,"Sarah","Lotfy","ss","ss","female","dd","Cairo");

INSERT INTO match_seats(match_ID, seat_id ,user_id)
VALUES (3, 1, "Sarah");

INSERT INTO venue(ID , location,shape,length,width)
VALUES (1, "Cairo", "Big venue",20,30);
