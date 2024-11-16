var button = document.createElement('button');
button.textContent = "Choose number of squares"

button.addEventListener('click', ()=> {
    var input = prompt("Enter number of squares per side for a new grid");
    
    if (input >= 100) {
        alert("please enter number less than 100")
    }
    
    else {
        for(i = 1; i <= input; i++) {
           generateSquares()
        }
    }
})
  
function generateSquares() {
    var container = document.querySelector('#container');
    container.style.display = "flex"
    container.style.flex = "1 1 200px"
    container.style.flexWrap = "wrap";
    container.style.width = "560px"
    var content = document.createElement('div');
    content.classList.add("content");

    content.setAttribute('style',"padding: 25px; margin: 5px; border: 2px solid black;");
    content.addEventListener('mouseover', ()=> {
        const ran1 = Math.floor(Math.random()*256)
        const ran2 = Math.floor(Math.random()*256)
        const ran3 = Math.floor(Math.random()*256)
        const ran = `rgb(${ran1}, ${ran2} , ${ran3})`
        content.style.backgroundColor = ran;
})
    content.addEventListener('mouseout', ()=> {
     content.style.backgroundColor = '';  
})

container.appendChild(content);
}
document.body.appendChild(button);