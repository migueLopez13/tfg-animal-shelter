import { RouterLink } from "@angular/router";

export interface NavbarOption {
  name: string,
  route?: string,
  dropdownOptions?: NavbarOption[]
}