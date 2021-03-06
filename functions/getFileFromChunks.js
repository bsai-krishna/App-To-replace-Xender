export default function getFileFromChunks (chunks, meta) {
    console.log(meta);
    const blobParts = [];
    chunks.forEach((c) => {
        const b = new Blob([c]);
        blobParts.push(b);
    });
    const blob = new Blob(blobParts,  { type: meta.type });
    const url = URL.createObjectURL(blob);
    return {
        url,
        meta,
        status: {
            progress: 100,
            state: 'received',
        }
    }
};