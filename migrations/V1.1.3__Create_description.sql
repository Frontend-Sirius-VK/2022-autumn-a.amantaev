CREATE TABLE descriptions
(
    id         int generated always as identity primary key,
    text       character varying,
    channel_id int references channels on delete set null
);
