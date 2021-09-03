const ApiKey = `fe5aaf88795553ca40742fa53ce7c4b3`
const searchButton = () => {


    const input = document.getElementById('input');
    const inputValue = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${ApiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))

}
const displayData = data => {

    console.log(data)
    const div = document.getElementById('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 >${data.name}</h1>
            <h1 >${data.sys.country}</h1>
            <h3><span>${data.main.temp}</span> deg.c</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    
    `

}