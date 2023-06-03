const PROXY_CONFIG = [
  {
    context: [
      "/course",
      "/coderun",
      "/user"
    ],
    target: "https://localhost:44396",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
