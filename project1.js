document.querySelectorAll('.nav-link-modal-skills').forEach(button => {
    button.addEventListener('click', toggleModal);
});

// const closeIcon = document.querySelector('.fa-window-close.nav-link-modal');
// closeIcon.addEventListener('click', window.close);

document.querySelectorAll('.nav-link-modal-exp').forEach(button => {
    button.addEventListener('click', toggleModal);
});

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open');
}
