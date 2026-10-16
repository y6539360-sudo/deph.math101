/**
 * Arcade 101 - Entry point
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

if (process.env.NODE_ENV === 'production' || process.argv[1] === __filename) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Arcade 101 server active on port ${PORT}`);
  });
}

export default app;
