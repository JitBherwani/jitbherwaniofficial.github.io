const productImage = document.querySelectorAll(".product-image img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;
productImage.forEach((item,i)=>{
    item.addEventListener('click', ()=>{
        productImage[activeImageSlide].classList.remove('active')
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url(${item.src})`;
        activeImageSlide = i;
    })

})

const sizeBtn = document.querySelectorAll('.class-radio-btn')
let checkedBtn = 0;

sizeBtn.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        sizeBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})