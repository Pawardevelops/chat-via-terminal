const net = require('node:net');
const clients = new Map();          // Map<Socket, username>
const usernameToSocket = new Map(); // Map<username, Socket>

const commands = {
  "/nick": "Set your username",
  "/list": "List online users",
  "/help": "Show this help",
  "/msg": "Send private message: /msg <username> <message>"
};

function handleMessage(msg, socket) {
  const currentUsername = clients.get(socket);

  if (msg.startsWith('/nick ')) {
    const newUsername = msg.split(' ')[1];
    if (!newUsername) {
      socket.write('Usage: /nick <new_username>\n');
      return;
    }
    if (usernameToSocket.has(newUsername)) {
      socket.write(`Username "${newUsername}" is taken\n`);
      return;
    }
    clients.set(socket, newUsername);
    usernameToSocket.delete(currentUsername);
    usernameToSocket.set(newUsername, socket);
    broadcast(`${currentUsername} → ${newUsername}`, socket);
    socket.write(`Username updated to: ${newUsername}\n`);
  }
  else if (msg.startsWith('/msg ')) {
    const parts = msg.split(' ');
    if (parts.length < 3) {
      socket.write('Usage: /msg <username> <message>\n');
      return;
    }
    const target = parts[1];
    const message = parts.slice(2).join(' ');
    if (!usernameToSocket.has(target)) {
      socket.write(`User "${target}" not found\n`);
      return;
    }
    const targetSocket = usernameToSocket.get(target);
    targetSocket.write(`[PM from ${currentUsername}] ${message}\n`);
    socket.write(`Message sent to ${target}\n`);
  }
  else if (msg === '/list') {
    socket.write(`Online: ${Array.from(usernameToSocket.keys()).join(', ')}\n`);
  }
  else if (msg === '/help') {
    socket.write('Commands:\n' + 
      Object.entries(commands).map(([cmd, desc]) => `${cmd} - ${desc}`).join('\n') + '\n');
  }
  else {
    broadcast(`${currentUsername}: ${msg}`, socket);
  }
}

function handleDisconnect(socket) {
  const username = clients.get(socket);
  clients.delete(socket);
  usernameToSocket.delete(username);
  broadcast(`${username} left`, socket);
}

function broadcast(msg, sender) {
  clients.forEach((_, client) => {
    if (client !== sender) client.write(`${msg}\n`);
  });
}

const server = net.createServer(socket => {
  let username = `User${Math.random().toString(16).slice(2, 10)}`;
  socket.write('Welcome to the chat!\nType /help for commands.\n\n');
  console.log(`${username} connected`);

  clients.set(socket, username);
  usernameToSocket.set(username, socket);
  broadcast(`${username} joined`, socket);

  socket.on('data', (data) => {
    handleMessage(data.toString().trim(), socket);
  });

  socket.on('end', () => handleDisconnect(socket));
  socket.on('error', (err) => console.error('Socket error:', err));
});

server.listen(3000, () => console.log('Chat server running on port 3000'));
