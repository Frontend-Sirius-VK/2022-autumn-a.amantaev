CREATE TABLE statistics
(
    id int generated always as identity primary key,
    community text
);

CREATE TABLE statistic_data
(
    id            int generated always as identity primary key,
    text          text,
    statistics_id int references statistics on delete set null
)
