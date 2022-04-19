interface IPostResponseDTO {
  id: string;
  title: string;
  description: string;
  photo: string;
  phone_number: number;
  cep: string;
  city: string;
  district: string;
  street: string;
  house_number: string;
  photo_url(): string;
}

export { IPostResponseDTO };