let alarmTimeout;
let alarmInterval;

function setAlarm() {
  const time = parseInt(document.getElementById("time").value);
  if (isNaN(time) || time <= 0) {
    document.getElementById("message").innerText = "Please enter a valid time.";
    return;
  }

  document.getElementById(
    "message"
  ).innerText = `Alarm set for ${time} seconds.`;

  alarmTimeout = setTimeout(() => {
    document.getElementById("message").innerText = "⏰ Alarm Triggered!";

    alarmInterval = setInterval(() => {
      alert("⏰ Alarm is ringing!");
    }, 1000);
  }, time * 1000);
}

function stopAlarm() {
  clearTimeout(alarmTimeout);
  clearInterval(alarmInterval);
  document.getElementById("message").innerText = "Alarm stopped.";
}
