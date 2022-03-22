import { Request, Response } from 'express';

import { ImportUserAvatarUseCase } from './importUserAvatarUseCase';

class ImportUserAvatarController {
  constructor(private importUserAvatarUseCase: ImportUserAvatarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importUserAvatarUseCase.execute(file);

    return response.send();
  }
}

export { ImportUserAvatarController };
