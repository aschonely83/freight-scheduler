class AppContainer  {
    constructor() {
      this.newBusinessForm = document.getElementById("createBusinessForm")
    }
    static businesses = [];
    static carriers = [];
    url = "http://localhost:3000";
      
   
     // event listeners for click and submit events    
     bindEventListeners() { 
       this.newBusinessForm.addEventListener("submit", this.createBusiness.bind(this))

       document.addEventListener('click', e => {
        const deleteButton = document.getElementById("deleteBusiness")
         if (e.target == deleteButton) {
             this.destroyBusiness(deleteButton.parentElement.dataset.id)
             deleteButton.parentElement.remove()
         }
     })
        const carrierForms = document.querySelectorAll(".carrier-form")
        // carrierForm.addEventListener('submit', e => {
        //   const addCarrierButton = document.getElementById("addCarrier")
        //   e.preventDefault()
         
        //   this.createCarriers(addCarrierButton.parentElement.dataset.id, e)
        // }) 

        const addCarrierBtns = document.querySelectorAll("button.addCarrier")
        
        for(let x = 0; x < addCarrierBtns.length; x++) {
          // debugger
          addCarrierBtns[x].addEventListener("click", () => {
            
            carrierForms[x].style.display = "block"
          })
        }
     };
     
     // fetch request
    getBusinesses() {
        return fetch(this.url + '/businesses')
        .then(resp => resp.json())
        .catch(err => alert(err));  
    };

    renderBusinesses() {
      //create DOM nodes and insert data into them to render in the DOM
      this.getBusinesses()
        .then(businesses => {
          
          const main = document.createElement('main')

          businesses.data.forEach(business => {
            
            const div = document.createElement('div')
            const div1 = document.createElement('div')
            const p = document.createElement('p')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
              
            const deleteBusiness = document.createElement('button')
            const addCarrier = document.createElement('button')

            const carrForm = document.createElement('form')
            carrForm.classList.add("carrier-form")
            const nameInput = document.createElement('input')
            nameInput.type = "text"
            nameInput.name = "name_input"
            nameInput.id = "name-input"
            nameInput.placeholder = "Enter Name"
            const emailInput = document.createElement('input')
            emailInput.type = "email"
            emailInput.name = "email_input"
            emailInput.id = "email-input"
            emailInput.placeholder = "Enter Email"
            const confirmInput = document.createElement('input')
            confirmInput.type = "text"
            confirmInput.name = "con_number"
            confirmInput.id = "con-input"
            confirmInput.placeholder = "Enter Confirmation Number"
            const submitBtn = document.createElement('button')
            submitBtn.type = "submit"
            submitBtn.textContent = "Add Carrier"
            carrForm.append(nameInput, emailInput, confirmInput, submitBtn)
            carrForm.style.display = "none"
            
            div.setAttribute('class', "card")
            div.setAttribute('data-id', `${business.id}`)
            div1.setAttribute('class',"card-body")
            p.setAttribute('class', "business-name")
            p.textContent =  business.attributes.name,  
            p1.setAttribute('class', "business-pallets")
            p1.textContent = business.attributes.pallets;
            p2.setAttribute('class', "business-sched-day")
            p2.textContent = business.attributes.scheduled_day;
            p3.setAttribute('class', "business-confirm-number")
            p3.textContent = business.attributes.confirmation_number;
            deleteBusiness.setAttribute('class', "deleteBusiness")
            deleteBusiness.textContent = 'Delete Business'
            addCarrier.setAttribute('class', "addCarrier")
            addCarrier.textContent = 'Add Carrier'
            
            div1.append(p, p1, p2, p3)
            div.append(div1, deleteBusiness, addCarrier, carrForm)
            main.append(div)
            
          })
          document.body.append(main) 
        })
      
      
    };

    
    // POST request to create a new business    
    createBusiness(event) {
      event.preventDefault();
      const form = event.target;
      fetch(`${this.url}/businesses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name.value,
          pallets: form.pallets.value,
          scheduled_day: form.scheduledDay.value,
          confirmation_number: form.confirmationNumber.value
        })
      })
      .then(resp => resp.json())
      .then(data => data )
      .then(location.reload())
      .catch(err => alert(err));
    }

    // DELETE request for deleting a business
    destroyBusiness(id) {
      fetch(`${this.url}/businesses/${id}`, {
        method: "DELETE"
       })
       .then(location.reload())
    }
  
   // POST request for creating a new business 
   createCarriers(id, e) {
     fetch(`${this.url}/businesses/${id}/carriers`, {
       method: "POST",
       headers: {
         "Content-Type": 'application/json',
         "Accept": 'application/json'
       },
       body: JSON.stringify({
         name: e.target.name.value,
         email: e.target.email.value,
         confirmation_number: e.target.confirmationnumber.value
       })
     })
     .then(resp => resp.json())
     .then(data => data)
     .then(location.reload())
   }
    
  
}    
