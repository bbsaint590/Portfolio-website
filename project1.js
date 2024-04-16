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

document.querySelectorAll('.project1-button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.id)
    })
})

fetch('projects.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.data.forEach((project) => {
            document.querySelector('#project1').innerHTML += `
                <div>
                    <h1>${project.Title}</h1>
                    <p>${project.Description}</p>
                    <p>${project.image}</p>
                    <p>${project.url}</p>
                    <button class="project1-button" data-id="${project.id}">Select Project</button>
                </div>
            `;
        });
    });
