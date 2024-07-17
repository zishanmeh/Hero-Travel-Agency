const menuIcon = document.getElementById("menuIcon");
const navItems = document.getElementById("navItems");

menuIcon.addEventListener("click" , ()=>{
    if(navItems.classList.contains("hide")){
        navItems.classList.remove("hide")
        navItems.classList.add("show-nav-item")
    }else {
        navItems.classList.add("hide")
    }
})
