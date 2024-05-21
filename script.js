document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    const category1Cards = [
        { title: 'Mobile App', price: 'From: $520', image: './images/cards/3.png', description: 'Develop a custom mobile app tailored to your business needs. Includes intuitive UI/UX design, cross-platform compatibility, and ongoing support.<br><br>Watch a demo:<br><a href="https://samifalouti.github.io/CinqcinqAppDownload/" target="_blank">https://samifalouti.github.io/CinqcinqAppDownload/</a>' },
        { title: 'Website', price: 'From: $120', image: './images/cards/4.png', description: 'Create a professional and responsive website. Perfect for showcasing your business, providing information, and engaging with customers.<br><br>Watch a demo:<br><a href="https://tiktrands.com/" target="_blank">https://tiktrands.com/</a>' },
        { title: 'Digital Menu', price: 'From: $150', image: './images/cards/5.png', description: 'Design a digital menu for your restaurant or cafe. Easy to update and visually appealing, helping you attract and inform customers.<br><br>Watch a demo:<br><a href="https://samifalouti.github.io/DigitalMenu2/" target="_blank">https://samifalouti.github.io/DigitalMenu2/</a>' },
        { title: 'Landing Page', price: 'From: $150', image: './images/cards/6.png', description: 'Build a high-converting landing page. Ideal for marketing campaigns, product launches, and lead generation with optimized design.' },
        { title: 'Desktop Application', price: 'From: $300', image: './images/cards/7.png', description: 'Develop a robust desktop application. Suitable for complex business processes, with a user-friendly interface and seamless performance.' },
        { title: 'E-Commerce Store', price: 'From: $300', image: './images/cards/8.png', description: 'Set up a fully functional e-commerce store. Includes product listings, shopping cart, payment gateway integration, and secure transactions.' },
    ];

    const category2Cards = [
        {
            title: 'UI UX Design',
            image: './images/cards/11.png',
            price: 'From: $60',
            description: `Basic Package: $60 per page
                          ⏰ Delivery Time: 2 Days
                          3 pages/screens
                          Responsive design
                          Wireframes
                          Include source file
                          1 custom asset
                          1 revision.
                          ------------------
                          Standard Package: $110 per page
                          ⏰ Delivery Time: 5 Days
                          7 pages/screens
                          Responsive design
                          Wireframes
                          Include source file
                          1 custom asset
                          4 revisions.
                          ------------------
                          Premium Package: $160 per page
                          ⏰ Delivery Time: 10 Days
                          14 pages/screens
                          Responsive design
                          Wireframes
                          Include source file
                          1 custom asset
                          Unlimited revisions.
                          ------------------
                          ⏰ Fast Delivery: 1 Day = $12
                          + Screen = $20`
        },
        { title: 'Logo Design', price: 'From: $20', image: './images/cards/1.png', description: 'Create a unique and memorable logo for your brand. Professional designs that effectively represent your business identity.' },
        { title: 'Branding', price: 'From: $110', image: './images/cards/2.png', description: 'Comprehensive branding services to establish a cohesive and compelling brand image. Includes logo, color scheme, typography, and brand guidelines.' },
        { title: 'Business Card', price: 'From: $10', image: './images/cards/12.png', description: 'Design a professional business card that leaves a lasting impression. High-quality designs that reflect your brand’s identity and values.' },
    ];

    const category3Cards = [
        { title: 'Article Writing', price: 'From: $30', image: './images/cards/13.png', description: 'High-quality article writing services for blogs, websites, and publications. Engaging and well-researched content tailored to your needs.' },
        { title: 'Copywriting', price: 'From: $50', image: './images/cards/14.png', description: 'Professional copywriting services to create compelling and persuasive content for ads, websites, and marketing materials.' },
        { title: 'Technical Writing', price: 'From: $40', image: './images/cards/15.png', description: 'Clear and concise technical writing for manuals, guides, and documentation. Expertly crafted to communicate complex information effectively.' },
        { title: 'Translation Services', price: 'From: $20 / 500 words', image: './images/cards/16.png', description: `Accurate and reliable translation services for various languages. Professional translations for documents, websites, and marketing materials.<br><br>Arabic To Deutsch<br>Arabic To English<br>Arabic To French<br>Arabic To Spanich<br>Deutsch To English<br>Deutsch To French<br>Deutsch To Spanich<br>English To French<br>English To Spanich` },
        { title: 'Proofreading & Editing', price: 'From: $25', image: './images/cards/17.png', description: 'Comprehensive proofreading and editing services to ensure your content is error-free and polished. Improve clarity, coherence, and readability.' },
        { title: 'Creative Writing', price: 'From: $35', image: './images/cards/18.png', description: 'Unique and imaginative creative writing services for stories, scripts, and more. Bring your ideas to life with engaging and original content.' }
    ];

    const category4Cards = [
        { title: 'Video Editing', price: 'From: $100', image: './images/cards/9.png', description: 'Professional video editing services to create engaging and polished videos. Includes cutting, transitions, effects, and color correction.' },
        { title: 'Video Animation', price: 'From: $100', image: './images/cards/10.png', description: 'High-quality video animation services for explainer videos, intros, and promotional content. Includes 2D and 3D animation options.' },
    ];

    function createCards(category, cardsData) {
        const cardsContainer = category.querySelector('.cards');
        cardsData.forEach(cardData => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${cardData.image}" alt="${cardData.title}" text="${cardData.price}">
                <h3>${cardData.title}</h3>
                <p>${cardData.price}</p>
            `;
            cardsContainer.appendChild(card);

            card.addEventListener('click', () => {
                displayPopup(cardData);
            });
        });
    }

    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupPrice = document.getElementById('popup-price');
    const popupDescription = document.getElementById('popup-description');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function displayPopup(cardData) {
        popupImage.src = cardData.image;
        popupTitle.textContent = cardData.title;
        popupPrice.textContent = cardData.price;
        popupDescription.innerHTML = cardData.description.replace(/\n/g, '<br>');

        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        overlay.addEventListener('click', closePopup);
    }

    function closePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
        overlay.removeEventListener('click', closePopup);
    }

    document.querySelector('.close').addEventListener('click', closePopup);
    createCards(categories[0], category1Cards);
    createCards(categories[1], category2Cards);
    createCards(categories[2], category3Cards);
    createCards(categories[3], category4Cards);

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '&#8679;';
    scrollToTopBtn.classList.add('scrollToTopBtn');
    scrollToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.backgroundColor = '#320fde';
    scrollToTopBtn.style.color = '#fff';
    scrollToTopBtn.style.width = '40px';
    scrollToTopBtn.style.height = '40px';
    scrollToTopBtn.style.borderRadius = '100%';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.fontSize = '20px';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const comingSoonContainers = document.querySelectorAll('.coming-soon-container');

    comingSoonContainers.forEach(container => {
        const comingSoonText = document.createElement('span');
        comingSoonText.textContent = "";
        comingSoonText.classList.add('coming-soon-text');

        const dot = document.createElement('span');
        dot.textContent = "Coming soon...";
        dot.classList.add('dot');

        comingSoonText.appendChild(dot);
        container.appendChild(comingSoonText);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const brancheSelect = document.getElementById('branche');
    const brancheSearchInput = document.getElementById('brancheSearch');
    const options = [...brancheSelect.options];
    
    brancheSearchInput.addEventListener('input', function () {
        const searchText = brancheSearchInput.value.toLowerCase();
        
        options.forEach(option => {
            const optionText = option.textContent.toLowerCase();
            if (optionText.includes(searchText)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
        $(document).ready(function() {
            $('#branche').select2();
        });
        
    });
});

function playVideo() {
    var frame = document.getElementById("frame");
    var img = document.getElementById("frame-img");
    var video = document.getElementById("video");

    // Hide the image
    img.style.display = "none";
    video.style.width = "100%";
    video.style.display = "block";

    // Start playing the video
    video.play();
}
