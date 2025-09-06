// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navbar = document.querySelector('.navbar-nav');
    const navbarContainer = document.querySelector('.navbar .container');
    navbarContainer.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
        menuToggle.innerHTML = navbar.classList.contains('show') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Tab functionality for due dates
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dueDateContents = document.querySelectorAll('.due-date-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Simple content switching (you can expand this)
            const target = this.textContent.trim();
            if (target === 'Dec 2023') {
                document.querySelector('.due-date-content').innerHTML = `
                    <div class="due-date-item">
                        <span class="date">20 Dec</span>
                        <span class="desc">GSTR-1 for November 2023</span>
                    </div>
                    <div class="due-date-item">
                        <span class="date">25 Dec</span>
                        <span class="desc">TDS Payment for December 2023</span>
                    </div>
                    <div class="due-date-item">
                        <span class="date">31 Dec</span>
                        <span class="desc">GSTR-3B for November 2023</span>
                    </div>
                `;
            } else if (target === 'Jan 2024') {
                document.querySelector('.due-date-content').innerHTML = `
                    <div class="due-date-item">
                        <span class="date">10 Jan</span>
                        <span class="desc">GSTR-1 for December 2023</span>
                    </div>
                    <div class="due-date-item">
                        <span class="date">20 Jan</span>
                        <span class="desc">TDS Payment for January 2024</span>
                    </div>
                    <div class="due-date-item">
                        <span class="date">31 Jan</span>
                        <span class="desc">GSTR-3B for December 2023</span>
                    </div>
                `;
            }
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                alert('Please enter your name');
                isValid = false;
            } else if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address');
                isValid = false;
            } else if (!messageInput.value.trim()) {
                alert('Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                alert('Thank you for your message. We will contact you shortly.');
                this.reset();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});