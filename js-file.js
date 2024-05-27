
const apiUrl = `https://api.sampleapis.com/coffee/hot`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        // console.log(typeof repodata
        // Step 2: Display Repositories in List
        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');

        for (const item of data) {
            const project = document.createElement('li');
            project.innerText = item.title;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('Error fetching the repos:', error);
        const projectSection = document.getElementById('Projects');
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 
        `There was an error fetching the repositories. Please try again later. \n
        ==> ${error}`;
        projectSection.appendChild(errorMessage);
    });