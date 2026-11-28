const express = require('express');
const healthRouter = require('./src/routes/health');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to CommunityHub API' });
});

app.use('/api/health', healthRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('CommunityHub API running on port ' + PORT);
});
