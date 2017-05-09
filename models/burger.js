module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notNull: true
            },
        },
        devoured: {
            type: DataTypes. BOOLEAN,
            allowNull: false,
            validate: {
                len: [1],
                notNull: true,
            },
        },
    });
    return Burger;
};