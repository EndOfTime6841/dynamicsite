import express from 'express';
import path from 'path';

const app = express();
// Render automatically provides a PORT environment variable dynamically
const PORT = process.env.PORT || 5000;

// 1. Optional API Endpoint (If you want your Box UI to fetch data from the backend later)
app.get('/api/boxes', (req, res) => {
  res.json([
    { id: 1, title: "Analytics Card", description: "Live traffic metrics.", badge: "Active" },
    { id: 2, title: "Settings Card", description: "Manage profile settings.", badge: "" }
  ]);
});

// 2. Serve Vite's compiled frontend files
// In Node 24, path.resolve() handles directory matching flawlessly
const distPath = path.resolve('dist');
app.use(express.static(distPath));

// 3. Fallback Route: Ensures React Router works if you add multiple pages later
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// 4. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server safely floating on Render port ${PORT}`);
});
