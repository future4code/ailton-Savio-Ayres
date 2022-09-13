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
-- Além do "float", teremos também a "primary key", que 
-- no caso é um identificador único. Há também o "not null",
-- significa que ele não aceita valores vazios.
-- B)
-- SHOW TABLES;
-- Ele retorna em si o nome da tabela criada
-- SHOW DATABASES;
-- Ele retorna a informação do banco de dados do usuário

-- EXERCÍCIO 2
-- A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "010", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
-- B)
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
  -- VALUES(
  -- "000", 
  -- "Glória Pires",
  -- 1200000,
  -- "1963-08-23", 
  -- "female"
  -- );
  -- O erro informa que já existe um "table" existente com o nome "actor"
  -- O segundo erro ocorreu porque está faltando propriedades para a table 
  -- actor, como por exemplo ( data de nascimento, gênero)
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
SELECT * from Actor;
-- Exercício 3
 SELECT id, name from Actor WHERE gender = "female";
 SELECT id, name from Actor WHERE gender = "male";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor where gender = "invalid";
-- O gênero já está definido
SELECT id, name, salary from Actor WHERE salary <= 500000;
SELECT id, nome from Actor WHERE id = "002";
-- Está escrito errado, seria "name" o correto
SELECT id, name from Actor WHERE id = "002"; -- Corrigido
-- EXERCÍCIO 4
SELECT * from Actor
WHERE name LIKE "A%" OR "J%" AND salary > 300000;
-- Está selecionando todos os atores e pegando quem tem o nome
-- começando com A ou j e o salário sendo menor que 300k
SELECT * from Actor WHERE name NOT LIKE 'A%' AND salary > 350000;
SELECT * from Actor WHERE name like "%G%" AND name LIKE "%g%";
SELECT * FROM Actor WHERE(name LIKE "%a%" AND "%A%" OR name LIKE "%G%" OR "%g%")
AND salary > 350000 AND 900000;

-- EXERCÍCIO 5
CREATE TABLE movies(
id INT PRIMARY KEY,
tittle VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
date DATE NOT NULL,
evaluation INT NOT NULL;

INSERT INTO movies values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a
 rotina do casamento. Um dia eles são atingidos por um fenômeno
 inexplicável e trocam de corpos",
"06/01/2006",
"7"
);
INSERT INTO movies values(
"002",
"Doce de mãe"
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
 empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela"
"27/12/2012"
"10"
);
INSERT INTO movies values(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.",
"02/11/2017",
"8"
);
INSERT INTO movies values(
"005",
"alto da compadecida",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates.,
 A vida de abusos acaba por acarretar sua morte precoce.",
"0"
)




