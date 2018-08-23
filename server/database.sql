CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY,
"first_name" CHAR(40),
"last_name" CHAR(40)
);

CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "owner_id" INT REFERENCES "owners" NOT NULL,
    "name" CHAR(40) NOT NULL,
    "breed" CHAR(40) NOT NULL,
    "color" VARCHAR(40) NOT NULL,
    "checkedin" BOOLEAN NOT NULL DEFAULT false,
    "lastcheckin" DATE
);

INSERT into "owners" ("first_name" , "last_name") VALUES ('Daffy' , 'Duck'), ('Keri' , 'Hilson') , ('Optimus' , 'Prime') , ('John' , 'Snow');

INSERT into "pets" ("owner_id" ,"name" , "breed" , "color" , "checkedin" , "lastcheckin") VALUES (1 , 'Yoshi' , 'Cat' , 'orange' , 'true' , '2018/08/11');

INSERT into "pets" ("owner_id" ,"name" , "breed" , "color" , "checkedin" , "lastcheckin") VALUES (1 , 'Lulu' , 'Cat' , 'gray' , 'true' , '2018/08/11');

INSERT into "pets" ("owner_id" ,"name" , "breed" , "color" , "checkedin" , "lastcheckin") VALUES (2 , 'Donald Duck' , 'Duck' , 'white' , 'false' , '1937/01/01');

INSERT into "pets" ("owner_id" ,"name" , "breed" , "color" , "checkedin" , "lastcheckin") VALUES (3 , 'Fido' , 'Dog' , 'black' , 'false' , '2006/06/24');

INSERT into "pets" ("owner_id" ,"name" , "breed" , "color" , "checkedin" , "lastcheckin") VALUES (4 , 'King Kroc' , 'Alligator' , 'mean green' , 'false' , '1999/12/31');
