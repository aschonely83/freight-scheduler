class SeventeenerAPI {
  static getBusiness(){
    return fetch(`${SeventeenerAPI.BASE_URL}/businesses`).then(resp =>resp,json())
  }
  
  static getBusinessShow(businessId) {
    return fetch(`${SeventeenerAPI.BASE_URL}/businesses/${businessId}`)
    .then(res =>  res.json() )
    .then(json => {
    const { 
        data: {  
            id,
            attributes: {
            name,
            pallets,
            scheduled_day,
            confirmation_number
            }
        },
        included
        } = json
        return {
            id,
            name,
            pallets,
            scheduled_day,
            confirmation_number,
            carriers: included.map(({id, attributes: {name, email, confirmation_number, business_id}}) => {
                return {
                id,
                name,
                email,
                confirmation_number, 
                business_id
                }
            })
        }
        
    })
   }

  static createBusiness(businessAttr) {
    return fetch(`${SeventeenerAPI.BASE_URL}/businesses`, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(businessAttr)
    }).then( res =>  res.json() )
  }

  static createCarrier(carrierAttr) {
    return fetch(`${SeventeenerAPI.BASE_URL}/carriers`, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(carrierAttr)
    }).then( res =>  res.json() )
  } 
}

SeventeenerAPI.BASE_URL = "http://localhost:3000"

class Business {
  constructor(business) {
    this.id = business.id
    this.name = business.name
    this.pallets = business.pallets
    this.scheduled_day = business.scheduled_day
    this.confirmation_number = business.confirmation_number
  }
}

class Carrier {

}

