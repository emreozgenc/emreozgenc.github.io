const getProjects = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
        if(this.readyState == 4 && this.status == 200) {
            handleProject(xhttp.responseText);
        }
    }
    xhttp.open('GET', '../data/projects.json', true);
    xhttp.send();
}

const handleProject = (projects) => {

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