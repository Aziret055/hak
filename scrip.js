const admin = document.querySelector(".AdminA")
const adminBlock = document.querySelector(".admin")
const menu = document.querySelector(".menu")
const orders = document.querySelector(".orders")
const ordersId = document.querySelector("#orders")
const hero = document.querySelector("#heroo")
const ordersBlock = document.querySelector(".orders-block")
const buttons = document.querySelectorAll("button")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const menuBlock = document.querySelector(".menu-n")
const create = document.querySelector(".create")
const toOrder= document.querySelector(".block-img")






create.addEventListener("click" , () => {
    ordersId.style.display = 'none'
    adminBlock.style.display = "none"
    hero.style.display = "block"
    menuBlock.style.display = 'block'
toOrder.style.display = "block"


    menuBlock.innerHTML = `
       <div class="createBlock">
       <img class="img" src=${input1.value} alt=""/>
       <h2>${input2.value}</h2>
      <div class="df">
       <h2>${input3.value}$</h2>
      </div>
       </div>
    `

 
})





toOrder.addEventListener("click" , () => {
    ordersId.style.display = 'block'
    adminBlock.style.display = "none"
    hero.style.display = "none"
    menuBlock.style.display = 'none'


  ordersBlock.innerHTML = `
       <div class="createBlock">
       <div class="df">
       <img class="img" src=${input1.value} alt=""/>
       <div className="d">
       <h2>${input2.value}</h2>
       <h2>${input3.value}$</h2>
       </div>
       <button class="delorder">deleteOrder</button>
      </div>
       </div>
    `
})








admin.addEventListener("click" , () => {
    adminBlock.style.display = "block"
    hero.style.display = "none"
    ordersId.style.display = 'none'
})

menu.addEventListener("click" , () => {
    adminBlock.style.display = "none"
    ordersId.style.display = 'none'
    hero.style.display = "block" 
})
orders.addEventListener("click" , () => {
    adminBlock.style.display = "none"
    hero.style.display = "none" 
    ordersId.style.display = 'block'
})























// buttons.forEach((btn) => {
//     btn.addEventListener("click" , () => {
//         adminBlock.style.display = "none"
//     hero.style.display = "none" 
//     ordersId.style.display = 'block'
// ordersBlock.innerHTML += `

// `
//     })
// })


