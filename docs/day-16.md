# Day 16 — Advanced File Uploads & Cloud Storage

## Learning Objectives
* Understand `multipart/form-data` request payloads vs JSON payloads.
* Configure `multer` middleware for handling single and multiple file uploads in Express.
* Connect file uploads to Cloud storage services (Cloudinary / Cloud Buckets).
* Store uploaded image URLs in Mongoose document schemas (`avatarUrl`, `productImage`).

## What We Learn
Today we expand our MERN stack application with file and image uploading capabilities. We learn how `multer` parses incoming binary file streams, how to validate image MIME types (`image/jpeg`, `image/png`), and how to store file URLs in MongoDB documents.

## Why We Learn It
Real-world web applications require user avatars, product image catalogs, and document attachments. Storing images directly in MongoDB as Base64 strings degrades performance, so storing hosted URLs is the industry standard.

## Important Concepts
* **`multipart/form-data`:** HTTP encoding type allowing forms to submit text inputs alongside binary file uploads.
* **Multer Middleware:** Express middleware for handling file uploads, providing `req.file` or `req.files`.
* **Cloud Storage Services:** Remote asset storage services (Cloudinary, AWS S3, Google Cloud Storage) serving optimized image URLs over CDNs.

## Project Files
* [`docs/day-16.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-16.md)
* [`backend/src/models/Product.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/models/Product.js)

## Step-by-Step Explanation
1. Install `multer` package: `npm install multer` inside `backend/`.
2. Configure Multer storage engine with file type filtering (`image/jpeg`, `image/png`).
3. Attach `upload.single('image')` middleware to file upload Express routes.
4. Access `req.file` inside the controller and save file URL to database document.

## Code Examples
```javascript
// Express Multer Middleware Configuration Example
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('Only image files are allowed'), false);
    }
});
```

## Practical Exercise
1. Add an `imageUrl` string field to `Product.js` schema.
2. Build a file input element in React: `<input type="file" onChange={(e) => setFile(e.target.files[0])} />`.
3. Submit form data using `FormData` object:
```javascript
const formData = new FormData();
formData.append('image', file);
formData.append('name', name);
await axios.post('/api/products', formData);
```

## Common Errors
* **`req.file` is `undefined`**: Happens when the frontend `<input name="image">` field name does not match the key specified in `upload.single('image')`.

## How to Debug
Ensure the input form specifies `encType="multipart/form-data"` and field key names match exactly between frontend and backend.

## Homework
Add an optional `avatar` image upload feature to the user registration workflow.

## Expected Result
React form uploads binary image files to Express backend, and the returned image URL is stored in MongoDB.

## Interview Questions
1. *Why should images and large files be stored in cloud storage buckets rather than directly inside MongoDB documents?*
2. *What is the purpose of the `multer` middleware in Node.js applications?*

## Day Summary
You have implemented file upload handling using Multer and configured image URL storage in Mongoose schemas.
