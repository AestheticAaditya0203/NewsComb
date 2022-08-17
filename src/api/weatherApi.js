import axios from 'axios';

export default axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/weather?q=Bangalore&callback=test&units=metrics&appid=5e1e4be3246072957554d0eb7f663fa8"
})