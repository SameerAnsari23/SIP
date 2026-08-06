const { Sequelize } = require("sequelize");        // nodejs ko my sql ke saath connect krwata hai

// database ke saath connect kr rahe hai aur db create kar rahe hai
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();        // kya mera mysql run kr raha hai, kya username, password correct hai?
        console.log("MySQL Connected Successfully");

        await sequelize.sync();                // ek table create kr do jiska naam students hai aur oosmein row and coloumn define kr do 

        console.log("All models synchronized.");
    }
    catch(err){
        console.log("Database Connection Failed");
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = sequelize;                    // connection object ko export kr do
module.exports.connectDB = connectDB;          