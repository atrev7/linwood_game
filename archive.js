
function checkAccess() {
  const input = document.getElementById("accessInput").value.trim().toUpperCase();
  const correctPassword = "SD44946";
  const errorBox = document.getElementById("error");
  const unlocked = document.getElementById("unlockedContent");

  errorBox.textContent = "";
  unlocked.classList.add("hidden");

  if (input === correctPassword) {
    unlocked.classList.remove("hidden");
  } else {
    errorBox.textContent = "Invalid credentials. Access denied.";
  }
}
