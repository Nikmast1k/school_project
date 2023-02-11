let click_ekj = document.querySelector('.click')
let list_ekj = document.querySelector('.list')
click_ekj.addEventListener("click",()=>{
    list_ekj.classList.toggle('newlist')
})
let buttons_ekj = document.querySelectorAll('.links');
buttons_ekj.forEach(button => {
    button.addEventListener("click", () => {
        list_ekj.classList.toggle('newlist')
        console.log(`Button ${button.textContent} clicked!`)
    })
})