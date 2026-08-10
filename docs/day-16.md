# Day 16 — Advanced File Uploads & Cloud Storage [Advanced Extension / Planned Feature]

## 🎯 What Was Learned
* Understood `multipart/form-data` request payloads vs standard JSON payloads.
* Learned how `multer` middleware processes file stream uploads in Express.
* Studied uploaded file size limits and image MIME type validators (`image/jpeg`, `image/png`).
* Learned how hosted image URLs are stored in Mongoose schemas (`imageUrl`, `avatarUrl`).

## 🧠 Theory & Concepts
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The baseline application operates using JSON data payloads. Today's notes document how to install `multer` and add binary file uploading to your MERN application.

Binary file uploads require `multipart/form-data` encoding. `multer` is an Express middleware parsing file streams, writing binary data to disk or cloud storage (Cloudinary/AWS S3), and attaching `req.file` metadata to request handlers.

## 🔑 Key Takeaways
* **`multipart/form-data`:** Encoding type allowing binary file stream transport alongside text fields.
* **Multer Middleware:** Middleware populating `req.file` or `req.files`.
* **Cloud Storage CDN:** Remote asset storage serving images over optimized CDNs.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)
* [`../backend/src/schemas/productSchema.js`](../backend/src/schemas/productSchema.js)

## ⚙️ Setup & Configuration
To add Multer file uploading extension to your project, install `multer` inside `backend/`:
```bash
cd backend
npm install multer
```

## 💻 Implementation

### Step 1: Configured Multer Upload Middleware (`backend/src/middleware/uploadMiddleware.js`)
```javascript
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'), false);
};

export const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 }, fileFilter });
```

### Step 2: Attached Upload Middleware to Route (`backend/src/routes/productRoutes.js`)
```javascript
import { upload } from '../middleware/uploadMiddleware.js';

router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ success: true, imageUrl: `/uploads/${req.file.filename}` });
});
```

## 🧪 Testing & Verification
In Postman, set request type to `POST`, select `Body` -> `form-data`, add key `image` of type `File`, select a JPEG, and click Send.

## 🔬 Practical Work
Studied adding an `imageUrl` String field to `productSchema.js` to store uploaded product image relative paths.

## ✅ What Was Completed
* Documented `multipart/form-data` file stream handling.
* Created Multer storage engine implementation guide.
* Designed image upload route extension patterns.

## ⚠️ Problems Encountered
* `req.file is undefined`: Occurs when frontend form field name (`image`) does not match Multer parameter string (`upload.single('image')`).

## 🔧 Troubleshooting & Fixes
Ensure form specifies `encType="multipart/form-data"`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Design avatar image uploading capability for user registration workflows.

## 📦 Day Deliverable
Configured Multer middleware extension design for image file uploads.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code extension documented
- [ ] File upload pipeline tested
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
