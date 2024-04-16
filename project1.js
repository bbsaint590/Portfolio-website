document.querySelectorAll('.nav-link-modal').forEach(button => {
    button.addEventListener('click', toggleModal)
})

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open')
}