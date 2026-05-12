function generatePlan() {
  let subjects = document.getElementById("subjects").value.split(/,|\n/);
  let examDate = new Date(document.getElementById("examDate").value);
  let today = new Date();

  let daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

  let list = document.getElementById("planList");
  list.innerHTML = "";

  if (daysLeft <= 0) {
    alert("Invalid date");
    return;
  }

  let plans = [];

  for (let i = 0; i < daysLeft; i++) {
    let subject = subjects[i % subjects.length].trim();

    let text = `Day ${i + 1}: Study ${subject}`;
    plans.push({ text, done: false });

    let li = document.createElement("li");
    li.innerText = text;

    li.onclick = () => {
      li.classList.toggle("done");
      saveData();
      showPopup();
    };

    list.appendChild(li);
  }

  localStorage.setItem("plans", JSON.stringify(plans));
}

function saveData() {
  let items = [];
  let completed = 0;

  document.querySelectorAll("li").forEach(li => {

    let isDone = li.classList.contains("done");

    if (isDone) {
      completed++;
    }

    items.push({
      text: li.innerText,
      done: isDone
    });
  });

  localStorage.setItem("plans", JSON.stringify(items));

  let percent = Math.round((completed / items.length) * 100);

  document.getElementById("progressText").innerText =
    `Progress: ${percent}%`;
let firstPending = items.find(item => !item.done);

if (firstPending) {
  document.getElementById("todayTask").innerText =
    `Today's Task: ${firstPending.text}`;
} else {
  document.getElementById("todayTask").innerText =
    "🎉 All Tasks Completed!";
}
}

function loadData() {
  let data = JSON.parse(localStorage.getItem("plans")) || [];

  let list = document.getElementById("planList");

  data.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.text;

    if (item.done) {
      li.classList.add("done");
    }

    li.onclick = () => {
      li.classList.toggle("done");
      saveData();
      showPopup();
    };

    list.appendChild(li);
  });
saveData();
}

window.onload = loadData;
function showPopup() {

  let messages = [
    "academic comeback kinda real 👀",
    "bro actually locked in 😭",
    "tiny win but we take those",
    "future topper behavior",
    "okayyy productivity era",
    "that syllabus fears you now"
  ];

  let randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  let popup = document.getElementById("popup");

  popup.innerText = randomMessage;

  popup.style.opacity = "1";
  popup.style.transform = "translateY(0)";

  setTimeout(() => {
    popup.style.opacity = "0";
   popup.style.transform = "translateY(20px)";
  }, 2000);
}
let timerInterval;

function startLockInMode() {

  let selectedTheme =
  document.getElementById("themeSelect").value;

document.body.classList.remove(
  "candle-theme",
  "universe-theme",
  "clarity-theme",
  "ecosystem-theme"
);

if (selectedTheme === "candle") {
  document.body.classList.add("candle-theme");
}

if (selectedTheme === "universe") {
  document.body.classList.add("universe-theme");
}

if (selectedTheme === "clarity") {
  document.body.classList.add("clarity-theme");
}

if (selectedTheme === "ecosystem") {
  document.body.classList.add("ecosystem-theme");
}

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  let focusMinutes =
  document.getElementById("focusTime").value;

if (!focusMinutes || focusMinutes <= 0) {

  showPopupMessage(
    "enter a valid focus time bestie 😭"
  );

  return;
}

let timeLeft = focusMinutes * 60;

  clearInterval(timerInterval);

setInterval(() => {
  createParticle();
}, 800);
 timerInterval = setInterval(() => {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText =
      `${minutes}:${seconds}`;

    if (selectedTheme === "universe") {
  createStar();
}
  timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);

      showPopupMessage(
        "LOCK-IN SESSION COMPLETE. academic weapon behavior 😭🔥"
      );
    }

  }, 1000);
}
function showPopupMessage(message) {

  let popup = document.getElementById("popup");

  popup.innerText = message;

  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.opacity = "0";
  }, 3000);
}
document.addEventListener("visibilitychange", () => {

  if (document.hidden) {

    showPopupMessage(
      "caught lacking 🤨 get back to studying"
    );

  }

});
function createStar() {

  let container =
    document.getElementById("starsContainer");

  let star = document.createElement("div");

  star.classList.add("star");

  star.style.left =
    Math.random() * window.innerWidth + "px";

  star.style.top =
    Math.random() * window.innerHeight + "px";

  container.appendChild(star);
}
function createParticle() {

  let container =
    document.getElementById("particlesContainer");

  let particle =
    document.createElement("div");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * window.innerWidth + "px";

  particle.style.background =
    "white";

  particle.style.width =
    Math.random() * 10 + 5 + "px";

  particle.style.height =
    particle.style.width;

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}