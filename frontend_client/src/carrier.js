class Carrier {
    constructor(name, email, confirmation_number, busiess_id) {
        this.name = name,
        this.email = email,
        this.confirmation_number = confirmation_number,
        this.business_id = busiess_id 
        AppContainer.carriers.push(this) 
    }
}