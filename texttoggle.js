async function toggletext(i) {
    var x = document.getElementById("textbox");
    const a = (`<div class="hero-banner">
    <div class="bgblur" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(2, 206, 237,0.2), rgba(2, 206, 237,0.5),rgba(2, 206, 237,1)), url(different.jpg); height:800px;"></div></div><h4>At WebTrade, we pride ourselves on being different from other online marketplaces. We have set ourselves apart by creating a platform that focuses on the needs of our users, providing them with a secure and user-friendly platform for buying and selling goods and services.

    <br><br>One of the things that sets us apart is our commitment to transparency. We believe that transparency is essential to building trust between buyers and sellers, and that's why we have implemented various measures to ensure that all transactions on our platform are safe and secure. We verify all users and their listings to ensure that buyers and sellers can trust the information provided.
    
    We also prioritize customer service at WebTrade. Our team is always available to assist our users with any questions or concerns they may have. <br><br>Whether it's through email, phone, or live chat, our customer support team is ready to help.
    
    Another thing that makes us different is our focus on community. We believe that building a strong community of buyers and sellers is essential to the success of our platform. That's why we have created various features, such as user reviews and ratings, to help build trust within our community.
    
    Lastly, we are constantly innovating and improving our platform to better serve our users.<br><br> We are always listening to feedback and suggestions from our users and using that information to make our platform better.
    
    In summary, at WebTrade, we are committed to providing a transparent, customer-focused, community-driven, and constantly improving platform for buying and selling goods and services online. We believe that these qualities set us apart and make us the premier online marketplace for all your shopping needs.</h4>`);


    const b = `<div class="hero-banner">
    <div class="bgblur" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(2, 206, 237,0.2), rgba(2, 206, 237,0.5),rgba(2, 206, 237,1)), url(experts.jpeg);"></div></div><h4>At WebTrade, we take great pride in ensuring that our users have access to the highest quality products and services. To achieve this, we have a team of trained experts who analyze and grade all products listed on our platform. 

    When a seller lists a product on our platform, our team of experts carefully examines the product to ensure that it meets our quality standards.<br><br> We analyze everything from the product's design, functionality, and durability to its price point and overall value. We use a comprehensive grading system to determine the quality of the product and assign it a rating that appears on the product page.
    
    Our grading system ranges from A to F, with A being the highest rating and F being the lowest.A product with an A rating is considered to be of the highest quality, while a product with an F rating is considered to be of the lowest quality. This system helps our users make informed decisions about the products they are considering purchasing, ensuring that they receive products that meet their expectations.
    
    Our team of experts is also available to answer any questions our users may have about the products listed on our platform.<br><br> Whether it's providing more information about a product's features or helping a user decide between two products, our team is always happy to assist.
    
    In summary, at WebTrade, we take product quality seriously. Our team of trained experts analyzes and grades all products listed on our platform, ensuring that our users have access to high-quality products that meet their expectations. With our comprehensive grading system and expert assistance, our users can shop with confidence and find the products they need quickly and easily.</h4>`
    
    
    const c = `<div class="hero-banner">
    <div class="bgblur" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(2, 206, 237,0.2), rgba(2, 206, 237,0.5),rgba(2, 206, 237,1)), url(hamsta.jpeg); background-position:0px 0px;"></div></div><h4>At WebTrade, we are always looking for talented and driven individuals to join our team. If you are passionate about e-commerce and enjoy working in a fast-paced, dynamic environment, we would love to hear from you.

    We offer a range of career opportunities across various departments, including marketing, customer service, product development, and more.<br><br> We are committed to providing a supportive and inclusive workplace where all employees can thrive and grow.
    
    Our team members are passionate about what they do and work together to achieve our mission of creating a seamless and secure platform for online commerce. We believe in investing in our employees and offer various training and development opportunities to help them grow and succeed in their roles.
    
    If you are interested in joining our team, please visit our careers page to see our current openings.<br><br> We encourage applicants of all backgrounds and experience levels to apply. At WebTrade, we are committed to diversity, equity, and inclusion and believe that a diverse workforce is essential to our success.
    
    In summary, at WebTrade, we offer exciting career opportunities and a supportive and inclusive workplace culture. If you are looking to join a dynamic team and make a difference in the e-commerce industry, we encourage you to explore our current openings and apply today.</h4>`
    x.style.transition="all 250ms";
    x.style.opacity="0";
    x.style.transform="translateY(-500px)";
    if(i==1){
        setTimeout(() =>{
            x.style.transform="translateY(0px)";
            x.innerHTML=a; x.style.opacity="1";},125);
    }
    else if(i==2){
        setTimeout(() =>{
            x.style.transform="translateY(0px)";
            x.innerHTML=c; x.style.opacity="1";},125);
    }
    else{
        setTimeout(() =>{
            x.style.transform="translateY(0px)";
            x.innerHTML=b; x.style.opacity="1";},125);
    }
  }