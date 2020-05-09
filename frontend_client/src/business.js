class Business {
    constructor(id, name, pallets, scheduled_day, confirmation_number,carriers) {
        this.name = name,
        this.pallets = pallets,
        this.scheduled_day = scheduled_day,
        this.confirmation_number = confirmation_number,
        this.carriers = carriers
        this.id = id
        AppContainer.businesses.push(this);
          
    }

    
}