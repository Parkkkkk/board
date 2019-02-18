module.exports = (sequelize , DataTypes) => (
    sequelize.define('chat' , {
        room : {

        },
        user : {
            type : DataTypes.STRING(20),
            allowNull : false,
            require : true
        },

    })
) 