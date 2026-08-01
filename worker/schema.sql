CREATE TABLE IF NOT EXISTS entries (
    id            TEXT    PRIMARY KEY,
    name          TEXT    NOT NULL,
    message       TEXT    NOT NULL,
    from_location TEXT,
    date          TEXT    NOT NULL,
    emoji         TEXT    NOT NULL,
    github        TEXT,
    twitter       TEXT,
    linkedin      TEXT,
    mail          TEXT,
    link          TEXT,
    created_at    INTEGER NOT NULL
);
