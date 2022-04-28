interface IPostImagesResponseDTO {
  id: string;
  image_name: string;
  post_id: string;
  user_id: string;
  image_url(): string;
}

export { IPostImagesResponseDTO };
