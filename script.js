// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");


// MESSAGES
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//==================================THEME============================
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPicker = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


// Remove active class from all menu items
const changeAvtiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeAvtiveItem();
        item.classList.add("active");
        if(item.id != 'notifications'){
            document.querySelector(".notifications-popup").
            style.display = "none";
        }else{
            document.querySelector(".notifications-popup").
            style.display = "block";
            document.querySelector("#notifications .notification-count").
            style.display = "none";
        }
    })
})

// ===========================MESSAGES============================

// Searches Chat Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = "flex";
        }else{
            chat.style.display = "none";
        }
    })
}

// Search Chat Messages
messageSearch.addEventListener("keyup", searchMessage);

// highlight message card when menu item is clicked
messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});


// ===========================THEME CUSTOM============================

//Opens the theme modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
}

theme.addEventListener("click", openThemeModal);

// Closes the theme modal
const closeThemeModal = (e) => {
    if(e.target == themeModal){
        themeModal.style.display = "none";
    }
}

themeModal.addEventListener("click", closeThemeModal);





// ===========================FONT SIZE============================

// ===========================Remove active Class============================
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}



fontSizes.forEach(size => {  
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if(size.classList.contains("font-size-1")){
        fontSize = '10px';
        root.style.setProperty("----sticky-top-left", "5.4rem");
        root.style.setProperty("----sticky-top-right", "5.4rem");
    }else if(size.classList.contains("font-size-2")){
        fontSize = '13px';
         root.style.setProperty("----sticky-top-left", "5.4rem");
        root.style.setProperty("----sticky-top-right", "-7rem");
    }else if(size.classList.contains("font-size-3")){
        fontSize = '16px';
         root.style.setProperty("----sticky-top-left", "-2rem");
        root.style.setProperty("----sticky-top-right", "-17rem");
    }else if(size.classList.contains("font-size-4")){
        fontSize = '19px';
         root.style.setProperty("----sticky-top-left", "-5rem");
        root.style.setProperty("----sticky-top-right", "-25rem");
    }else if(size.classList.contains("font-size-5")){
        fontSize = '22px';
         root.style.setProperty("----sticky-top-left", "-10rem");
        root.style.setProperty("----sticky-top-right", "-35rem");
    }

     // Change font size of the root element
    document.querySelector("html").style.fontSize = fontSize;
    });
    
   

});


// ===========================REMOVE ACTIVE CLASS============================
const changeActiveItem = () => {
    colorPicker.forEach(color => {
        color.classList.remove("active");
    })
}

// Change Primary Colors================================================
colorPicker.forEach(color => {  
    color.addEventListener("click", () => {
        let primary;
        changeActiveItem();

        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }else if(color.classList.contains("color-4")){
            primaryHue = 152;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.toggle("active");

        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});


//=====================================BACKGROUND SETTING============================
let lighColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lighColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
    lighColorLightness = "100%";
    whiteColorLightness = "0%";
    darkColorLightness = "0%";

    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
    
    
});


Bg2.addEventListener("click", () => {
    lighColorLightness = "15%";
    whiteColorLightness = "20%";
    darkColorLightness = "95%";


    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
});

Bg3.addEventListener("click", () => {
    lighColorLightness = "0%";
    whiteColorLightness = "10%";
    darkColorLightness = "95%";
    Bg3.classList.add("active");
    Bg2.classList.remove("active");
    Bg1.classList.remove("active");
    changeBG();
});

