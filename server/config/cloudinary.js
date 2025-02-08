import cloudinaryModule from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: "profile_pics", format: async () => "png" },
});

export { cloudinary, storage };