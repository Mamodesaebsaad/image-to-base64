/**
 * It converts an image file to a base64 string
 * @param {Blob} file - Blob - The file to convert to base64
 * @returns A promise that resolves to a base64 string.
 */
export const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let base64String = reader === null || reader === void 0 ? void 0 : reader.result;
            if (base64String) {
                if (file.type === "image/svg+xml") {
                    base64String = base64String.replace("data:image/svg+xml;base64,", "");
                }
                else {
                    base64String = base64String.replace(/^data:image\/(png|jpg|jpeg|webp);base64,/, "");
                }
                resolve(base64String);
            }
        };
        reader.onerror = (error) => reject(error);
    });
};
/**
 * It takes a base64 string and a file type and returns a promise that resolves to an image
 * @param {string} base64String - The base64 string that you want to convert to an image
 * @param {string} file - The file type of the image.
 * @returns A promise that resolves to an image.
 */
export const convertBase64ToImage = (base64String, file) => {
    return new Promise((resolve, reject) => {
        let imageFiletype = `data:image/${file};base64,`;
        let svgfileType = "data:image/svg+xml;base64,";
        let image = "";
        if (file === "svg") {
            image = svgfileType + base64String;
        }
        else {
            image = imageFiletype + base64String;
        }
        resolve(image);
        reject();
    });
};
