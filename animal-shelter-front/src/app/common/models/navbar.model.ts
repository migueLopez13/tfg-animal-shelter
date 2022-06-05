import { navbarOption } from "../interfaces/nabvar-option.interface";

export const navbarOptions: navbarOption[] = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'Animals',
    route: 'animals',
    dropdownOptions: [
      {
        name: 'Cats',
        route: 'animals/cats'
      },
      {
        name: 'Dogs',
        route: 'animals/dogs'
      }
    ]
  },
  {
    name: 'Shelters',
    route: 'shelters',
  },
  {
    name: 'To collaborate',
    route: 'collaborate',
  }
];