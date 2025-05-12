CREATE DATABASE shop;
USE shop;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price INT,
  description TEXT
);

INSERT INTO products (name, price, description) VALUES
('Клавиатура', 1500, 'Механическая клавиатура с RGB'),
('Мышь', 900, 'Беспроводная мышь с сенсором 16000 DPI'),
('Монитор', 12000, '27 дюймов, 144 Гц, IPS'),
('Коврик', 500, 'Тканевый коврик для мыши');
