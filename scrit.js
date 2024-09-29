
let btn1=document.querySelector("#moon")
let btn2=document.querySelector("#sun")
let b=document.querySelector(".brightness")
let body=document.querySelector("body")
let hamberg=document.querySelector("#hambrg")
let close=document.querySelector("#xi")
let sidebar=document.querySelector(".sidebar")
let icon=document.querySelector(".icon")
btn1.remove()
b.addEventListener("click",()=>{
   
   if(body.classList.toggle("white")){
       btn2.remove()
       b.append(btn1)} 
   else{
        btn1.remove()
       b.append(btn2)
           } })
sidebar.remove() 
close.remove()
hamberg.addEventListener("click",()=>{
   body.append(sidebar)
   hamberg.remove()
   icon.append(close)})
close.addEventListener("click",()=>{
   sidebar.remove(sidebar)
   icon.append(hamberg)
   close.remove()
})



document.addEventListener("DOMContentLoaded", () => {
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll(".home-link");

   navLinks.forEach(link => {
       link.addEventListener("click", (e) => {
           e.preventDefault(); // Prevent default anchor click behavior
           
           // Get the target section
           const targetId = e.target.getAttribute("href");
           const targetSection = document.querySelector(targetId);

           // Hide all sections and show the target section
           sections.forEach(section => {
               if (section === targetSection) {
                   section.classList.remove("hidden");
                   section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                   setTimeout(() => {
                     section.scrollIntoView({ behavior: "smooth" });
                 }, 100);  }  else {
                   section.classList.add("hidden");
               }
           });
       });
   });
});


