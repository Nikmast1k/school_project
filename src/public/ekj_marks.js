let click = document.querySelector('.click')
let list = document.querySelector('.list')
click.addEventListener("click",()=>{
    list.classList.toggle('newlist')
})
let buttons = document.querySelectorAll('.links');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        list.classList.toggle('newlist')
        alert(`Button ${button.textContent} clicked!`)
    })
})