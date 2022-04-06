interface ICreatePostDTO {
  id?: string;
  title: string;
  description: string;
  photo: string;
  phone_number: number;
  cep: number;
  city: string;
  district: string;
  street: string;
  house_number: string;
}

export { ICreatePostDTO };
