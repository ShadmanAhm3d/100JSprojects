import { v2 as cloudinary } from "cloudinary";
import express from "express";
import multer from "multer";
import fs from "fs";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// 🛠️ Cloudinary Config
cloudinary.config({
  cloud_name: "dl2voyvek",
  api_key: "585564895938448",
  api_secret: "VXOqMXDurrbOjEgA_OgkcZAPnl4",
});

// 🛠️ Multer Config (TEMPORARY Storage)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Ensure folder exists
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// 🛠️ Upload API
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        msg: "No image received in request",
        success: false,
      });
    }

    console.log("Uploading file:", req.file.path);

    // 🚀 Fix: Use `await` to wait for Cloudinary upload
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "testing", // Automatically creates the folder if it doesn’t exist
    });

    console.log("Upload successful:", result);

    // Delete file after upload completes
    fs.unlinkSync(req.file.path);

    res.json({
      url: result.secure_url, // Use `secure_url` for HTTPS
      success: true,
    });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});

