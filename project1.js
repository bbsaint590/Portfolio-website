document.querySelectorAll('.nav-link-modal-skills').forEach(button => {
    button.addEventListener('click', () => toggleModal('.modalSkill'))
})

document.querySelectorAll('.nav-link-modal-exp').forEach(button => {
    button.addEventListener('click', () => toggleModal('.modalExp'))
})

function toggleModal(modalClass) {
    document.querySelectorAll(modalClass).forEach(modal => {
        modal.classList.toggle('open')
    })
}


fetch('exp.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((exp) => {
            document.querySelector(".modalExp").innerHTML += `
                <div class='experience'>
                    <h1>${exp.Role}</h1>
                    <p>${exp.Where}</p>
                    <p>${exp.When}</p>
                    <p>${exp.Responsibilities}</p>
                </div>`;
        });
    });

fetch('skills.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((skills) => {
            document.querySelector(".modalSkill").innerHTML += `
                <div class='skills'>
                    <h1>${skills.Skill}</h1>
                    <p>${skills.Achieved}</p>
                    <p>${skills.Where}</p>
                    <p>${skills.When}</p>
                </div>`;
        });
    });

fetch('projects.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((project) => {
            document.querySelector(".projects").innerHTML += `
            <div class='projectBox'>
                <div class="title.pic>
                    <h1>${project.Title}</h1>
                    <img class = "pic" src="${project.image}">
                </div>
                <div class="right">
                    <p>${project.Description}</p>
                    <a href="${project.url}">Live</a>
                    <a href="${project.github}"><i class="fa-brands fa-github"></i>Github</a>
                </div>
            </div>`;
        });
    });




// document.querySelectorAll('.project1-button').forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.dataset.id)
//     })
// })







