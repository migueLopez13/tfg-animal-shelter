import { AnimalDTO } from './animal.dto';
import { UserDTO } from './user.dto';

export interface AdoptionDTO {
  id: string;
  user: UserDTO;
  animal: AnimalDTO;
  date: string;
}
