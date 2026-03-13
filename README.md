# Laundry Wallah 🧺

A simple and user-friendly **Laundry Service Web Application** that allows users to explore laundry services, add services to a cart, and book appointments online. When a booking is made, a confirmation email is sent using **EmailJS**.

## 🌐 Live Demo

👉 https://sanmithsj1103.github.io/laundry-wallah/

---

## 📌 Project Overview

This project was built as part of a web development assignment.
The aim was to design a **clean and interactive laundry service website** where users can:

* Browse available laundry services
* Add services to a cart
* View the total cost
* Enter booking details
* Receive a booking confirmation via email

The application focuses on **simple UI design, JavaScript interactivity, and email integration**.

---

## ✨ Features

### Navigation Bar

* Responsive navigation menu
* Links for **Home, Services, About Us, Contact Us**
* Logo and username section

### Hero Section

* Introduction to the laundry service
* Service description
* **"Book a Service Today"** call-to-action button

### Achievements Section

Displays key service highlights:

* **15+ Laundry Services**
* **240+ Happy Customers**
* **2+ Years of Experience**

### Service Booking System

Users can:

* Browse laundry services
* Add services to the cart
* Skip services
* View selected services in a table
* See the **total booking amount**

### Booking Form

Users enter:

* Full Name
* Email ID
* Phone Number

After clicking **Book Now**, the order details are sent via **EmailJS**.

### Quality Description Section

Highlights the key strengths of the service:

* Premium Services
* Quick Support
* Hassle-Free Delivery
* Affordable Prices

### Newsletter Subscription

Allows users to subscribe with their name and email to stay updated.

### Footer

Includes:

* Brand Logo
* Important Links
* Contact Information
* Social Media Links

---

## 🛠 Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Interactivity and cart logic
* **EmailJS** – Sending booking confirmation emails
* **GitHub Pages** – Hosting the project online

---

## 📂 Project Structure

```
laundry-wallah
│
├── index.html
├── styles.css
├── script.js
├── images
│   ├── hero-img.jpeg
│   ├── dry-cleaning.webp
│   ├── wash-iron.jpeg
│   ├── laundry.jpeg
│   └── ...
└── README.md
```

---

## ⚙️ How the Booking System Works

1. User browses available services.
2. Clicks **Add Item** to add a service to the cart.
3. Selected services appear in the **Added Items table**.
4. The **total amount** updates automatically.
5. User fills in booking details.
6. When **Book Now** is clicked:

   * Order details are collected
   * EmailJS sends a confirmation email
   * A success message is displayed.

---

## 📧 EmailJS Integration

EmailJS is used to send booking details directly to an email address without needing a backend server.

The email contains:

* Customer name
* Customer email
* Phone number
* Selected services
* Total amount

---

## 🚀 Future Improvements

Possible improvements for this project:

* Remove items from the cart
* Add quantity for each service
* Improve mobile responsiveness
* Add login/signup system
* Store bookings in a database

---

## 👨‍💻 Author

**Sanmith S Joseph**
First Year Engineering Student

GitHub:
https://github.com/sanmithsj1103

---

## 📜 License

This project is created for **educational purposes**.
