// Footer js

document.querySelector('.developers-info').addEventListener('click', function() {
    document.getElementById('modal-window-footer').style.display = 'block';
});

document.getElementById('modal-window-footer').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-window-footer');
    if (!modal.contains(e.target) && e.target !== document.querySelector('.developers-info')) {
        modal.style.display = 'none';
    }
});