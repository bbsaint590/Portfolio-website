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
                    <li>${exp.Responsibilities || ""}</li>
                    <li>${exp.Responsibilities2 || ""}</li>
                    <li>${exp.Responsibilities3 || ""}</li>
                    <li>${exp.Responsibilities4 || ""}</li>
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





