function Person(name, age) {
	const person = Object.create(Person.prototype);

	person.name = name;
	person.age = age;

	return person;
}
Person.prototype = {
	eat() {
		console.log(`${this.name} is eating.`);
	},
	sleep() {
		console.log(`${this.name} is sleeping.`);
	},
};

const person1 = Person("Samsuddin", 34);
const person2 = Person("Yasin", 08);

console.log(person1);
console.log(person2);

/* Object  create */
const Captain = {
	name: "Marsafi",
	age: 36,
	contrary: "Bangladesh",
};
const player = Object.create(Captain);
