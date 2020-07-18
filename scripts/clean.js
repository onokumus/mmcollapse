const fs = require('fs/promises');
const path = require('path');

fs.rmdir(path.join(__dirname, '../', 'dist'), { recursive: true });