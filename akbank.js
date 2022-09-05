// solution of Akbank web3 practicum OOP Case


// vehicleClass by name
class otomobil{
    constructor(hgsNumber,user,vehicleClass,date,balance) {
        this.hgsNumber = hgsNumber;
        this.user =  user;
        this.vehicleClass = vehicleClass;
        this.date = date;
        this.balance = balance;
    }
    getNumber = () => {
        return this.hgsNumber
    }
    getBalance = () => {
        return this.balance
    }
}

class minibus{
    constructor(hgsNumber,user,vehicleClass,date) {
        this.hgsNumber = hgsNumber;
        this.user =  user;
        this.vehicleClass = vehicleClass;
        this.date = date;
        this.balance = 100;
    }
}

class otobus{
    constructor(hgsNumber,user,vehicleClass,date) {
        this.hgsNumber = hgsNumber;
        this.user =  user;
        this.vehicleClass = "otobus";
        this.date = date;
        this.balance = 100;
    }

}




class Gise {
    constructor(price,vehicles) {
       this.price = price;
       this.vehicles = vehicles
      
    }

    
    sumofprice = 0;

    getPrice = () =>  {
        return this.getPrice
    }

    getPayment = (priceofOtomobil,priceofminibus,priceofOtobus, balance,vehicles) => {
        priceofOtomobil = 20
        priceofminibus = 30
        priceofOtobus = 40;

       for(let i = 0; i < this.vehicles.length; i++) {
        if(this.vehicles[i].vehicleClass == "otomobil") {
              this.vehicles[i].balance = this.vehicles[i].balance-priceofOtomobil
              console.log( 'number of hgs: '+ this.vehicles[i].hgsNumber + ' class of vehicle: ' + this.vehicles[i].vehicleClass + ' balance of vehicle: ' + this.vehicles[i].balance)
              console.log('(payment is received: ' + '-' + priceofOtomobil+')')
            this.sumofprice = this.sumofprice + priceofOtomobil
       }
        if(this.vehicles[i].vehicleClass == "minibus") {
            this.vehicles[i].balance = this.vehicles[i].balance-priceofminibus
            console.log( 'number of hgs: '+ this.vehicles[i].hgsNumber + ' class of vehicle: ' + this.vehicles[i].vehicleClass + ' balance of vehicle: ' + this.vehicles[i].balance)
            console.log('(payment is received: ' + '-' + priceofminibus+')')
            this.sumofprice = this.sumofprice + priceofminibus
    }
        if(this.vehicles[i].vehicleClass == "otobus") {
            this.vehicles[i].balance = this.vehicles[i].balance-priceofOtobus
            console.log( 'number of hgs: '+ this.vehicles[i].hgsNumber + ' class of vehicle: ' + this.vehicles[i].vehicleClass + ' balance of vehicle: ' + this.vehicles[i].balance)
            console.log('(payment is received: ' + '-' + priceofOtobus+')')
            this.sumofprice = this.sumofprice + priceofOtobus
 }

    }
}
    getVehicles = () => {

        return this.vehicles;
    }
    addVehicle = (newVehicle) => {
        this.vehicles.push(newVehicle)
    }

    getTotalEarning = () => {
        return this.sumofprice
    }

}


let otomobil1 = new otomobil(001,'huseyin','otomobil','06/02/2022',100)
let otobus1 = new otobus(002,'zulfikar','otomobil','06/02/2022',100)

let gise1 =  new Gise(20,[otomobil1,otobus1])



let minibus1 = new minibus(003,'ozturk','minibus','06/03/2022',200)



gise1.addVehicle(minibus1)

// vehicles list in gise1
console.log(gise1.getVehicles())

// the last balance after paying the price
gise1.getPayment()

// getPayment
// console.log("total earning: " + gise1.getTotalEarning())

