module.exports = (sequelize, DataTypes) => (
    sequelize.define('user' ,{
        email : {
            type : DataTypes.STRING(40),
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        nick : {
            type : DataTypes.STRING(20),
            allowNull : false,
            nuique : true
        },
    }, {
        timestamps : true,
        paranoid : true,
    })
);
