/**
 * It converts an image file to a base64 string
 * @param {Blob} file - Blob - The file to convert to base64
 * @returns A promise that resolves to a base64 string.
 */
export declare const convertImageToBase64: (file: Blob) => Promise<unknown>;
/**
 * It takes a base64 string and a file type and returns a promise that resolves to an image
 * @param {string} base64String - The base64 string that you want to convert to an image
 * @param {string} file - The file type of the image.
 * @returns A promise that resolves to an image.
 */
export declare const convertBase64ToImage: (base64String: string, file: string) => Promise<unknown>;
