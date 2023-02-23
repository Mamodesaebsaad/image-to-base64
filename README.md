### Image To base64 convertor
This package convert images of type png, jpg, jpeg and svg to base64 and vice versa (converts base64 to image format)

### Instructions

- To install this package
    ``` npm install @ms/image-to-base64 ```

- Then in your file import the module
    ```
    import { convertImageToBase64, convertBase64ToImage } from 'image-to-base64';
    ```

- To convert image to base64
    ```   
        const file = e.target.files[0];
        convertImageToBase64(file)
        .then((base64String) => {
            console.log(base64String);  
        })
        .catch((error) => console.error(error));
    ```
- To convert Base64 to image format

    ```
        convertBase64ToImage(base64String, filename)
        .then((file) => {
            console.log(file);
        })
      .catch((error) => console.error(error));
    ```