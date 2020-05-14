class AppContainer  {
    static businesses = [];
    static carriers = [];
    url = "http://localhost:3000";
      
   
     bindEventListeners() { 
       const newBusinessForm = document.getElementById("createBusinessForm")
       newBusinessForm.addEventListener("submit", this.createBusiness.bind(this));
      
       document.addEventListener('click', e => {
          const addCarrButton = document.getElementById("addCarrier")
           if (e.target == addCarrButton) {
             document.getElementById("carrierForm").style.display = "block"
           }
       })

       document.addEventListener('click', e => {
        const deleteButton = document.getElementById("deleteBusiness")
         if (e.target == deleteButton) {
             this.destroyBusiness(deleteButton.parentElement.dataset.id)
             deleteButton.parentElement.remove()
         }
     })
        const carrierForm = document.getElementById("carrierForm")
        carrierForm.addEventListener('submit', e => {
          const addCarrierButton = document.getElementById("addCarrier")
          e.preventDefault()
         
          this.createCarriers(addCarrierButton.parentElement.dataset.id, e)
        }) 
       
       //const addCarrierButton = document.getElementById("addCarrier")
       //addCarrierButton.addEventListener("click", this.createCarrierFields.bind(this));

       //const dlb = document.getElementById("deleteBusiness")
       //dlb.addEventListener("click", this.deleteBusiness);
     };
     
     // fetch request
    getBusinesses() {
        fetch(this.url + '/businesses')
        .then(resp => resp.json())
        .then(businesses => {
         
          businesses.data.forEach(business => {
              new Business(business.id, business.attributes.name, business.attributes.pallets, 
              business.attributes.scheduled_day, business.attributes.confirmation_number, business.attributes.carriers)
            
              this.renderBusinesses();                   
          });
          
        })
        .catch(err => alert(err));  
    };

    renderBusinesses() {
      //create DOM nodes and insert data into them to render in the DOM
      const div = document.createElement('div')
      const div1 = document.createElement('div')
      const p = document.createElement('p')
      const p1 = document.createElement('p')
      const p2 = document.createElement('p')
      const p3 = document.createElement('p')
      const deleteBusiness = document.createElement('button')
      const addCarrier = document.createElement('button')
      const main = document.createElement('main')
     // const carrForm =  
      
      
      
      AppContainer.businesses.forEach(business => {
       
       
        div.append(div1)
        div1.append(p)
        div1.append(p1)
        div1.append(p2)
        div1.append(p3)
       
        

        div.setAttribute('class', "card")
        div.setAttribute('data-id', `${business.id}`)
        div1.setAttribute('class',"card-body")
        p.setAttribute('class', "business-name")
        p.textContent =  business.name,  
        p1.setAttribute('class', "business-pallets")
        p1.textContent = business.pallets;
        p2.setAttribute('class', "business-sched-day")
        p2.textContent = business.scheduled_day;
        p3.setAttribute('class', "business-confirm-number")
        p3.textContent = business.confirmation_number;
        deleteBusiness.setAttribute('id', "deleteBusiness")
        deleteBusiness.textContent = 'Delete Business'
       
        addCarrier.setAttribute('id', "addCarrier")
        addCarrier.textContent = 'Add Carrier'
        div.append(deleteBusiness)
        div.append(addCarrier)
        main.append(div)
      })
      
      document.body.append(div) 
    };

    
        
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

    destroyBusiness(id) {
      
      
      fetch(`${this.url}/businesses/${id}`, {
        method: "DELETE"
       })
       .then(location.reload())
    }
  
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
