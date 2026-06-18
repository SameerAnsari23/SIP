const sunstone = function() {
    console.log("Welcome to 100% placement community")
}
sunstone();


// parameter and argument
const sunstone2 = function(batch) {
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone2(2027);

const sunstone3 = function(course, batch) {
    console.log(`Welcome to 100% placed ${course}-${batch} batch`)
}
sunstone3("BCA", 2027);


// return type function
const totalStudent = function(BCA, BTECH, MBA, MCA) {
    return BCA + BTECH + MBA + MCA
}
console.log(totalStudent(112, 267, 100, 35));