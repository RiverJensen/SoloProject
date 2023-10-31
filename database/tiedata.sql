CREATE TABLE user_tie (
    id INTEGER PRIMARY KEY,
    user_name VARCHAR(100),
    tier VARCHAR(100),
    color VARCHAR(100),

)

CREATE TABLE transfer_tie (
    id INTEGER PRIMARY KEY,
    user_name VARCHAR(100),
    tier VARCHAR(100),
    color VARCHAR(100),

)

CREATE TABLE server_tie (
    id INTEGER PRIMARY KEY,
    user_name VARCHAR(100),
    tier VARCHAR(100),
    color VARCHAR(100),
)

INSERT INTO user_tie (id, user_name, tier,color) VALUES ('600', 'River_Jensen', 'Gold', 'Red')