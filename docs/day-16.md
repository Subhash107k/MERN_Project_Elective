# Day 16 — Advanced File Uploads & Cloud Storage [Advanced Extension / Planned Feature]

## 🎯 Learning Objectives
* Understand `multipart/form-data` request payloads vs standard JSON payloads.
* Configure `multer` middleware for handling file uploads in Express.
* Validate uploaded file sizes and image MIME types (`image/jpeg`, `image/png`).
* Store hosted image URLs in Mongoose document schemas (`imageUrl`, `avatarUrl`).

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 15](./day-15.md).

## 🧠 Theory
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The core codebase uses JSON data payloads. Today's guide demonstrates how to install `multer` and add binary file uploading to your MERN application.

Binary file uploads require `multipart/form-data` encoding. `multer` is an Express middleware parsing file streams, writing binary data to disk or cloud storage (Cloudinary/AWS S3), and attaching `req.file` metadata to request handlers.

## 🔑 Key Concepts
* **`multipart/form-data`:** Encoding type allowing binary file stream transport alongside text fields.
* **Multer Middleware:** Middleware populating `req.file` or `req.files`.
* **Cloud Storage CDN:** Remote asset storage serving images over optimized CDNs.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)
* [`../backend/src/models/Product.js`](../backend/src/models/Product.js)

## ⚙️ Installation / Setup
To add Multer file uploading to your project, install `multer` inside `backend/`:
```bash
cd backend
npm install multer
```

## 💻 Step-by-Step Coding

### Step 1: Configure Multer Upload Middleware (`backend/src/middleware/uploadMiddleware.js`)
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

### Step 2: Attach Upload Middleware to Route (`backend/src/routes/productRoutes.js`)
```javascript
import { upload } from '../middleware/uploadMiddleware.js';

router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ success: true, imageUrl: `/uploads/${req.file.filename}` });
});
```

## 🧪 API / Application Testing
In Postman, set request type to `POST`, select `Body` -> `form-data`, add key `image` of type `File`, pick a JPEG, and click Send.

## 🔬 Practical Lab
Add an `imageUrl` String field to `productSchema.js` to store uploaded product images.

## ✅ Expected Result
Uploading an image returns hosted relative URL path ready for database saving.

## ⚠️ Common Errors
* `req.file is undefined`: Frontend form field name (`image`) does not match Multer parameter string (`upload.single('image')`).

## 🔧 Troubleshooting
Ensure form specifies `encType="multipart/form-data"`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add avatar image uploading capability to user registration workflow.

## 📦 Daily Deliverable
Configured Multer middleware extension handling image file uploads.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
