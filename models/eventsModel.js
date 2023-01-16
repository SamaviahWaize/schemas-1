
module.exports = (sequelize,DataTypes) =>{
    const Event = sequelize.define("event",{
        topic: {
            type: DataTypes. STRING,
            allowNull:false
          },
        type: {
            type: DataTypes. STRING,
            allowNull:false
          },
        date: {
            type: DataTypes.DATE,
            allowNull:false
        },
        starttime: {
            type: DataTypes.TIME,
            allowNull:false
          },
        endtime: {
            type: DataTypes.TIME,
            allowNull:false
          },
        coordinatername: {
            type: DataTypes.STRING,
            allowNull:false
          },
        venue: {
            type: DataTypes.STRING,
            allowNull:false
          },
        numberoffacultyinvolved: {
            type: DataTypes.INTEGER,
            allowNull:false
          },
        numberofsocietymembersinvolved: {
            type: DataTypes.INTEGER,
            allowNull:false
          },
        numberofattendees: {
            type: DataTypes.INTEGER,
            allowNull:false
          },
        
    })
    return Event
}