const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Docker Cloud App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #6a11cb, #2575fc);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      background-color: #ffb347;
      color: #000;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s;
    }
    button:hover {
      transform: scale(1.1);
      background-color: #ffcc66;
    }
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
    }
  </style>
</head>
<body>
  <h1>Welcome to My Docker App 🚀</h1>
  <button onclick="document.getElementById('message').innerText='Hello from Docker in the Cloud! ✨'">
    Click Me!
  </button>
  <p id="message"></p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
