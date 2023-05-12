const cloudinary = require('cloudinary').v2
import path from 'path'
import { config as dotenvConfig } from 'dotenv'
import { CloudinaryMetaType } from '../seed-data/data'
dotenvConfig({path: path.join(__dirname, '../', '.env')})


// Configuration
export const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!
}
cloudinary.config(cloudinaryConfig);

     
// Upload from LocalFile To CloudinaryServer
// @returns CloudinaryDataResponseType Metadata
export function uploadImage(filename: string): Promise<CloudinaryMetaType> {
  const promise = new Promise<CloudinaryMetaType>((resolve, reject) => {

    const imageUploadOptions = {
      public_id: path.basename(filename),
      width: 400,
      height: 300,
      crop: 'fill', 
      folder: process.env.CLOUDINARY_FOLDER!,
    }

    const publicImageLocation = path.join(__dirname, '../', filename)

    cloudinary.uploader.upload(publicImageLocation, imageUploadOptions, 
      (err: Error, response: CloudinaryMetaType) => {
        if (err) reject(err)
        resolve(response)
      }
    )
  })
  return promise
}

// UploadImage Function
// const testfile = 'public\\61b3b1edf79bf22f3cb65da6.jpg'
// uploadImage(testfile).then(r => console.log(r))

// Generate and getting Image URL
// const url = cloudinary.url("TEST1", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });
// The output url
//console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag