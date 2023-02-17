

const digital = document.querySelector(".services_container")
digital.addEventListener("click", () => {
    document.querySelector(".header").innerText = "Digital Creating Trends";
    const span = document.querySelector(".change").innerText = "Changes";
    document.querySelector("span").classList.remove('color_2')
    document.querySelector("span").classList.remove('color_3')
    document.querySelector('.para').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, fugit magni delectus est saepe iste. Quos tempora eaque, quis numquam voluptatibus nisi magni rem non facere, neque, velit eum deserunt sequi dolor eius aliquid reprehenderit!"
    document.querySelector(".one").innerText = "01."
    const semi_circle = document.querySelector(".semi_circle_right")
    semi_circle.style.backgroundColor = "#F94A29"
    document.querySelector(".side_bar").style.backgroundColor = "#F94A29"
    document.querySelector(".signin").style.backgroundColor = "#F94A29"
    document.querySelector(".our_services").style.backgroundColor = "#F94A29"
})

const beyond = document.querySelector(".beyond_consulting")
beyond.addEventListener('click', () => {
    document.querySelector(".header").innerText = "Beyond Consulting";
    const span = document.querySelector(".change").innerText = "Team"
    document.querySelector("span").classList.add('color_2')
    document.querySelector("span").classList.remove('color_3')
    document.querySelector('.para').innerHTML = "sit amet consectetur adipisicing elit. Molestiassuscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda harum aliquam molestiae, iure ad quod. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    document.querySelector(".one").innerText = "02."
    const semi_circle = document.querySelector(".semi_circle_right")
    semi_circle.style.backgroundColor = "#BDCDD6"
    document.querySelector(".side_bar").style.backgroundColor = "#BDCDD6"
    document.querySelector(".signin").style.backgroundColor = "#BDCDD6"
    document.querySelector(".our_services").style.backgroundColor = "#BDCDD6"
})

const graphic = document.querySelector(".graphic_design")
graphic.addEventListener('click', () => {
    document.querySelector(".header").innerText = "Graphic Design";
    const span = document.querySelector(".change").innerText = "Design"
    document.querySelector("span").classList.add('color_3')
    document.querySelector("span").classList.remove('color_2')
    document.querySelector('.para').innerHTML = "dolor sit amet consectetur adipisicing elit. Quo, fugit magni delectus est saepe iste. Quos tempora eaque consectetur adipisicing elit.Assumenda harum aliquam molestiae, iure ad quod. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    document.querySelector(".one").innerText = "03."
    const semi_circle = document.querySelector(".semi_circle_right")
    semi_circle.style.backgroundColor = "#495579"
    document.querySelector(".side_bar").style.backgroundColor = "#495579"
    document.querySelector(".signin").style.backgroundColor = "#495579"
    document.querySelector(".our_services").style.backgroundColor = "#495579"
})

const burger = document.querySelector(".burger")
burger.addEventListener('click', () => {
    const nav = document.querySelector("nav")
    const ul = document.querySelector("ul")

    nav.classList.toggle("visibility-resp")
    nav.classList.toggle("height_resp")

    burger.classList.toggle("line_display")

})

const li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    const a = li[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function () {
        // target = this.getAttribute('href').split('#')[1]
        // document.querySelector("#" + target)
        const nav = document.querySelector("nav")
        const ul = document.querySelector("ul")

        nav.classList.toggle("visibility-resp")
        nav.classList.toggle("height_resp")

        burger.classList.toggle("line_display")
        
    })
}

