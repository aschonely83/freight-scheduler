class AppContainer {
    static businesses = [];
    static carrier = [];
    base_url = "http://localhost:3000";  
    
   
   
    // fetch request
    getBusinesses() {
        return fetch(this.base_url + '/businesses')
        .then(resp => resp.json())
        .then (businesses => businesses)
            
        .catch(err => alert(err));    
    }

    renderBusinessesForm() {
            //create elments for dom
            
            const div = document.createElement('div')
            const div1 = document.createElement('div1')
            const p = document.createElement('p')
            const p1 = document.createElement('p1')
            const p2 = document.createElement('p2')
            const p3 = document.createElement('p3')
            const btn = document.createElement('button')

            const main = document.querySelector('main');
            main.appendChild(div)
            main.appendChild(div1)
            main.appendChild(p)
            main.appendChild(p1)
            main.appendChild(p2)
            main.appendChild(p3)
            main.appendChild(btn)

            div.setAttribute('class', "form")
            div1.setAttribute('class', "form-body")
            p.setAttribute('class', "business-name")
            p.innerHTML = this.name
            p1.setAttribute('class', "business-pallets")
            p1.innerHTML = this.pallets
            p2.setAttribute('class', "business-sched-day")
            p2.innerHTML = this.scheduled_day
            p3.setAttribute('class', "business-confirm-number")
            p3.innerHTML = this.confirmation_number
            btn.setAttribute('type', "button")
            btn.setAttribute('class', "add-btn")
            btn.setAttribute('id', "add-business")
            btn.innerHTML = "Add Business";
        }
}
