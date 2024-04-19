fetch('exp.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.data.forEach((exp) => {
            document.querySelector(".exp").innerHTML += `
                <div class='experience'>
                    <h1>${exp.Role}</h1>
                    <p>${exp.Where}</p>
                    <p>${exp.When}</p>
                    <p>${exp.Responsibilities}</p>
                </div>`
        })
    })

fetch('skills.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.data.forEach((skills) => {
            document.querySelector(".skill").innerHTML += `
                <div class='skills'>
                    <h1>${skills.Skill}</h1>
                    <p>${skills.Achieved}</p>
                    <p>${skills.Where}</p>
                    <p>${skills.When}</p>
                </div>`
        })
    })





