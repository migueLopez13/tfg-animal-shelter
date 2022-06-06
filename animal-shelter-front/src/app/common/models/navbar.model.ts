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
      },
      {
        name: 'Birds',
        route: 'animals/birds'
      }
    ]
  },
  {
    name: 'Shelters',
    route: 'shelters',
  },
  {
    name: 'Collaborate',
    route: 'collaborate',
  }
];