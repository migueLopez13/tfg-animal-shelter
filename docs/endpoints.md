# Backend endpoints

## Animals

  GET()

  ```text
  localhost:3000/animals -> devuelve todos los animales en un array<AnimalDTO>

  localhost:3000/animals/:id -> devuelve el AnimalDTO que coincida con el id

  localhost:3000/animals/shelter/:id -> devuelve todos los animales del refugio con ese id en un array<AnimalsDTO>
  ```

  POST()

  ```text
  localhost:3000/animals -> crea un animal
  ```

  PUT()

  ```text
  localhost:3000/animals-> actualiza un animal 
  ```

  DELETE()

  ```text
  localhost:3000/animals/:id -> elimina el animal con :id
  ```

## Shelters

  GET()

  ```text
  localhost:3000/shelters -> devuelve todos los refugios en un array<ShelterDTO>

  localhost:3000/shelters/:id -> devuelve el ShelterDTO que coincida con el id
  ```

  POST()

  ```text
  localhost:3000/shelters -> crea un refugio
  ```

  PUT()

  ```text
  localhost:3000/shelters -> actualiza un refugio
  ```

  DELETE()

  ```text
  localhost:3000/shelters/:id -> elimina el refugio con :id
  ```

## Users

  GET()

  ```text
  localhost:3000/users -> devuelve todos los usuarios en un array<User>

  localhost:3000/users/:id -> devuelve el UserDTO que coincida con el id

  localhost:3000/users/contributors -> devuelve todos los usuarios que colaboran con algún refugio en un array<UserDTO>

  localhost:3000/users/contributors/shelter/:id -> devuelve todos los colaboradores del refugio con ese id en un array<UserDTO>
  ```

  POST()

  ```text
  localhost:3000/users -> crea un usuario
  ```

  PUT()

  ```text
  localhost:3000/users -> actualiza un usuario
  ```

  DELETE()

  ```text
  localhost:3000/users/:id -> elimina el usuario con :id
  ```

## Adoptions

  GET()

  ```text
  localhost:3000/adoption -> devuelve todas las adopciones en un array<AdoptionDTO>

  localhost:3000/adoption/:id -> devuelve el AdoptionDTO que coincida con el id
  ```

  POST()

  ```text
  localhost:3000/adoption -> crea una adopcion
  ```

  PUT()

  ```text
  localhost:3000/adoption -> actualiza una adopcion
  ```

  DELETE()

  ```text
  localhost:3000/adoption/:id -> elimina una adopcion con :id
  ```

## Auth

POST()

  ```text
  localhost:3000/auth -> devuelve el tokken JWT
  ```
