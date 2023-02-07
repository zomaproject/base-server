const mongoose = require("mongoose");

const dbConnection = async () => {
	try {

    mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log("DB Online");
	} catch (error) {

		throw new Error("Erorr a la hora de iniciar la BD");

	}
};

module.exports = {
	dbConnection,
};
