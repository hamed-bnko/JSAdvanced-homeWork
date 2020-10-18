let page = 1;
var Form = document.getElementById("form")
var overDark = document.getElementById("form")

window.onload = function(){
    fetchData(1)
}
const fetchData = async (page ) =>{
    let data
    try {
        data = await fetch(`http://swapi.dev/api/people/?page=${page}`)
        
        useData = await data.json()
        document.querySelector(".col").innerHTML = ""
        for(let i=0 ;i < useData.results.length ; i++ ){
          let Html = 
          ` <div class="card" onclick ="moreInfo(${i})">
          <div class="card-inner">
            <div class="card-front">
            <h3>${useData.results[i].name}</h3>
            </div>
            <div class="card-back">
            <img src='https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale'alt="Avatar" width="100" height="100"> 
            </div>
          </div>
        </div>`
        document.querySelector(".col").insertAdjacentHTML("beforeend" , Html)
        }
       

    } catch (error) {
        console.log(error.message)
    }
 
}

document.querySelector(".up").addEventListener("click" , ()=>{
 if(page === 9){
     page = 1
 }else{
     page = page + 1
 }
 fetchData(page)
})
document.querySelector(".down").addEventListener("click" , ()=>{
    if(page === 1){
        page = 9
    }else{
        page = page - 1
    }
    
    fetchData(page)
   })


const moreInfo = (i) =>{
    document.querySelector(".madul").innerHTML = ""
    ToggleForm()
    let currentData = useData.results[i]
    document.querySelector(".madul").insertAdjacentHTML("beforeend" , `  
    <div class="image">
    <img src='https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale'alt="Avatar" width="200" >
    </div>
 <hr>
    <div class="discriptions">
    <h2> name : ${currentData.name} </h2>
    <h2> birth_year : ${currentData.birth_year}</h2>
    <h2> eye_color : ${currentData.eye_color}</h2>
    <h2> gender : ${currentData.gender}</h2>
    <h2> hair_color : ${currentData.hair_color}</h2>
    <h2> films : ${currentData.films.length}</h2>
</div>`)
    
}
overDark.addEventListener("click",()=>{
    Form.classList.toggle("hide");
    Form.classList.toggle("show");
})

const ToggleForm = () => {
    Form.classList.toggle("hide");
    Form.classList.toggle("show");
   
  };