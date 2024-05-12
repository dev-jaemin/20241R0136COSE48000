CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  kakao_id INT,
  username VARCHAR(255),
  gender VARCHAR(10),
  birthdate DATE,
  weight INT,
  height INT,
  goal VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meal (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  date DATE,
  category VARCHAR(255),
  calories INTEGER,
  carbs INTEGER,
  protein INTEGER,
  fat INTEGER,
  image VARCHAR(255),
  rating VARCHAR(10),
  review VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  type VARCHAR(255),
  message VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);