const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/img-20220324T165936Z-001/img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <ul class="category-title">men</ul>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">sweat-shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
                <li><a href="#" class="footer-link">caps</a></li>
            </ul>
            <ul class="category">
                <ul class="category-title">women</ul>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">sweat-shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
                <li><a href="#" class="footer-link">caps</a></li>
            </ul>
        </div>
    
    </div>
    <p class="footer-title">about company</p>
    <p class="info"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, neque aliquam impedit et reiciendis distinctio porro nostrum consequatur? Maxime, magnam. Impedit atque maiores reprehenderit consectetur molestias animi incidunt. Assumenda, asperiores eaque tenetur optio, numquam fugit at quae hic libero voluptas quo totam laborum necessitatibus nostrum pariatur. Alias quas incidunt blanditiis, dolorum magnam accusantium officiis tempore assumenda vitae nisi veniam quis, dolorem fuga ullam voluptatum consequatur. Quo cumque illum mollitia ad sequi officiis, corporis, architecto exercitationem blanditiis quos minus deleniti tenetur. </p>
    <p class="info">support emails - help@clothing.company, customersuppport@clothing.com </p>
    <p class="info">telephone no  - 1800 222 00 023 &acd; 1800 56 00 23</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link"> terms and services</a>
            <a href="#" class="social-link"> privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">twitter</a>
            <a href="#" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}
createFooter();