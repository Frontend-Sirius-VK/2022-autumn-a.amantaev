CREATE TABLE statistic_data
(
    id         int generated always as identity primary key,
    text       text,
    channel_id int references channels on delete set null
)
