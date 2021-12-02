CREATE TABLE abilities (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE moves (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  type_id INTEGER NOT NULL,
  power SMALLINT,
  pp SMALLINT,
  accuracy SMALLINT,
  priority SMALLINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(type_id) REFERENCES types (id)
)

CREATE TABLE pokemon (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  species_id INTEGER,
  height INTEGER NOT NULL,
  weight INTEGER NOT NULL,
  base_experience INTEGER NOT NULL,
  "order" INTEGER NOT NULL,
  is_default BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(species_id) REFERENCES pokemon_species (id),
  CHECK (is_default IN (0, 1))
)

CREATE EXTENSION pgcrypto;

CREATE TABLE trainer (
  id INTEGER NOT NULL,
  name VARCHAR(79) NOT NULL,
  email VARCHAR(79) NOT NULL UNIQUE,
  password VARCHAR(70) NOT NULL,
  avatar VARCHAR(255),
  favorite_id INTEGER,
  squad_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(squad_id) REFERENCES squad (id),
  FOREIGN KEY(favorite_id) REFERENCES pokemon (id),
)

CREATE TABLE stats (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  is_battle_only BOOLEAN NOT NULL,
  game_index INTEGER,
  PRIMARY KEY (id),
  CHECK (is_battle_only IN (0, 1))
)

CREATE TABLE types (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE pokemon_abilities (
  pokemon_id INTEGER NOT NULL,
  ability_id INTEGER NOT NULL,
  is_hidden BOOLEAN NOT NULL,
  slot INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, slot),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(ability_id) REFERENCES abilities (id),
  CHECK (is_hidden IN (0, 1))
)

CREATE TABLE pokemon_moves (
  pokemon_id INTEGER NOT NULL,
  move_id INTEGER NOT NULL,
  level INTEGER NOT NULL,
  "order" INTEGER,
  PRIMARY KEY (
    pokemon_id,
    move_id,
    level
  ),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(move_id) REFERENCES moves (id),
)

CREATE TABLE squad (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  pokemon_id INTEGER NOT NULL,
  is_complete BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  CHECK (is_complete IN (0, 1))
)

CREATE TABLE pokemon_species (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  evolves_from_species_id INTEGER,
  is_baby BOOLEAN NOT NULL,
  forms_switchable BOOLEAN NOT NULL,
  "order" INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(evolves_from_species_id) REFERENCES pokemon_species (id),
  CHECK (is_baby IN (0, 1)),
  CHECK (forms_switchable IN (0, 1))
)

CREATE TABLE pokemon_stats (
  pokemon_id INTEGER NOT NULL,
  stat_id INTEGER NOT NULL,
  base_stat INTEGER NOT NULL,
  effort INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, stat_id),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(stat_id) REFERENCES stats (id)
)

CREATE TABLE pokemon_types (
  pokemon_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  slot INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, slot),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(type_id) REFERENCES types (id)
)
