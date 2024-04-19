document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => toggleModal('.modalProject'))
})

document.querySelector('.close-modal').addEventListener('click', (e) => 
toggleModal('.modalProject'))

function toggleModal(modalName) {
    document.querySelector(modalName).classList.toggle('open')
}

fetch('projects.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.data.forEach((project) => {
            document.querySelector(".projects").innerHTML += `
            <div class='projectBox'>
                <div class="title-pic">
                    <h2>${project.Title}</h2>
                </div>     
                <div>  
                <button class="project-button" data-description="${project.description}" data-url="${project.url}" data-id="${project.id}" data-github="${project.github}">
                <img class = "pic" src="${project.image}" alt="${project.alt}">
                </button>
                </div>
            `
        })
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                document.querySelector("#modal-content").innerHTML = `
                <div class="descriptionBox">
                <h2>${e.currentTarget.dataset.description}</h2>
                <div class="project-links">
                <a href=${e.currentTarget.dataset.url}><i class="fa-solid fa-square-up-right"></i></a>
                <a href=${e.currentTarget.dataset.github}><i class="fa-brands fa-github"></i></a>
                </div>
                </div>
                `
                toggleModal('.modalProject')
            })
        })
    


    })
    

      








