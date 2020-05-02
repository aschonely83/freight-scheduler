BUSINESSES_URL = 'http://localhost:3000/businesses'

const addButton = document.createElement('button')
addButton.innerText = "Add Business"
document.body.appendChild(addButton)
addButton.addEventListener('click', addBusiness)

fetch(BUSINESSES_URL)
.then(resp => resp.json())
.then(json => json.forEach(business => {
  renderBusinesses(business)
 }),
)

function addBusiness() {
    let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
    } 
    fetch(BUSINESSES_URL, options)
    .then(resp =>  resp.json())
    .then(business => {
        renderBusinesses(business) 
        addListeners(business) 
    })
  
}
   

function renderBusinesses(business){
    let html = `
    <div data-id="${business.id}">
      <p>${business.name}</p>
      <p>${business.pallets}</p>
      <p>${business.scheduled_day}</p>
      <p>${business.confirmation_number}</p>
    </div><br><br>`
    let divCard = document.createElement('div')
    divCard.setAttribute("class", "card")
    divCard.setAttribute("data-card-id", `${business.id}`)
    divCard.innerHTML = html
    document.body.appendChild(divCard)
    }

function addListeners(business){
    let removeButtons = document.querySelector(`[data-card-id='${business.id}']`)
    removeButtons.addEventListener('click', function(e) { removeBusiness(e) } )
  }
 
function removeBusiness(e) { 
     options = {
       method: "DELETE"
     }
         fetch(`${BUSINESSES_URL}/${e.target.dataset.name}`, options)
         e.target.parentElement.parentElement.remove()
}  