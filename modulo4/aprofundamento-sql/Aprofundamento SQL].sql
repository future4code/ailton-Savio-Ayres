USE `ailton-savio-ayres`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );
    
-- EXERCÍCIO 1
-- A) 
-- Apagar a coluna Salário
-- B)
-- Mudar a propriedade gênero para sex
-- C)
-- A única diferença, é que a quantidade de caractéres será de (255) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
SELECT * FROM Actor;

-- EXERCÍCIO 2
-- A)
UPDATE Actor
SET name = "Fernanda Montenegro", birth_date = "1950-05-25"
WHERE id = "003";
-- B)
-- MAIUSCULO
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE id = "001";
-- Normal
UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "001";
-- C)
UPDATE Actor 
SET name = "Fernanda Montenegro", salary = "20000", birth_date = "1855-05-20", gender = "Female"
WHERE id = "008";
-- D)
-- O sistema criou, porém, ao rodar o comando "SELECT * FROM Actor;"
-- não exibe nemhuma id ao qual criei.and

-- EXERCÍCIO 3
-- A)
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-- B)
DELETE FROM Actor
WHERE gender = "male" AND salary > 100000000;

-- EXERCÍCIO 4
-- A)
SELECT MAX(salary) FROM Actor;
-- B)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- C)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- D)
SELECT SUM(salary) FROM Actor;

-- EXERCÍCIO 5
-- A)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- Ele me retorna q quantidade de atores masculinos e femininos
-- agrupados
-- B)
SELECT id, name FROM Actor
ORDER BY name DESC;
-- C)
SELECT * FROM Actor
ORDER BY salary;
-- D)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
-- E)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- EXERCÍCIO 6
CREATE TABLE movies(
id INT PRIMARY KEY,
tittle VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
date DATE NOT NULL,
evaluation INT NOT NULL
);
SELECT * FROM movies;
-- A)
ALTER TABLE movies ADD playing_limit_date DATE;
-- B),
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- C)
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
-- D)
-- Informa que foi criado, porém ao rodar "SELECT * FROM movies;" não retorna
-- para mim
-- EXERCÍCIO 7
-- A)
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
-- B)
SELECT AVG(rating) FROM Movie;
-- C)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
-- D)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
-- E)
SELECT MAX(rating) FROM Movie;
-- F)
SELECT MIN(rating) FROM Movie;

-- EXERCÍCIO 8
-- A) 
SELECT * FROM Movie ORDER BY title;
-- B)
SELECT * FROM Movie ORDER BY title LIMIT 5;
-- C)
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
-- D)
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;






