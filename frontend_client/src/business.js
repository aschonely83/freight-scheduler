class Business {
    constructor(id, name, pallets, scheduled_day, confirmation_number) {
    this.id = id,
    this.name = name,
    this.pallets = pallets,
    this.scheduled_day = scheduled_day
    this.confirmation_number = confirmation_number
    AppContainer.businesses.push(this)
    }

}