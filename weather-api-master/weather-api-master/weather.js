function weather() {
    let cityname = document.getElementById('txtcity').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0466cbde7c464dd7f56717dc5a926737`)
        .then(res => res.json())
        .then(data => {
                document.getElementById('image').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                document.getElementById("temp").innerText= data.main.temp;
                document.getElementById("rain").innerText=data.weather[0].main;
                document.getElementById('desc').innerText=data.weather[0].description
                document.getElementById("timezone").innerText =data.timezone;
                document.getElementById('city').innerText= document.getElementById('txtcity').value;
                document.getElementById('tz').innerHTML=`<i class="fa-solid fa-temperature-empty"></i> TimeZone`
                document.getElementById('temperature').innerHTML= `<i class="fa-solid fa-temperature-empty"></i> Temperature `

                document.getElementById('weather').innerHTML=`<i class="fa-solid fa-rainbow"></i> Weather`



                
            })
            
        };


        



