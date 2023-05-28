const PROXY_CONFIG = [
  {
    context: [
      "/course",
      "/coderun"
    ],
    target: "https://localhost:44396",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
