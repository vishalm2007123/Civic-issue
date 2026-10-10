const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;

function runGit(cmd) {
  console.log(`> ${cmd}`);
  try {
    const output = execSync(cmd, { cwd: rootDir, encoding: 'utf-8' });
    if (output.trim()) console.log(output.trim());
    return true;
  } catch (err) {
    console.error(`Error executing git command '${cmd}':`, err.message);
    return false;
  }
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function commitAndPush(message) {
  runGit('git add .');
  // Check if anything staged
  try {
    const status = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf-8' });
    if (!status.trim()) {
      console.log('Nothing to commit, skipping step push.');
      return;
    }
  } catch (e) {}

  const committed = runGit(`git commit -m "${message.replace(/"/g, '\\"')}"`);
  if (committed) {
    runGit('git push origin main');
  }
}

console.log('Starting 105 incremental changes with individual commits & pushes...');
