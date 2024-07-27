import {join, dirname} from 'node:path';
import {fileURLToPath } from 'node:url';
import {createReadStream} from 'node:fs';

import {fileTypeStream} from 'file-type';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {

  const path = join(__dirname, '..', 'fixture', 'fixture.gif');
  const nodeReadable = createReadStream(path);
  try {
    const stream = await fileTypeStream(nodeReadable);
    console.log(stream.fileType);
  } finally {
    nodeReadable.close();
  }

})();
