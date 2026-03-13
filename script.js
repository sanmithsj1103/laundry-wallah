(function(){
    emailjs.init("IZEb1_h2W9K57HF8t");
})();

const services = [
    {id: 1,  name: "Dry Cleaning",    price: 200, img: "./images/dry-cleaning.webp" },
    {id: 2,  name: "Wash & Iron",     price: 150, img: "./images/wash-iron.jpeg" },
    {id: 3,  name: "Laundry",         price: 100, img: "./images/laundry.jpeg" },
    {id: 4,  name: "Stain Removal",   price: 180, img: "./images/stain-removal.jpeg" },
    {id: 5,  name: "Shoe Cleaning",   price: 250, img: "./images/shoe-cleaning.jpeg" },
    {id: 6,  name: "Carpet Cleaning", price: 350, img: "./images/carpet-cleaning.jpeg" },
    {id: 7,  name: "Curtain Washing", price: 300, img: "./images/curtain-washing.avif" },
    {id: 8,  name: "Bedsheet Laundry",price: 120, img: "./images/bedsheet-laundry.jpeg" },
    {id: 9,  name: "Ironing Only",    price: 80,  img: "./images/ironing.avif" },
    {id: 10, name: "Sofa Cleaning",   price: 500, img: "./images/sofa-cleaning.jpeg" },
];


let cart = [];
let cur_index = 0;

function displayService(index){
    let loopIndex = index % services.length;
    let s = services[loopIndex];
    let serviceContainer = document.getElementById('service-container');
    serviceContainer.innerHTML= `
        <div class="service-card">
            <img class="img-placeholder" src="${s.img}" alt="${s.name}"/>
            <div class="service-info">
                <p>${s.name}</p>
                <p>₹ ${s.price}.00</p>
            </div>
            <div class="service-btns">
                <button class="skip-btn" onclick="skipItem()">- Skip Item</button>
                <button class="add-btn" onclick="addItem(${s.id})">+ Add Item</button>
            </div>
        </div>
    `;
}

let skipItem = () => displayService(++cur_index);

function addItem(id){
    let service = services.find(s => s.id==id);
    let alreadyAdded = cart.find(s => s.id==id);
    if(!alreadyAdded){
        cart.push(service);
        updateCart();
    }
    displayService(++cur_index);
}

function updateCart(){
    let cartItems = document.getElementById('cart-body');
    let emptyCart = document.getElementById('empty-cart');
    let totalAmtount = document.getElementById('total-amount');

    if(cart.length == 0){
        cartItems.innerHTML = "";
        emptyCart.style.display = "block";
        totalAmtount.innerText = '₹ 0';
        return;
    }

    emptyCart.style.display = "none";
    cartItems.innerHTML = "";
    let total = 0;
    for(let i=0; i<cart.length; i++){
        item = cart[i];
        total += item.price;
        totalAmtount.innerText = `₹ ${total}`;
    }
    cartItems.innerHTML = cart.map((item) =>`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>₹ ${item.price}</td>
            </tr>
        `).join("");
}

function bookNow(){
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const totalAmtount = document.getElementById('total-amount').innerText;
    const alert = document.getElementById("alert");
    if(!name || !email || !phone){
        alert.innerText = "Please fill in all the details!!!";
        return;
    }
    if(cart.length === 0){
        alert.innerHTML = "Please add at least one service to your cart.";
        return;
    }

    emailjs.send("service_29s6wmi", "template_q98gk5w",{
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        order_details: cart.map(item => `${item.name} (₹ ${item.price})`).join(", "),
        total_amount: totalAmtount,
    })
    .then(function(){
        alert.style.color = "green";
        alert.innerText = "Thank you for Booking the service we will get back to you soon!!";
    })
    .catch(function(error){
        alert.style.color = "red";
        alert.innerText = "Something went wrong. Please try again later.";
    });
}

displayService(cur_index);