interface ICreatePostDTO {
  id?: string;
  user_id?: string;
  title: string;
  description: string;
  photo: string;
  phone_number: number;
  cep: string;
  city: string;
  district: string;
  street: string;
  house_number: string;
}

export { ICreatePostDTO };
