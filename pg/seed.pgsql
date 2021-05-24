--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: tpl1_2021h1
--

CREATE TABLE public.animals (
    id integer NOT NULL,
    name character varying,
    age character varying,
    weight character varying,
    gender character varying,
    breed character varying,
    blurb character varying,
    foster boolean,
    picture_link character varying,
    alt_text character varying
);


ALTER TABLE public.animals OWNER TO tpl1_2021h1;

--
-- Name: animals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1_2021h1
--

CREATE SEQUENCE public.animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.animals_id_seq OWNER TO tpl1_2021h1;

--
-- Name: animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1_2021h1
--

ALTER SEQUENCE public.animals_id_seq OWNED BY public.animals.id;


--
-- Name: animals id; Type: DEFAULT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public.animals ALTER COLUMN id SET DEFAULT nextval('public.animals_id_seq'::regclass);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: tpl1_2021h1
--

COPY public.animals (id, name, age, weight, gender, breed, blurb, foster, picture_link, alt_text) FROM stdin;
2	Khaleesi 	2 months old	1.5 lbs	female	Calico Cat	Hi my name is Khaleesi, Mother of Dragons! I am ready for a home with snuggles and playtime and lots of kitten-love! I am looking forward to some gentle handling and daily play sessions with you. I’m a curious kitten looking for adopters who can commit to continuing my education and socialization. The Bella Charity offers a free Kitten Adoption Handbook so we will get off to a great start!	t	khaleesi	calico cat named khaleesi
1	Osito	15 years old	4.5 lbs	male	Pomeranian	Hi my name is Osito. I love playing with my favorite toy which is a squeaky cacti. I like to cuddle through the night and get lots of belly rubs. As I am getting older and getting into my golden years I am really looking for a stable family. I am currently on a low fat diet, if you adopt me Bella Charity will provide 2 months of food for me. In addition I don’t mind other dogs and I am great with children; I can be an awesome fun uncle. I Can’t wait to meet you!	f	osito	pomeranian dog named osito
4	Charles	2 years old	7 lbs	male	Pug	They don’t come any cuter than me! I am a solidly built little guy who does well on a leash, most of the time. I like to strut down the street ignoring other dogs and just want to keep my focus on you. I am always ready to warm up your lap if it is chilly and I am quite the snuggler. I have shown some guarding behaviors around toys, so I should go to an adult only home, or a home with older teens. I am a fun and sweet fellow who could be joining your home real soon! If you are interested in meeting me please sign up.	t	charles	pug named charles
5	Pippi	2 years, 3m old	60 lbs	female	Mix Shepherd	Hi my name is Pippi. I love to play and I am super social. I love belly rubs, butt scratches and head petting (though not all at the same time, thank goodness!). I also have a love affair going on with the tennis ball. Doesn’t matter which tennis ball, actually, I love to play around with one. I can be selective with people and some dogs, but one on one, I do really well. I LOOOOOOOVVVVVEEEEE treats and you can toss them to me to see my superstar catch (which will also preserve your fingers.) I am  looking for a low traffic neighborhood and would like to be the only dog in the home. 	f	pippi	shepherd named pippi
6	Lilypad	3 years old	5 lbs	female	Bunny	Hi my name is Lilypad. I am ready for a home with snuggles and playtime and lots of bunny-love! I am looking forward to some gentle handling and daily play sessions with you. I’m a curious bunny looking for adopters who can commit to continuing my education and socialization. I would love a home with a backyard so I can have some time on the grass to sunbathe. 	f	lilypad	bunny named lilypad
7	Corky	5 years old	30 lbs	male	Chocolate Lab	You will get a cuteness overload when you meet me! I am very shy and I am looking for someone with patience who will let me come around at my own pace. It might take me a few minutes to approach you at first, but then you will see my tail begin to wag and that adorable grin of mine show up. I like to be rewarded with some treats and will practice great behaviors for them. I will be happy to just chill in your lap as you give me some love. I am looking for a more sedate, calm, household with adults and older teens. If you enjoy life on the quiet side then I might be just for you.	f	corky	chocolate lab named corky
8	Tyrone	5 months old	6.5 lbs	male	domestic shorthair mix	Hi my name is Tyrone. I am told I am a handsome grey and white tabby boy. What do you think? I am new to the shelter and kind of scared here. I am looking for a new forever home with someone who will go slow with me and give me time to adjust. I do like petting and I am a good biscuit maker. I think I like to play, but I have been too afraid to do it yet. Just get me in your home and watch me go! I am looking for indoor only housing, with adults, and possibly older children. If you like life in the slow lane we could be purr-fect for each other. 	t	tyrone	shorthair kitten named tyrone
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1_2021h1
--

SELECT pg_catalog.setval('public.animals_id_seq', 8, true);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

