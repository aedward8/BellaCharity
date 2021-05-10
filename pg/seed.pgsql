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
    picture_link character varying
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

COPY public.animals (id, name, age, weight, gender, breed, blurb, foster, picture_link) FROM stdin;
1	Osito	15 years old	4.5 lbs	male	Pomeranian	Hi my name is Osito. I love playing with my favorite toy which is a squeaky cacti. I like to cuddle through the night and get lots of belly rubs. As I am getting older and getting into my golden years I am really looking for a stable family. I am currently on a low fat diet, if you adopt me Bella Charity will provide 2 months of food for me. In addition I don’t mind other dogs and I am great with children; I can be an awesome fun uncle. I Can’t wait to meet you!	f	link goes here
2	Khaleesi 	2 months old	1.5 lbs	female	Calico Cat	Hi my name is Khaleesi, Mother of Dragons! I am ready for a home with snuggles and playtime and lots of kitten-love! I am looking forward to some gentle handling and daily play sessions with you. I’m a curious kitten looking for adopters who can commit to continuing my education and socialization. The Bella Charity offers a free Kitten Adoption Handbook so we will get off to a great start!	t	https://github.com/aedward8/BellaCharity/blob/animal_database/app/photos/khaleesi.jpeg
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1_2021h1
--

SELECT pg_catalog.setval('public.animals_id_seq', 3, true);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
