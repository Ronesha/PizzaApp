// Order Btn Event Listener

let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
   
      //1. the values from the box form 
       let size = document.querySelector('.size').value;
       let style = document.querySelector('.style').value;
       let crust = document.querySelector('.crust').value;
       let quantity = document.querySelector('.quantity').value;

        //2. create an object
       const order = new Pizza(size, style, crust, quantity, total);
       console.log(order);

        //3. Display Order in box 2

        const ui = new UI;
        //add to order
        ui.AddPizzaToOrder(order);
  
  })

       //Modal Event Listeners

      //Click Button
      let modalBtn = document.querySelector('#view');
      modalBtn.addEventListener('click', openModal);

      

    //Click on Window to close Modal
    window.addEventListener('click', outsideClick);

    
    //Click No button or X
    let No = document.getElementById('cancelInfo');
    let close = document.querySelector('.closeBtn');
    close.addEventListener('click', closeModal);
    No.addEventListener('click', closeModal);



//UI

function UI() {}

// prototype of UI. Name of prototype is AddPizza To Order

UI.prototype.AddPizzaToOrder = function(order){
  const list = document.querySelector('#fullList');
  const content = document.createElement('ul');

      content.innerHTML  = `
     <li>${order.size}</li>
     <li>${order.style}</li>
     <li>${order.crust}</li>
     <li> Number of pizzas:${order.quantity}</li>
     <li> Total Price:<i class="fas fa-dollar-sign"></i>${order.total}</li>
   `

    list.appendChild(content);
    
}



//Pizza Object Constructor//


function Pizza(size, style, crust, quantity, total) {
  
  this.size = size;
  this.style = style;
  this.crust = crust;
  this.quantity = quantity;
  this.total = quantity * 12;
 
   
 }




//Modal//

var modal = document.getElementById('simpleModal');


function openModal() {
  modal.style.display = 'block';
}

//function close

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if(e.target == modal){
  modal.style.display = 'none';
}}




//Calculations for total