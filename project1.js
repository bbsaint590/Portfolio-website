document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => toggleModal('.modalProject'))
})

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => toggleModal('.modalProject'))
})

function toggleModal(modalName) {
    // e.preventDefault();
    document.querySelector(modalName).classList.toggle('open')
}

fetch('exp.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach((exp) => {
            document.querySelector(".Exp").innerHTML += `
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
            document.querySelector(".Skill").innerHTML += `
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
                document.querySelector(".modalProject").innerHTML += `
                <div class="descriptionBox">
                <h2>${e.target.dataset.description}</h2>
                <div class="project-links">
                <a href=${e.target.dataset.url}><i class="fa-solid fa-square-up-right"></i></a>
                <a href=${e.target.dataset.github}><i class="fa-brands fa-github"></i></a>
                </div>
                </div>
                `
                toggleModal('.modalProject')
            })
        })
    


    })
    


        
    //     document.querySelectorAll('button').forEach((button) => {
    //         button.addEventListener('click, () => {
    //             console.log(button.dataset.id) 
    //         })
    //     })
    // })

    // document.querySelectorAll('button').forEach(button => {
    //     button.addEventListener('click', () => toggleModal('.modalProject'))
    // })




      







        // data.data.forEach((project) => {
        //     document.querySelector(".modalProject").innerHTML += `
        //     <div class="modalProject">
        //     <p>${project.Description}</p>
        //     <a href="${project.url}">Live</a>
        //     <a href="${project.github}"><i class="fa-brands fa-github"></i>Github</a>
        //     </div>
        //     `;
        // });





// fetch('projects.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.data.forEach((project) => {
//             document.querySelector(".projects").innerHTML += `
//             <div class='projectBox'>
//                 <div class="title-pic">
//                     <h2>${project.Title}</h2>
//                     <img class = "pic" src="${project.image}">
//                 </div>
//                 <div class="right">
//                     <p>${project.Description}</p>
//                     <div class="project-links">
//                     <a href="${project.url}">Live</a>
//                     <a href="${project.github}"><i class="fa-brands fa-github"></i>Github</a>
//                     <button class="project-button" data-id="${project.Description.url.github}">Select Project</button>
//                     </div>
//                 </div>
//             </div>`;
//         });
//     });






