let express=require('express');

let bodyParser=require('body-parser');
let jwt =require('jsonwebtoken')
let bcrypt=require('bcrypt');
let cors=require('cors');
const sequelize = require("./models/database");
const User=require('./models/user');
const Expense=require('./models/expense');
let Order=require('./models/order');
let ForgotPassword=require('./models/forgot');
let resetrouter=require('./routes/reset');

let student=require('./models/student');
let parent=require('./models/parent');
let app = express();

app.use(bodyParser.json());
app.use(cors());

let SignUpLogin=require('./routes/usersignup');
let homerouter=require('./routes/home');

User.hasMany(Expense);
Expense.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(ForgotPassword);
ForgotPassword.belongsTo(User);

parent.hasMany(student);
student.belongsTo(parent);
app.use(SignUpLogin);
app.use(homerouter);
app.use(resetrouter);



sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(8400, () => {
      console.log(" listening to 8400 port ");
    });
  })
  .catch((err) => {
    console.log(err);
  });
 
 





