# Modelos DTO que servirá el backend':'

## Ejemplo de modelo DTO de usuario

```typescript
 export interface UserDTO {
   id:string;
   name:string;
   description:string;
   surname:string;
   username:string;
   email:string;
   phone1:string;
   phone2?:string;
   address1:string;
   address2?:string;
   postalCode:string;
   image:string; //url de la imagen del usuario
   role:string[];
   shelter:string[]; //si es contribuidor aqui va un array de  shelter_id de los refugios con los que colabora/ si no es contribuidor el array esta vacio
 }
```

## Ejemplo de modelo DTO de animal

```typescript
 export interface AnimalDTO {
   id:string;
   name:string;
   birthdate:string;
   gender:string;
   species:string;
   breed:string;
   vaccinated:VaccineDTO[]; //array con las vacunas del animal
   size:string;
   dewormed:boolean; //desparasitado si/no
   adoption:Adoption;
   arrivalDate:string;
   images:string[]; //array con urls de las imagenes del animal
   shelterId:string;
 }

 export interface VaccineDTO{
   id:string;
   name:string;
 }
```

## Ejemplo de modelo DTO de refugio

```typescript
 export interface ShelterDTO {
   id:string;
   name:string;
   city:string;
   postalCode:string;
   address:string;
   email:string;
   phone:string;
   socialMedia:SocialMedia[]
   colaborators:string[]; //array con todos los user_id de los colaboradores
   animals:string[]; //array con todos los animal_id de los animales que estan en el refugio
 }

 export interface SocialMedia{
   id:string;
   name:string;
   url:string;
 }
```

## Ejemplo de modelo DTO de adopción

```typescript
 export interface AdoptionDTO {
   id:string;
   nameUser:string;
   surnameUser:string;
   emailUser:string;
   phoneUser:string;
   addressUser:string;
   nameAnimal:string;
   animalBirthdate:string;
   species:string; 
   breed:string;
   shelterId:string;
   date:string; // formato mm-dd-yyyy
 }
```
