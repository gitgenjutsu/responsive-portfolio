window.addEventListener('load', () => {
    let longitude;
    let latitude;
    let tempDescription = document.querySelector(".sky-condition");
    let tempDegreeFah = document.querySelector(".fah");
    let tempDegreeCel = document.querySelector(".cel");
    let locTimeZone = document.querySelector(".location-timezone");
    let humidity = document.querySelector(".humidity");


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            // const api = `${proxy}rTegbtRna5ARO8L3TdgeluvjMkQN8stQ/${latitude},${longitude}`;
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`;

            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                const { temperature, summary, icon, humidity, windSpeed } = data.currently;
                //set DOM elements from the API
                tempDegreeFah.innerHTML = temperature;

                //converting Fah to Cel
                tempDegreeCel.innerHTML = Math.floor((temperature - 32) * (5 / 9));

                tempDescription.innerHTML = summary;
                locTimeZone.innerHTML = data.timezone;
                humidity.innerHTML = humidity;
                //set weather icon
                let Weathericon = document.querySelector(".icon");
                setIcons(icon, Weathericon);
            });
        });
    } else {
        document.querySelector(".notWorking").innerHTML = "Can't get your location!";
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play(); //to animate icon
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});