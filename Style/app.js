//set màu nền
let dark = document.querySelector(".moon-icon");
dark.onclick = () => {
  if (dark.classList.contains("bx-moon")) {
    dark.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    dark.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};
// đổi ảnh
function slider(picture) {
  document.querySelector(".pic-img").src = picture;
}
// XOay ảnh
const img = document.querySelector(".pic-img");
console.log(img);
let turn = 0;
setInterval(() => {
  turn++;
  img.style.transform = "rorate(" + turn + "deg)";
  img.style.transform = `rotate(${turn}deg)`;
}, 80);
