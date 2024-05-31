
const apiUrl = `https://api.sampleapis.com/coffee/hot`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        
        console.log(typeof data);
        console.log(data);

        populateCoffees(data);
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

    function populateCoffees(obj) {
        const projectSection = document.getElementById('Projects');
        const coffeesDiv = projectSection.querySelector('div');

        for (const item of obj) {
            const myArticle = document.createElement('article');
            const myH3 = document.createElement('h3');
            const myPara1 = document.createElement('p');
            const myArticleImg = document.createElement('img');
            const myUl = document.createElement('ul');
            

            myH3.textContent = item.title;
            myPara1.textContent = item.description;
            myArticleImg.src = item.image;
            
            for (let i = 0; i < item.ingredients.length; i++) {
                const myLi = document.createElement('li');
                myLi.textContent = item.ingredients[i];
                myUl.appendChild(myLi);
            };
            

            myArticle.appendChild(myH3);
            myArticle.appendChild(myArticleImg);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myUl);
            coffeesDiv.appendChild(myArticle);
        }
    };