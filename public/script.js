const socket = io();
const form = document.getElementById("chat-form");
const input = document.getElementById("msg");
const messages = document.getElementById("messages");

const userId = Math.floor(Math.random() * 100000); // random ID for user session

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", { id: userId, text: input.value });
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  const li = document.createElement("li");
  li.textContent = msg.text;
  if (msg.id === userId) {
    li.classList.add("self");
  }
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});
