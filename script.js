const apiKey = 'beaea92f85a3b90832e2aec9df071c3b';
const btn = document.getElementById('search-btn');

btn.addEventListener('click', function () {
    let city = document.getElementById('city-input').value;
    if (city) {
        getCity(city);
    }
});

function getCity(city) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById('city-name').innerHTML = data.name;

            document.getElementById('temperature').innerHTML = data.main.temp + '°C';

            document.getElementById('humidity').innerHTML = data.main.humidity + '%';

            document.getElementById('wind-speed').innerHTML = data.wind.speed + 'km/h';

            document.getElementById('description').innerHTML = data.weather[0].description;

            const date = new Date();
            console.log(date);
            document.getElementById('date').innerHTML = date.toDateString();

        } else if (xhr.readyState === 4) {
            console.error('City not found or an error occurred!');
        }
    };

    xhr.send();
}


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


