let Sequelize=require('sequelize')

let sequelize=require('./database');


let student=sequelize.define('student',{

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
  
    age:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
});

module.exports=student;