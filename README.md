# RealTime Chat Application - LetsChat

![image](https://github.com/user-attachments/assets/d6859388-26be-4fd5-b6cb-f4c1500d2e70)

## Overview
LetsChat is a scalable real-time chat application that enables instant messaging and seamless multi-user interactions using WebSockets. It provides a dynamic user experience with real-time notifications, GIF suggestions, emoji/sticker support, and a customized chat UI.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **WebSockets:** Socket.io

## Features
- **Instant Messaging:** Real-time communication with multiple users.
- **Live Notifications:** Audio notifications (ting.mp3) for new messages.
- **User-Friendly UI:** Includes a navigation bar, chat window, and message input.
- **Interactive Features:** GIF suggestions, emoji & sticker support, and scheduled messaging.
- **User Events Handling:**
  - Prompt users for names upon joining.
  - Notify users when someone joins or leaves the chat.
  - Broadcast messages to all connected users.

## Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/letschat.git
   cd letschat
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Run the Server:**
   ```sh
   nodemon nodeserver/index.js
   ```
4. **Launch the App:**
   - Install **Live Server** extension in VS Code.
   - Open `index.html`, right-click, and select **Open with Live Server**.
   - Copy the URL and open multiple instances (new tab/incognito mode) to test real-time messaging.

## Future Enhancements
- User authentication and chat history storage.
- Video and voice calling integration.
- AI-based smart message suggestions.

## License
MIT License

---
📩 **Connect with Me:** [GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourprofile)

