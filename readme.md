
---

# 💬 TCP Chat Server

A minimalist, terminal-based chat server built on raw TCP sockets using Node.js.
Designed for extensibility, this project serves as the foundation for a custom communication protocol.([GitHub][1])

---

## 🚀 Features

* 🧱 **Raw TCP Communication**: Utilizes Node.js's native `net` module for low-level socket handling.
* 🧑‍🤝‍🧑 **Multi-Client Support**: Handles multiple simultaneous client connections.
* 🧭 **Command Interface**: Supports commands like `/nick`, `/msg`, `/list`, and `/help`.
* 🔒 **Username Management**: Ensures unique usernames across sessions.
* 📡 **Broadcast Messaging**: Distributes messages to all connected clients.
* 🧰 **Extensible Architecture**: Built to accommodate future protocol enhancements.

---

## 🛠️ Getting Started

### 📦 Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher)

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pawardevelops/chat-via-terminal.git
   cd tcp-chat-server
   ```



2. Install dependencies:

   ```bash
   npm install
   ```



3. Start the server:

   ```bash
   node server.js
   ```



---

## 💻 Usage

### 🧑‍💻 Connecting to the Server

Use `nc` (Netcat) or any TCP client to connect:

```bash
nc localhost 3000
```



### 📝 Available Commands

* `/nick <username>`: Set or change your username.
* `/list`: Display a list of online users.
* `/msg <username> <message>`: Send a private message to a user.
* `/help`: Show available commands.([GitHub][1])

---

## 🧪 Example Session

```bash
$ nc localhost 3000
Welcome to the chat!
Type /help for commands.

Usera joined
/nick Alice
Username updated to: Alice
Bob joined
/msg Bob Hello Bob!
Message sent to Bob
/list
Online: Alice, Bob
```



---

## 🧱 Architecture Overview

```plaintext
+-----------------+
|   Client (nc)   |
+--------+--------+
         |
         | TCP
         |
+--------v--------+
|   Node.js TCP   |
|     Server      |
+--------+--------+
         |
         | Command Parsing
         |
+--------v--------+
|  Command Handler|
+-----------------+
```



---

## 🗺️ Roadmap

* 🧪 **Custom Protocol Development**: Design and implement a bespoke communication protocol atop TCP.
* 🐳 **Docker Integration**: Containerize the application for streamlined deployment.
* 🌐 **Ngrok Support**: Enable external access via Ngrok tunnels.
* 🛡️ **Security Enhancements**: Introduce authentication and encryption mechanisms.
* 📜 **Logging**: Implement comprehensive logging for monitoring and debugging.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

