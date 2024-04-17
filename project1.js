document.querySelectorAll('.nav-link-modal-skills').forEach(button => {
    button.addEventListener('click', toggleModal);
});

document.querySelectorAll('.nav-link-modal-exp').forEach(button => {
    button.addEventListener('click', toggleModal);
});

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modalSkill').classList.toggle('open');
}

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modalExp').classList.toggle('open');
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
                                 <button class="project1-button" data-id="${exp.id}">Select Project</button>
                            </div>`
        })
    })

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
                                 <button class="project1-button" data-id="${skills.id}">Select Project</button>
                            </div>`
        })
    })

    fetch('projects.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((project) => {
            document.querySelector(".projects").innerHTML += `
                            <div class='projectBox'>
                                 <h1>${project.Title}</h1>
                               <p>${project.Description}</p>
                                <img src="${project.image}">
                             <a href="${project.url}"></a>
                                 <button class="project1-button" data-id="${project.id}">Select Project</button>
                            </div>`
        })
    })



// document.querySelectorAll('.project1-button').forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.dataset.id)
//     })
// })







