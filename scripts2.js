function openModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Qualification kartları için açılır-kapanır özelliği
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.qualification-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const toggleBtn = card.querySelector('.toggle-btn i');
        
        // Başlangıçta içeriği göster
        content.style.maxHeight = content.scrollHeight + "px";
        
        header.addEventListener('click', () => {
            const isCollapsed = content.style.maxHeight !== "0px";
            
            // İçeriği aç/kapat
            content.style.maxHeight = isCollapsed ? "0px" : content.scrollHeight + "px";
            
            // Butonu döndür
            toggleBtn.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
            
            // Başlık rengini değiştir (opsiyonel)
            header.style.opacity = isCollapsed ? '0.9' : '1';
        });
    });
});

// Sayfa yüklendiğinde tüm kartları açık başlat
window.onload = function() {
    document.querySelectorAll('.card-content').forEach(content => {
        content.style.maxHeight = content.scrollHeight + "px";
    });
};

// Açılır-kapanır özelliği için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.qualification-card');
            const content = card.querySelector('.card-content');
            const toggleBtn = this.querySelector('.toggle-btn i');
            
            // İçeriği aç/kapat
            content.classList.toggle('collapsed');
            
            // Buton ikonunu döndür
            toggleBtn.style.transform = content.classList.contains('collapsed') 
                ? 'rotate(180deg)' 
                : 'rotate(0deg)';
        });
    });
});

// Scroll durumunda navbar değişimi
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // 100px scroll sonrası değişim
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobil Menü İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = mobileMenuBtn.querySelector('.fa-bars');
    const closeIcon = mobileMenuBtn.querySelector('.fa-times');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Menü açıkken ikonları güncelle
        if (navMenu.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            closeIcon.style.color = 'white';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        }
    });

    // Menü linklerine tıklandığında menüyü kapat
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        });
    });

    // Sayfa dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        }
    });
});

// Scroll olayında navbar'ın görünümünü değiştir
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Sayfa yüklendiğinde smooth scroll'u etkinleştir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobil görünüm için sertifika ve workshop düzeni
document.addEventListener('DOMContentLoaded', function() {
    const certificateList = document.querySelector('.certificate-list');
    const workshopList = document.querySelector('.workshop-list');
    
    function updateLayout() {
        if (window.innerWidth <= 768) {
            // Mobil görünüm
            if (certificateList) {
                certificateList.style.display = 'grid';
                certificateList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                certificateList.style.gap = '0.8rem';
            }
            
            if (workshopList) {
                workshopList.style.display = 'grid';
                workshopList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                workshopList.style.gap = '0.8rem';
            }
        } else {
            // Masaüstü görünüm
            if (certificateList) {
                certificateList.style.display = 'flex';
                certificateList.style.flexDirection = 'column';
                certificateList.style.gap = '1rem';
            }
            
            if (workshopList) {
                workshopList.style.display = 'flex';
                workshopList.style.flexDirection = 'column';
                workshopList.style.gap = '1rem';
            }
        }
    }

    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde düzeni güncelle
    window.addEventListener('resize', updateLayout);
    updateLayout();
});

// İletişim bölümünü ekran boyutuna göre göster/gizle
function toggleContactSection() {
    const contactSection = document.querySelector('.contact-section');
    const contactItems = document.querySelectorAll('.contact-item');
    const sectionTitle = document.querySelector('.section-title');
    
    if (window.innerWidth <= 768) {
        // Mobil görünümde sadece çalışma saatleri kartını göster
        if (contactItems) {
            contactItems.forEach(item => {
                const icon = item.querySelector('.contact-icon i');
                if (icon && icon.classList.contains('fa-clock')) {
                    item.style.display = 'block';
                    item.style.margin = '1rem auto';
                    item.style.maxWidth = '100%';
                    item.style.padding = '1rem';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        // Başlığı değiştir
        if (sectionTitle) {
            sectionTitle.textContent = 'Çalışma Saatleri';
        }
    } else {
        // Masaüstü görünümde hepsini göster
        if (contactItems) {
            contactItems.forEach(item => {
                item.style.display = 'block';
                item.style.margin = '0';
                item.style.maxWidth = 'none';
                item.style.padding = '2.5rem 2rem';
            });
        }
        // Başlığı geri al
        if (sectionTitle) {
            sectionTitle.textContent = 'İletişim';
        }
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde çalıştır
document.addEventListener('DOMContentLoaded', toggleContactSection);
window.addEventListener('resize', toggleContactSection);
