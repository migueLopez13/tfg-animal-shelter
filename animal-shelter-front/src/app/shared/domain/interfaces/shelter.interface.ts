import { ShelterMedia } from "./shelter-media.interface";
import { ShelterSocial } from "./shelter-social.interface";

export interface Shelter {
  email: string;
  name: string;
  description: string;
  phone: string
  countryCode: string;
  stateCode: string;
  provinceCode: string;
  zip: string;
  address: string;
  longitude: number;
  latitude: number;
  media: ShelterMedia[];
  social?: ShelterSocial[];
}
