export interface ShelterDTO {
  id: string;
  name: string;
  city: string;
  postalCode: string;
  address: string;
  email: string;
  phone: string;
  socialMedia: SocialMedia[]
  colaborators: string[];
  animals: string[];
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
}