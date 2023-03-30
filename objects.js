/* class inheritance */
class Car {
	constructor(brand, year, cc){
		this.brand = brand,
		this.year = year, 
		this.cc = cc
	}

	runs(){
		console.log(`${this.brand} car ${this.year} cc:${this.cc} limit`);
	}
}

const  BMW = new Car("BMW", 2023, 1500);
console.log(BMW);
BMW.runs()