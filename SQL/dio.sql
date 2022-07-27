CREATE TABLE pessoa (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoa (nome, nascimento) VALUES ('Hilton', '1997-04-02');
INSERT INTO pessoa (nome, nascimento) VALUES ('Marcia', '1972-02-06');
INSERT INTO pessoa (nome, nascimento) VALUES ('Leonardo', '1984-07-07');

UPDATE pessoa SET nome='Hilton Goncalves' WHERE id=1;

ALTER TABLE pessoa ADD genero VARCHAR(1) NOT NULL AFTER nascimento;

ALTER TABLE pessoa ADD testeDELETE VARCHAR(1) NOT NULL AFTER genero;

ALTER TABLE pessoa DROP testeDELETE;

SELECT * FROM pessoa ORDER BY genero;

