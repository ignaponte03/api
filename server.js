const express = require('express')
const app = express() 
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: ["http://127.0.0.1:8100","http://localhost:8100"]
  }))
app.listen(port, () => console.log(`http://localhost:${port}`))

app.use("/", require("./routes"))

