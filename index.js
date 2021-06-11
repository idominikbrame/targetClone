//Index Modules
const express = require('express');
const app = express();
const loginRoutes = require('./routes/loginRoute')
const signUpRoutes = require('./routes/signUpRoute')
const connection = require('./sql/connection')

//HTTP Body Handling
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

//Static Content
app.use('/login', loginRoutes)
app.use('/signup', signUpRoutes)

//Server Configuration
const port = process.env.PORT || 3006
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

//Log MemoryUsage
// console.log(process.memoryUsage())
// const used = process.memoryUsage();
// for (let key in used) {
//   console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
// }


