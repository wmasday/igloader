const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  const url = req.query.url;
  if (url == null){
    return "";
  }

  axios.get(url)
  .then(response => {
    const regex = response.data.match('"video_url":"(.*)","video_view_count"')[1];
    if (regex){
      const result_url = decodeURIComponent(JSON.parse('"' + regex.replace(/\"/g, '\\"') + '"'));
      axios.get(result_url)
      .then((resp) => {
        const scontent = "https://scontent.cdninstagram.com/";
        res.json(scontent+resp.request.path);
      });
    }
  })
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
