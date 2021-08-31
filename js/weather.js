document.getElementById('submit-button').addEventListener('click', function () {
    const input = document.getElementById('input');
    const inputvalue = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=fe5aaf88795553ca40742fa53ce7c4b3`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.weather[0]))

    fetch(url)
        .then(res => res.json())
        .then(data => contrydata(data.sys.country))

    fetch(url)
        .then(res => res.json())
        .then(data => temp(data.main.temp))


    input.value = '';



})

const displayData = data => {
    const weatherName = document.getElementById('weather');
    weatherName.innerText = data.main;
    console.log(data);
}
const contrydata = data => {
    const contryName = document.getElementById('city-name');
    contryName.innerText = data;
    console.log(data);
}
const temp = data => {
    const temp = document.getElementById('temp');
    temp.innerText = data;
    console.log(data);
}


