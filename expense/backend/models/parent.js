let Sequelize=require('sequelize')

let sequelize=require('./database');


let parent=sequelize.define('parent',{

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=parent;