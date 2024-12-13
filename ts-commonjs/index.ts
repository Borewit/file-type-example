import * as path from 'path';
import {loadEsm} from 'load-esm';

/**
 * Import 'file-type' ES-Module in CommonJS Node.js module
 */
(async () => {
  const { fileTypeFromFile } = await loadEsm<typeof import('file-type')>('file-type');

  const type = await fileTypeFromFile(path.join('..', 'fixture', 'fixture.gif'));
  console.log(type);
})();
