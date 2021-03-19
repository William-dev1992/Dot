var dot = document.getElementById('dot')

var movement = setInterval(() =>{
  let topCord = Math.floor(Math.random() * 90);
  let leftCord = Math.floor(Math.random() * 90);

  let widthHeight = Math.floor(Math.random() * 15);

  dot.style.top = `${topCord}%`
  dot.style.left = `${leftCord}%`

  dot.style.width = `${widthHeight}rem`
  dot.style.height = `${widthHeight}rem`
}, 400);

function moveDot() {
  let topCord = Math.floor(Math.random() * 90);
  let leftCord = Math.floor(Math.random() * 90);

  let widthHeight = Math.floor(Math.random() * 15);

  dot.style.top = `${topCord}%`
  dot.style.left = `${leftCord}%`

  dot.style.width = `${widthHeight}rem`
  dot.style.height = `${widthHeight}rem`

  console.log("teste");
}

function stop() {

  clearInterval(movement)

}