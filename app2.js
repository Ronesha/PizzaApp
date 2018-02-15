/*UI */


/*What should be in this section is 1. DOM values */

let pizzaPrice = document.querySelector('.price'); //view price in span tag
let viewTotal = document.querySelector('#view');  //button you press to view your total price/list 
let cheese = document.querySelector('#cheese');
let pepperoni = document.querySelector('#pepperoni');
let MeatLovers = document.querySelector('#meat');
let supreme = document.querySelector('#supreme');
 var size = document.querySelectorAll('.size').value;
 var type;
 var crust = document.querySelectorAll('.crust').value;
 var quantity = document.querySelectorAll('.quantity').value;
 //Modal Pop up
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('submitInfo');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var checkout = document.getElementById('submitInfo');
var pizzaCart = document.getElementById('PizzaCart');
var box = document.querySelectorAll('.box')

 

 function UI() {};

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
			


		 

 








 

/* Calculations


  1. calculate price of pizza from the object
  2. calculate the total of all pizzas of each pizza object
  3. calculate tax
  4. final total









*/ 


/* Event Listener section */

   
  /* 1. Extrac the values with each option click
   2. When the add button is pressed, store pizza order object value, and add a popup modal.
   3. Click cart option on modal or dashboard to redirect to total */


   
  /*cheese ID */

  cheese.addEventListener('click', function(e) {
          type = 'cheese';
          var box = document.querySelectorAll('.box');
          size = document.querySelector('.size').value;
          crust = document.querySelector('.crust').value;
          quantity = document.querySelector('.quantity').value;
           	//Instantiate pizza
	      let chs = new Pizza(type, size, crust, quantity, total);
			
          console.log(chs);

		/*Instantiate UI*/
		const ui = new UI();
			//add to order
		 ui.addPizzaToOrder(cheese);
 				

		   e.preventDefault();
		  })


  /*pepperoni ID */

  pepperoni.addEventListener('click', function(e){
         type = 'pepperoni';
         size = document.querySelector('.size').value;
          crust = document.querySelector('.crust').value;
          quantity = document.querySelector('.quantity').value;
                	//Instantiate pizza
	 let pep = new Pizza(type, size, crust, quantity, total);
				
		/*Instantiate UI*/
		const ui = new UI();
			//add to order
		 ui.addPizzaToOrder(pepperoni);
 				e.preventDefault(e); 

          	
  })


  /*MeatLovers ID */

  MeatLovers.addEventListener('click', function(e){
        type = 'meatLovers';
        size = document.querySelector('.size').value;
         crust = document.querySelector('.crust').value;
         quantity = document.querySelector('.quantity').value;
       let meat = new Pizza(type, size, crust, quantity, total);
			

			console.log(meat);
		/*Instantiate UI */
		const ui = new UI();
			//add to order
		 ui.addPizzaToOrder(MeatLovers);
 				
      
       e.preventDefault();  
  	
  })


  /*Supreme ID */

  supreme.addEventListener('click', function(e){
       type = 'Supreme';
         size = document.querySelector('.size').value;
          crust = document.querySelector('.crust').value;
           quantity = document.querySelector('.quantity').value;
       	 let sup = new Pizza(type, size, crust, quantity, total);
			
		console.log(sup);		
		/*Instantiate UI */
		const ui = new UI();
			//add to order
		 ui.addPizzaToOrder(supreme);
 				
   e.preventDefault();
  })







/*object constructor*/


function Pizza(type, size, crust, quantity, total) {
	
	this.type = type;
	this.size = size;
	this.crust = crust;
	this.quantity = quantity;
	this.total = quantity * 12;
 
	 


 }
	




