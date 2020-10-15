const input = document.getElementById('input-text');
const btnSubmit = document.getElementById('submit');
const weatherCity = document.getElementById('city');
const iconTemp = document.getElementById('icon');
const numbTemp = document.getElementById('temperature-number');
const degTemp = document.getElementById('temperature-degree');
const descTemp = document.getElementById('description');
const result = document.getElementById('result');
const  KELVIN = 273;
const changeTemp = document.querySelector('.temperature');
btnSubmit.addEventListener('click', searchText);
var pos= 0;
result.addEventListener('click',()=>{
    
    if(pos==0){
        numbTemp.innerHTML= Math.floor(numbTemp.textContent)-KELVIN;
        degTemp.innerHTML = 'C';
        pos++;
        console.log(pos)
    }else{
        numbTemp.innerHTML= Math.floor(numbTemp.textContent)+KELVIN;
        degTemp.innerHTML = 'F';
        pos--;
    }
    console.log(pos);
})
async function getData(input, api) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`);
    const data = await response.json();
    console.log(data.weather[0]);
    weatherCity.innerHTML = data.name;
    iconTemp.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    numbTemp.innerHTML = data.main.temp;
    descTemp.innerHTML = data.weather[0].description;

}

//*input text dan mencari
function searchText() {
    const inputText = input.value;
    const apiKey = 'c936813a136023f64ae7c570e48bb5bc';
    console.log(inputText)
    getData(inputText, apiKey);
    if (inputText != 0) {
        result.style.transition = 'all 1s';
        result.style.top = '0';
        result.style.opacity = '1';
    } else {
        result.style.top = '150px';
        result.style.opacity = '0';

    }
}
//!mengubah temperature