import Ad from '../models/Ad.js';
import fs from 'fs';
import path from 'path';

// ✅ Create new Ad
export const createAd = async (req, res) => {
  try {
    const { title, description, area } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'File is required' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    const ad = new Ad({ title, description, fileUrl, area });
    await ad.save();
    res.json(ad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create ad' });
  }
};

// ✅ Get all Ads
export const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch ads' });
  }
};

// ✅ Delete Ad (and remove file)
export const deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ error: 'Ad not found' });

    // remove file from uploads folder
    const filePath = path.join(process.cwd(), ad.fileUrl);
    fs.unlink(filePath, (err) => {
      if (err) console.warn('File delete warning:', err.message);
    });

    await Ad.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ad deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete ad' });
  }
};
