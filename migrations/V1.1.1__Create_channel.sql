CREATE TABLE channels
(
    id    int generated always as identity primary key,
    title text,
    slug  text
)