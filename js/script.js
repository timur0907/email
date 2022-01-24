const burgerMenu = document.querySelector('.burger');
if (burgerMenu){
    const burgerBody = document.querySelector('.burger__menu');
    burgerMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
    });
}