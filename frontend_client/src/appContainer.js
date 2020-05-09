class AppContainer  {
    static businesses = [];
    static carriers = [];
    url = "http://localhost:3000";
      
   
    bindEventListeners() {
      const btn = document.getElementById("addBusiness")
      btn.addEventListener("click", this.addBusiness);
     
      const dlb = document.getElementById("deleteBusiness")
      dlb.addEventListener("click", this.deleteBusiness);
     
    };

    // fetch request
    getBusinesses() {
        fetch(this.url + '/businesses')
        .then(resp => resp.json())
        .then(data => {
          data.forEach(business => {
            new Business(business.id, business.name, business.pallets, 
              business.scheduled_day, business.confirmation_number, business.carriers)
          });
          this.renderBusinesses(); 
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
        p.innerHTML = business.name,  
        p1.setAttribute('class', "business-pallets")
        p1.innerHTML = business.pallets;
        p2.setAttribute('class', "business-sched-day")
        p2.innerHTML = business.scheduled_day;
        p3.setAttribute('class', "business-confirm-number")
        p3.innerHTML = business.confirmation_number;
                        
      })
      document.getElementById('add-business-form').appendChild(div) 
    };

    addBusiness() {

    }
   
    deleteBusiness() { 
      businesses.forEach(business => {
        fetch(`http://localhost:3000/businesses/${business.id}`, {
          method: 'DELETE',
          header: 'application/json'
        })
        .then(resp => console.log(resp))
        
      })
      
    };

}
