const PROXY_CONFIG = [
  {
    context: [
      "/course",
    ],
    target: "https://localhost:7162",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
