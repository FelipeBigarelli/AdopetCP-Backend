class ImportUserAvatarUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { ImportUserAvatarUseCase };
