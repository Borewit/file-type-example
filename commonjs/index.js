const path = require('path');

/**
 * Import 'file-type' ES-Module in CommonJS Node.js module
 */
(async () => {
  const { fileTypeFromFile } = await import('file-type');

  const type = await fileTypeFromFile(path.join('..', 'fixture', 'fixture.gif'));
  console.log(type);
})();
