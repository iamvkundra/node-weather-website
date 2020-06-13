const form = document.querySelector('form')
const inputdata = document.querySelector('input')
const message = document.getElementById('p1')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.getElementById('p1').innerHTML = "Loading..."
    document.getElementById('p2').innerHTML = ""
    const location = inputdata.value
    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            document.getElementById('p1').innerHTML = "ERROR"
        }
        else{
            document.getElementById('p1').innerHTML = data.place_name
            document.getElementById('p2').innerHTML = (data.forcast.temp)+" "+ data.forcast.chanceOfRain +" "+ data.forcast.weather_des
        }
    })  
    
})
})