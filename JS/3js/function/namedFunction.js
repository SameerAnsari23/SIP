function sunstone() {
    console.log("Welcome to 100% placement community")
}
sunstone();


// parameter and argument
function sunstone2(batch) {
    // console.log("Welcome to 100% placed" + batch + "batch")
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone2(2027);

function sunstone3(course, batch) {
    console.log(`Welcome to 100% placed ${course}-${batch} batch`)
}
sunstone3("BCA", 2027);


// return type function
function totalStudent(BCA, BTECH, MBA, MCA) {
    return BCA + BTECH + MBA + MCA
}
console.log(totalStudent(112, 267, 100, 35));