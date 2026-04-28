const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// 1. Security Headers (Helmet)
// Configured to allow Tailwind CDN and the inline configuration script found in your HTML
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "https://cdn.tailwindcss.com", "'unsafe-inline'"],
      },
    },
  })
);

// 2. Cross-Origin Resource Sharing
app.use(cors());

// 3. Body Parsing
app.use(express.json());

// 4. Rate Limiting (Protection against brute-force/DDoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
app.use(express.json());

// Handle deletion request submissions
app.post('/functions/v1/store-deletion-request', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('New Deletion Request Received:', { name, email, subject, message });
    
    // Simulate successful storage
    res.status(200).json({ 
        success: true, 
        message: 'Your request has been received and will be processed by our legal team.' 
    });
});

// Serve static portal files - Handled by Vite/Vercel in production
// app.use(express.static(path.join(__dirname), { ... }));

const PORT = process.env.PORT || 2230;
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`FinishD Support Portal running at http://localhost:${PORT}`);
  });
}

module.exports = app;