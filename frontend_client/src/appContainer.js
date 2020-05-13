class AppContainer  {
    static businesses = [];
    static carriers = [];
    url = "http://localhost:3000";
      
   
     //bindEventListeners() {
     // document.getElementById("create-business-form").addEventListener("click", this.createBusiness);
      
     
      //const dlb = document.getElementById("deleteBusiness")
      //dlb.addEventListener("click", this.deleteBusiness);
     //};
     
     // fetch request
    getBusinesses() {
        fetch(this.url + '/businesses')
        .then(resp => resp.json())
        .then(businesses => {
         
          businesses.data.forEach(business => { 
            const newBusiness = new Business(business.id, business.attributes.name, business.attributes.pallets, 
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
      const main = document.createElement('main')
      
      
      AppContainer.businesses.forEach(business => {
       
        main.append(div)
        div.append(div1)
        div1.append(p)
        div1.append(p1)
        div1.append(p2)
        div1.append(p3)
        
                        
        div.setAttribute('class', "card")
        div.setAttribute('id', "card")
        div1.setAttribute('class',"card-body")
        p.setAttribute('class', "business-name")
        p.textContent =  business.name,  
        p1.setAttribute('class', "business-pallets")
        p1.textContent = business.pallets;
        p2.setAttribute('class', "business-sched-day")
        p2.textContent = business.scheduled_day;
        p3.setAttribute('class', "business-confirm-number")
        p3.textContent = business.confirmation_number;
                              
      })
      
      document.body.append(div) 
    };

    //createBusiness() {
    //  const options = {  
    //  method: "POST",
    //  headers: {
    //      "Content-Type": "application/json",
    //      "Accept": "application/json",
    //  body: JSON.stringify({
    //    name: name.value,
    //    pallets: pallets.value,
    //    scheduled_day: scheduled_day.value,
    //    confirmation_number: confirmation_number.value
    //      })
    //   }
    //  }  
    //  fetch('http://localhost:3000/businesses',options)
    //     
    //    .then(resp => resp.json())
    //    .then(data => console.log(data))
    //    
    //    .catch(err => alert(err))       
    //  }

  }
