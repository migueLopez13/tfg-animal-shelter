import { RouterLink } from "@angular/router";

export interface navbarOption {
  name: string,
  route?: RouterLink,
  dropdownOptions?: navbarOption
}