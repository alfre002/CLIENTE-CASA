fetch("https://www.el-tiempo.net/api/json/v2/home")
.then(res=> console.log(res.json()))
.catch(error => console.error("ERROR: "+error));

const header = document.querySelector('header');
const section = document.getElementById('cuadro-tiempo');
const bToday = document.getElementById('today');
const bTomorrow = document.getElementById('tomorrow');

const showCities = (jsonObj) =>{
    const cities = jsonObj['ciudades'];

    for ( let i = 0 ; i < cities.length ; i++ ){
        const article = document.createElement('article');
        article.className='provincia';
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        
        h2.textContent = cities[i].name;
        article.appendChild(h2);

        const weather = cities[i].stateSky;
        for ( let j = 0 ; j < Object.keys(weather).length ; j++ ){
            p.textContent = weather.description;
            article.appendChild(p);
        }
       section.appendChild(article);
    }
}

const showToday = (jsonObj) =>{
    const today = jsonObj['today'].p;
    console.log(today);
    const article = document.createElement('article');

    for ( let i = 0 ; i < today.length ; i++ ){
        const p = document.createElement('p');
        p.textContent = today[i];
        article.appendChild(p);
    }

    bToday.insertAdjacentElement("afterend", article);
}

const showTomorrow = (jsonObj) =>{
    const tomorrow = jsonObj['tomorrow'].p;
    console.log(tomorrow);
    console.log(tomorrow);
    const article = document.createElement('article');

    for ( let i = 0 ; i < tomorrow.length ; i++ ){
        const p = document.createElement('p');
        p.textContent = tomorrow[i];
        article.appendChild(p);
    }

    bTomorrow.insertAdjacentElement("afterend", article);
}

fetch("https://www.el-tiempo.net/api/json/v2/home")
.then(res=> res.json())
.then(json=>{
    showCities(json);
    bToday.addEventListener("click", function(){
        showToday(json);
        bToday.disabled=true;
    });
    bTomorrow.addEventListener("click", function(){
        showTomorrow(json);
        bTomorrow.disabled=true;
    });
})
.catch(error => console.error("ERROR: "+error));