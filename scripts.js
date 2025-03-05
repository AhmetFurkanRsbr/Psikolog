function openModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Qualification kartları için açılır-kapanır özelliği
document.addEventListener('DOMContentLoaded', function () {
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
window.onload = function () {
    document.querySelectorAll('.card-content').forEach(content => {
        content.style.maxHeight = content.scrollHeight + "px";
    });
};

// Açılır-kapanır özelliği için JavaScript
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', function () {
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
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // 100px scroll sonrası değişim
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});