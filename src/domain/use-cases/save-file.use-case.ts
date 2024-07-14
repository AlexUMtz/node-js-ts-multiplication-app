import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table',
  }: Options): boolean {
    try {
      // Crea directorio de manera recursiva
      fs.mkdirSync(fileDestination, { recursive: true });

      // Crea el archivo en l directorio que le indicamos
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
