const expess = require("express") //for require .cjs file extension & for import .js
const app = expess()
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})