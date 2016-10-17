const express = require('express');
const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => res.end('Server is running'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
