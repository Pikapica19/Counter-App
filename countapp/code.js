const count = document.querySelector(".count");
const button = document.querySelector(".btn");
// const add = document.querySelector(".add");
// const sub = document.querySelector(".sub");
// const reset = document.querySelector(".resetCount");

// add.addEventListener("click", () => {
//    count.innerHTML++;
// })

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// })

// reset.addEventListener("click", () => {
//   count.innerHTML = 0;
// })


button.addEventListener("click", (e) => {
  if(e.target.classList.contains("add"))
  {
    count.innerHTML++;
    setColor();
  }
  if(e.target.classList.contains("sub"))
  {
    count.innerHTML--;
    setColor();
  }
  if(e.target.classList.contains("resetCount"))
  {
    count.innerHTML = 0;
    setColor();
  }
})

function setColor() {
    if(count.innerHTML > 0){
      count.style.color = "yellow";
    }
    else if(count.innerHTML < 0){
      count.style.color = "red";
    }
    else{
      count.style.color = "#fff";
    }
}