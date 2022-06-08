import { NavbarOption } from "../interfaces/nabvar-option.interface";

export const navbarOptions: NavbarOption[] = [
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