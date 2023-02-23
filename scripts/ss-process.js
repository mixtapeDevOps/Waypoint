const { spawn } = require("child_process")

// "yarn dev"を実行する
const devProcess = spawn("yarn", ["dev"])

// "node scripts/take-screenshot.js"を実行する
const screenshotProcess = spawn("node", ["scripts/take-screenshot.js"])

// 両方のプロセスが終了したら、処理を終了する
Promise.all(
  [devProcess, screenshotProcess].map((p) => p.on("exit", () => process.exit())),
)
