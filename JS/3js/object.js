let resume = {
    name: "Samiran",
    age: 20,
    course: "BCA",
    sem: 5,
    skills: "Depression, Tension lena",
    greet: function () {
        console.log(`Hello!!, This side ${this.name}, and my age is ${this.age}.`)
    }
}


// Print object
// console.log(resume);

// get value
// console.log(resume.name);     // Dot Notation
// // or
// console.log(resume["age"]);   // Bracket Notation

resume.greet();

// // update value
resume.skills = "Hardworker, Cricket";
// console.log(resume);


// // Add new key-value
resume.city = "Mednipur"
// console.log(resume);

// Add function
// resume.greet = function() {
//     console.log("Hello")
// }
// console.log(resume.greet());





let resume2 = {
    name: "Gaurav",
    age: 20,
    course: "BCA",
    sem: 5,
    skills: "Star of the class",
    greet: function () {
        console.log(`Hello!!, This side ${this.name}, and my age is ${this.age}. ${this}`)
    }
}
// resume2.greet();
