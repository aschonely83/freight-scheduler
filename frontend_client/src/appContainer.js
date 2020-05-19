class AppContainer  {
    constructor() {
      this.newBusinessForm = document.getElementById("createBusinessForm")
      
    }
    static businesses = [];
    static carriers = [];
    url = "http://localhost:3000";
    static appointment = {}
      
   
     // event listeners for click and submit events    
     bindEventListeners() { 
       this.newBusinessForm.addEventListener("submit", this.createBusiness.bind(this));

       //document.addEventListener("click", e => {
       //          const deleteButton = document.querySelectorAll("button.deleteBusiness")
       //  if (e.target == deleteButton) {
       //      this.destroyBusiness(deleteButton.parentElement.dataset.id)
       //      deleteButton.parentElement.remove()
       //  }
       //})
     const carrierForms = document.querySelectorAll(".carrier-form")
        
        const addCarrierBtns = document.querySelectorAll("button.addCarrier")
        
        for(let x = 0; x < addCarrierBtns.length; x++) {
        
          addCarrierBtns[x].addEventListener("click", () => {
            
            let cForm = carrierForms[x] 
            cForm.style.display = "block"

            cForm.addEventListener("submit", e => {
              e.preventDefault();

              this.createCarriers(cForm.parentElement.dataset.id, e) 
            } )
          })
           
         }
    }
        
       
     
     //GET fetch request for businesses
    getBusinesses() {
        return fetch(this.url + '/businesses')
        .then(resp => resp.json())
        .catch(err => alert(err));  
    };

    renderBusinesses() {
      //create DOM nodes and insert data into them to render in the DOM
      this.getBusinesses()
        .then(businesses => {
          
          businesses.data.forEach(business => {
          
            const div = document.createElement('div')
            const div1 = document.createElement('div')
            const p = document.createElement('p')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
              
            //const deleteBusiness = document.createElement('button')
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
            submitBtn.classList.add("add")
            submitBtn.textContent = "Add"
            carrForm.append(nameInput, emailInput, confirmInput, submitBtn)
            carrForm.style.display = "none"

            const main = document.querySelector('main');
            main.append(div) 
            div1.append(p, p1, p2, p3)
            div.append(div1, addCarrier, carrForm)


            div.setAttribute('class', "card")
            div.setAttribute('data-id', `${business.id}`)
            div1.setAttribute('class',"card-body")
            p.setAttribute('class', "business-name")
            p.textContent =  business.attributes.name,  
            p1.setAttribute('class', "business-pallets")
            p1.textContent = `# of Pallets: ${business.attributes.pallets}`;
            p2.setAttribute('class', "business-sched-day")
            p2.textContent =`Date: ${business.attributes.scheduled_day}`;
            p3.setAttribute('class', "confirm-number")
            p3.textContent = `Confirmation #: ${business.attributes.confirmation_number}`;
            //deleteBusiness.setAttribute('class', "deleteBusiness")
            //deleteBusiness.textContent = 'Delete Business'
            addCarrier.setAttribute('class', "addCarrier")
            addCarrier.textContent = 'Add Carrier'

          })
           
        })
      };

    
    //POST request to create a new business    
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
      .then(location.reload());
      }

    //DELETE request for deleting a business
    //destroyBusiness(id) {
    //  fetch(`${this.url}/businesses/${id}`, {
    //    method: "DELETE"
    //   })
    //   .then(location.reload())
    //}
   
    //GET for carriers 
   getCarriers(id) {
      return fetch(`${this.url}/businesses/${id}/carriers`)
       .then(resp => resp.json())
       .catch(err => alert(err));
   }

   rednerCarriers(){ 
   ////create DOM nodes and insert data into them to render in the DOM
     this.getCarriers()
       .then(carriers => {

        carriers.data.forEach(carrier => {
         
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p') 


        const main = document.querySelector('main');
        main.append(div)
        div.append(div1)
        div1.append(p, p1,p2)
       

        div.setAttribute('class', "carrier-card")
        div.setAttribute('data-id', `${carrier.id}`)
        div1.setAttribute('class', "carrier-card-body")
        p.setAttribute('class', "carrier-name")
        p.textContent = carrier.attributes.name
        p1.setAttribute('class', "carrier-email")
        p1.textContent = carrier.attributes.email
        p2.setAttribute('class', "confirm-number")
        p2.textContent = carrier.attributes.confirmation_number  
          

         }) 
        
       }); 

         
    }


   //POST request for creating a new carrier 
   createCarriers(id, e) {
     const form = e.target;
     fetch(`${this.url}/businesses/${id}/carriers`, {
       method: "POST",
       headers: {
         "Content-Type": 'application/json',
         "Accept": 'application/json'
       },
       body: JSON.stringify({
         name: form.name_input.value,
         email: form.email_input.value,
         confirmation_number: form.con_number.value
       })
     })
     .then(resp => resp.json())
     .then(data => data)
     .then(location.reload())
   }
    
  
}    
