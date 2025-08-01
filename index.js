import express from "express";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import { AssemblyAI } from "assemblyai";

dotenv.config();
const app = express();
const port = 3000;

const upload = multer({ dest: "uploads/" });

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY,
});

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  const filePath = req.file.path;

  try {
    const transcript = await client.transcripts.transcribe({
      audio: fs.createReadStream(filePath),
      speech_model: "universal",
    });

    fs.unlinkSync(filePath);

    res.json({
      success: true,
      transcription: transcript.text,
    });
  } catch (error) {
    console.error("Transcription error:", error.message);
    res.status(500).json({
      success: false,
      message: "Transcription failed",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
