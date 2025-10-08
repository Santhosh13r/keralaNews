import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import adRoutes from './routes/adRoutes.js';

const app = express();

// ✅ ES module dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173", // React dev server URL (Vite uses 5173)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// ✅ Serve uploads folder statically
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// ✅ MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/topnew', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ API routes
app.use('/api/ads', adRoutes);

// ✅ Test routes
app.get('/get', (req, res) => {
  res.json({ message: "GET API working fine ✅" });
});

app.post('/post', (req, res) => {
  res.status(200).json({ message: "POST API working fine ✅" });
});

// ✅ Start server
const PORT = 8082;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
