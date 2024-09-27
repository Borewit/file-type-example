import { fileTypeFromStream } from 'file-type';
import { Readable } from 'node:stream';

async function getMimeTypeFromStream(body: Readable) {
    const fileType = await fileTypeFromStream(body);
    return fileType?.mime ?? 'application/octet-stream';
}

// Create a custom Readable stream
const readable = new Readable({
    read() {
        // Push some binary data (for example, a PNG file signature)
        this.push(Buffer.from([0x47, 0x49, 0x46]));
        // No more data
        this.push(null);
    }
});

// Get the mime type from the stream
(async () => {
    const result = await getMimeTypeFromStream(readable);
    console.log(result); // Expected output: "image/gif"
})();