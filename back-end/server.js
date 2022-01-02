const mongoose = require("mongoose")
const App = require("./App")


const PORT = process.env.PORT
const DB = process.env.DATABASE


App.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log("Database Connect Successful"))
    .catch(() => console.log("Database Connection Faild"))

