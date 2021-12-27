const clock = document.querySelector(".headerLeft span:last-child");
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);

const friendArrow = document.querySelector(".friendarrowcontain i");
function displayfriend() {
  const friendman1 = document.querySelector(".friendman1");
  const friendman2 = document.querySelector(".friendman2");
  if (friendArrow.className === "fas fa-chevron-up") {
    friendman1.className = "friendman1 hidden";
    friendman2.className = "friendman2 hidden";
  } else {
    friendman1.className = "friendman1";
    friendman2.className = "friendman2";
  }
}
function changearrow() {
  if (friendArrow.className === "fas fa-chevron-up") {
    friendArrow.className = "fas fa-chevron-down";
  } else if (friendArrow.className === "fas fa-chevron-down") {
    friendArrow.className = "fas fa-chevron-up";
  }
  displayfriend();
}
displayfriend();
friendArrow.addEventListener("click", changearrow);
