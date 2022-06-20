interface IPostResponseDTO {
  id?: string;
  title: string;
  description: string;
  phone_number: number;
  cep: string;
  city: string;
  district: string;
  street: string;
  house_number: string;
  category_name: string;
  images?: {
    id: string;
    image_name: string;
    post_id: string;
    user_id: string;
    image_url(): string;
  };
}

export { IPostResponseDTO };
