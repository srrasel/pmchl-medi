// start-server.js
const { spawn } = require('child_process');

// Run Strapi using npm
const strapi = spawn('npm', ['run', 'start'], {
  shell: true,
  stdio: 'inherit'
});

strapi.on('close', (code) => {
  console.log(`Strapi process exited with code ${code}`);
});
