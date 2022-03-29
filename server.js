require("dotenv").config()
const cors = require("cors")
const express = require("express")
const passport = require("passport")
require("./config/database")
const Router = require("./routes/routes")
const app = express()

const path = require("path")


app.use(cors())
app.use(express.json())
app.use("/api", Router)
app.use(passport.initialize())


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}



app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () => console.log(`Server ready on PORT ${PORT || 4000}`))