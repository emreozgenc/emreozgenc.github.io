const getProjects = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://emreozgenc.github.io/data/projects.json', true);
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            renderProjects(xhttp.responseText);
        }
    }
    xhttp.send();
}

const renderProjects = (projects) => {

    var jProjects = JSON.parse(projects);
    var list = document.getElementById('projects-container');

    for(let i=0; i<jProjects.length; i++) {

        let project = jProjects[i];

        let element = `
        <div class="project">
            <a href="${project.url}" target="_blank"><img
                    class="project-img" src="${project.img}" alt=""></a>
            <div class="project-info">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-text">${project.description}</p>
            </div>
        </div>
        `
        var cont = document.createElement('div');
        cont.setAttribute('class', 'project-container');
        cont.innerHTML = element;
        list.appendChild(cont);

    }
}

getProjects();