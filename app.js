

let pizzaPrice = document.querySelector('.price'); //view price in span tag
let viewTotal = document.querySelector('#view');  //button you press to view your total price/list 
let btn = document.querySelectorAll('.add'); //Button you press to add order(four buttons total ie cheese, pepperoni, etc)



	//event Listeners

	 
	 //values
		for(var i = 0; i < btn.length; i++) {
			 btn[i].addEventListener('click', function(e){
			 
			 var size = document.querySelectorAll('.size').value;
			 var type = 'Cheese';
			 var crust = document.querySelectorAll('.crust').value;
			 var quantity = document.querySelectorAll('.quantity').value;

				
		//Instantiate pizza

	 const cheese = new Pizza(type, size, crust, quantity, total);
				
				
			 
		 //Instantiate UI
				const ui = new UI();
			

			//add to order
			 ui.addPizzaToOrder(cheese);
 

				e.preventDefault(e);

		})}
	



//Pizza Object Constructor

function Pizza(type, size, crust, quantity, total) {
	
	this.type = type;
	this.size = size;
	this.crust = crust;
	this.quantity = quantity;
	this.total = quantity * 12;
 
	 
 }
	




//UI constructor
 
 function UI() {}


 UI.prototype.addPizzaToOrder = function(cheese){
			 const list = document.getElementById('orderList');
		 //create li
		 const content = document.createElement('ul');
		 content.innerHTML = `
			 <li>${cheese.type}</li>
			 <li>${cheese.size}</li>
			 <li>${cheese.crust}</li>
			 <li> Number of pizzas:${cheese.quantity}</li>
			 <li> Total Price:<i class="fas fa-dollar-sign"></i>${cheese.total}</li>

			`
			pizzaCart.appendChild(content);
			console.log(pizzaCart);


		 

 }








//Modal Pop up
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('submitInfo');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var checkout = document.getElementById('submitInfo');
var pizzaCart = document.getElementById('PizzaCart');


//listen for click

viewTotal.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
modalBtn.addEventListener('click', closeModal);

//window object click
window.addEventListener('click', outsideClick);

//function open

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

