import { createCloudinaryInstance } from '@cloudinary/url-builder';

const cld = createCloudinaryInstance({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

export default cld;