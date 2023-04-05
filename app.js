const express = require('express');
const app = express();

const allroute = require("./routes/index");
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(allroute)


app.listen(PORT, () => {
    console.log("listen on port 5000")
})