# 🗣️ nodejs-speech-text (Express + AssemblyAI)

This is a simple Express.js backend that allows users to upload an audio file and receive a transcription using the [AssemblyAI](https://www.assemblyai.com/) API.

The key experiments that I want conduct are:

1. Using post method, uploading a voice data and get a response with its transcription. (Initially just transcribe, but future scope will be to do it real time using socket.io)
2. Make translation in any Language of the transcribed data. (Future scope will be the same as step 1, user will have the option to select specific language) 
3. An AI response to that voice data, in text. 
4. AI response in voice (text to speech) for the that text data( future scope will be to make realtime  with less latency) 

---
This is the first Step

## 🚀 Features

- ✅ Upload audio via POST request
- ✅ Transcribe voice to text using AssemblyAI
- ✅ Supports audio files like `.mp3`, `.wav`, `.m4a`
- ✅ Built with Express.js and Multer for clean backend logic

---

## 📦 Tech Stack

- Node.js
- Express.js
- AssemblyAI SDK
- Multer (file upload middleware)
- dotenv (environment config)

---

## 📁 Project Structure

project-root/
├── uploads/ # Temporary folder for uploaded audio
├── .env # API keys and secrets
├── index.js # Main server file
└── package.json

2. Install dependencies
npm install


3. Get an AssemblyAI API Key
Go to: https://dashboard.assemblyai.com
Sign up or log in
Copy your API key

4. Create a .env file
Inside the project root:
ASSEMBLYAI_API_KEY=your_assemblyai_api_key_here


5. Start the server
node index.js

Server will start on: http://localhost:3000

🎯 API Usage
🔻 POST /transcribe
Upload an audio file and receive its transcription.

Method: POST
Endpoint: /transcribe
Content-Type: multipart/form-data

Body:
audio (File) — The voice/audio file to be transcribed

✔️ Example with Postman
Method: POST

URL: http://localhost:3000/transcribe

Go to Body → form-data

Key: audio
Type: File
Value: Upload your .mp3, .wav, .m4a file




