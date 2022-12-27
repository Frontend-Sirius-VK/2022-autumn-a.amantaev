CREATE TABLE posts
(
    id         int generated always as identity primary key,
    title      character varying,
    subtitle   text,
    text       text,
    author     text,
    image_url  text,
    video_url  text,
    "date"     text,
    likes      integer,
    dislikes   integer,
    comments   integer,
    channel_id int references channels on delete set null
);
