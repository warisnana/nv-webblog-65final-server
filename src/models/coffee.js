module.exports = (sequelize, DataTypes) => {
    const cofee = sequelize.define('cofee', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
       
    })
    return cofee
}