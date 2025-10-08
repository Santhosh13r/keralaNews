import express from 'express';
import multer from 'multer';
import { createAd, getAllAds, deleteAd } from '../controllers/adcontroller.js';

const router = express.Router();

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// ✅ Routes
router.post('/', upload.single('media'), createAd);
router.get('/', getAllAds);
router.delete('/:id', deleteAd);

export default router;
