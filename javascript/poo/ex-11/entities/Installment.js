module.exports = class Installment {
    constructor(parcelValue, parcelNumber){
        this.parcelValue = parcelValue
        this.parcelNumber = parcelNumber
        this.status = 'pending'
    }
}