
CREATE TABLE animals (
   id SERIAL PRIMARY KEY,
   name VARCHAR,
   age VARCHAR,
   weight VARCHAR,
   gender VARCHAR,
   breed VARCHAR,
   blurb VARCHAR,
   foster boolean,
   picture_link VARCHAR
);

INSERT INTO animals (id, name, age, weight, gender, breed, blurb, foster, picture_link) 
Values ( DEFAULT,'Osito','15 years old','4.5 lbs','male','Pomeranian','Hi my name is Osito. I love playing with my favorite toy which is a squeaky cacti. I like to cuddle through the night and get lots of belly rubs. As I am getting older and getting into my golden years I am really looking for a stable family. I am currently on a low fat diet, if you adopt me Bella Charity will provide 2 months of food for me. In addition I don’t mind other dogs and I am great with children; I can be an awesome fun uncle. I Can’t wait to meet you!',false,'link goes here');

INSERT INTO animals (id, name, age, weight, gender, breed, blurb, foster, picture_link) 
Values ( DEFAULT,'Khaleesi ','2 months old','1.5 lbs','female','Calico Cat','Hi my name is Khaleesi, Mother of Dragons! I am ready for a home with snuggles and playtime and lots of kitten-love! I am looking forward to some gentle handling and daily play sessions with you. I’m a curious kitten looking for adopters who can commit to continuing my education and socialization. The Bella Charity offers a free Kitten Adoption Handbook so we will get off to a great start!',true,'link goes here');