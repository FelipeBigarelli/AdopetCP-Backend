import { ImportUserAvatarController } from './importUserAvatarController';
import { ImportUserAvatarUseCase } from './importUserAvatarUseCase';

const importUserAvatarUseCase = new ImportUserAvatarUseCase();

const importUserAvatarController = new ImportUserAvatarController(
  importUserAvatarUseCase
);

export { importUserAvatarController };
