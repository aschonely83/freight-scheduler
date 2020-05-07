class AppContainer {
    static businesses = [];
    static carrier = []
    url = "http://localhost:3000";
    
    bindEventListeners() {
        
    }
    
    getBusinesses() {
        return fetch(`${url}/businesses`)
        .then(resp => resp.json())
        .then (businesses => { 
            businesses.data.forEach(business => {
              new Business(business.id, business.name, business.pallets, business.scheduled_day, 
                business.confirmation_number)
            });
        })
        .catch(err => alert(err));    
    }
}  