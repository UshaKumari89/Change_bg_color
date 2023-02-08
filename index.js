let container = document.querySelector('.container');
let divEl = document.createElement('div');
let buttonEl = document.createElement('button');
buttonEl.innerHTML= "Click Me";
buttonEl.className ="btn"
divEl.appendChild(buttonEl)
container.appendChild(divEl);



buttonEl.addEventListener('click',()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    container.style.backgroundColor = "#" + randomColor;
    let colorCode = document.querySelector("#colorCode")
    colorCode.innerHTML= "#" + randomColor;

})

