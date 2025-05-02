
# 🧠 Protocol TCP Chat Server

A simple terminal-based TCP chat server built with Node.js using the `net` module. It allows multiple clients to connect via TCP (e.g., using `nc`) and communicate in real time, supporting private messaging and user management through commands.

---

## 🚀 Features

* 🧑‍🤝‍🧑 Multi-user support over TCP
* ✉️ Private messaging (`/msg`)
* 🆔 Custom usernames (`/nick`)
* 👥 View online users (`/list`)
* ❓ Help command (`/help`)
* 📢 Broadcast messages to all connected users

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/protocol-tcp-chat.git
cd protocol-tcp-chat
```

2. **Install Node.js dependencies**

```bash
npm install
```

---

## 🏃 Usage

### 🔧 Start the server

```bash
node server.js
```

Server will start on **port 3000**.

### 🖥️ Connect with `nc` (Netcat)

You can connect using `nc` (or any TCP client):

```bash
nc localhost 3000
```

Or if using [Ngrok](https://ngrok.com) for tunneling:

```bash
nc 0.tcp.in.ngrok.io 18706
```

*(Replace `0.tcp.in.ngrok.io:18706` with your actual ngrok TCP URL.)*

---

## 💬 Chat Commands

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `/nick <username>`  | Change your display name           |
| `/list`             | List all currently connected users |
| `/msg <user> <msg>` | Send a private message             |
| `/help`             | Show help menu                     |

---

## 🗂️ Project Structure

```
.
├── server.js         # Core TCP chat server
├── package.json      # Node.js metadata
└── README.md         # You're here!
```

---

## 🛑 To-Do & Improvements

* [ ] Add message history (per session)
* [ ] Save user aliases across sessions
* [ ] WebSocket frontend integration
* [ ] Docker container with exposed TCP port

---



## 📜 License

MIT © Pawar sachin