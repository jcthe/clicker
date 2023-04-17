// create an object of key-value pairs
let contacts ={
    bff: 1234567,
    mom: 5555555,
    bro: 1567808,
}

//log all
console.log(contacts);

//access a specific  entry by it's key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

// is there a key called ___ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are arrays - pass by reference (location) not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a==b);
console.log(a==c);
console.log(b==c);

console.log(a.value == c.value);

//create 5 objects below:
let dog = {
    dogName: 'Tony',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true
};
console.log(dog);

// object 2
let chicken = {
    chickenName: 'Tony',
     breed: 'Chicken',
    age: '1',
    size: 'Big',
};

// object 3
let car = {
    carName: 'Nissan',
    color: 'blue',
    size: 'big',

};

// object 4
let eye = {
    color: 'brown',
    size: 'small',
    red: 'false',
    visibility:'ture',
    dilated: 'false',
};

//object 5
let myself = {
    Name: 'random',
    breed: 'mexican',    height: '5,6',

};