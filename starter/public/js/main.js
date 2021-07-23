console.log("Script Running!");

document.querySelector("#search").addEventListener("keypress", (e) => { 
    if (e.key == "Enter"){ 
        const searchYear = search.value;
        const locationList = firebase.database().ref();
        console.log(searchYear);
        locationList.on('value', (snapshot) => {
            const data = snapshot.val();
            for(let key in data) {
                if(searchYear == data[key].Year) {
                    document.querySelector("#cityName").innerHTML = data[key].City;
                    document.querySelector("#countryName").innerHTML = data[key].Country;
                }
            }
        })
    } 
});