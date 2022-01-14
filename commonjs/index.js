/**
 * Import 'file-type' ES-Module in CommonJS Node.js module
 */
(async () => {
  const { fileTypeFromFile } = await import('file-type');

  const type = await fileTypeFromFile('fixture/fixture.gif');
  console.log(type);
})();
