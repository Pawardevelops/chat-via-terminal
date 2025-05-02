const net = require('node:net');
const readline = require('node:readline/promises');

const client = net.createConnection(3000);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.on('connect', () => {
  rl.question('Enter username: ').then(username => {
    client.write(`/nick ${username}`);
    startChatting();
  });
});

client.on('data', (data) => {
  process.stdout.write(data);
});

client.on('end', () => {
  console.log('\nDisconnected from server');
  process.exit();
});

async function startChatting() {
  while (true) {
    const msg = await rl.question('');
    client.write(`${msg}\n`);
  }
}
