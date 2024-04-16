document.querySelectorAll('.nav-link-modal').forEach(button => {
    button.addEventListener('click', toggleModal);
});

// const closeIcon = document.querySelector('.fa-window-close.nav-link-modal');
// closeIcon.addEventListener('click', window.close);

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open');
}
