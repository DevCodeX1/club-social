// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");


// MESSAGES
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


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
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})

// ===========================MESSAGES============================

// Searches Chat Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
       let name = chat.querySelector("h5").textContent.toLowerCase();
    });
};


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

