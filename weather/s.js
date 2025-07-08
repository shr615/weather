function themain(){
const input=document.getElementById("text").value
const button=document.getElementById("sumbit")
const api= "8c042cc609714d4dbb9181125250507"
const url =  "https://api.weatherapi.com/v1/current.json?key=" + api+ "&q=" + input;

fetch(url)
.then(function(response){
  if (!response.ok) {
   throw new Error("Weather data not found");
    
    
  }
  
return response.json();
})
.then(function(data) {

  const reslutdiv=document.getElementById("result1")
  reslutdiv.innerText="";
  const title=document.createElement("h3")
  title.textContent="weather in the "+data.location.name+ ", " + data.location.country;
  const temp=document.createElement("h3")
  temp.textContent="temputer is"+ data.current.temp_c + "°C";

  const condition = document.createElement("p");
    condition.textContent = "Condition: " + data.current.condition.text;

   const icon = document.createElement("img");
    icon.src = "https:" + data.current.condition.icon;
reslutdiv.appendChild(title)
reslutdiv.appendChild(temp)
reslutdiv.appendChild(condition)
reslutdiv.appendChild(icon)

})
.catch(function(error) {
          document.getElementById("result1").textContent = error.message;
        });
      }
