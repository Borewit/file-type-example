import * as path from 'path';

/**
 * Import 'file-type' ES-Module in CommonJS Node.js module
 */
(async () => {
  const { fileTypeFromFile } = await (eval('import("file-type")') as Promise<typeof import('file-type')>);

  const type = await fileTypeFromFile(path.join('..', 'fixture', 'fixture.gif'));
  console.log(type);
})();
