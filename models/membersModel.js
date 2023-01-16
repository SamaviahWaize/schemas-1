module.exports = (sequelize,DataTypes) =>{
    const Member = sequelize.define("member",{
        studentid: {
            type: DataTypes.INTEGER,
            allowNull:false
          },
          year: {
            type: DataTypes.INTEGER,
            allowNull:false
          },
          domain: {
            type: DataTypes.STRING,
            allowNull:false
          },
          branch: {
            type: DataTypes.STRING,
            allowNull:false
          },
          email: {
            type: DataTypes.STRING,
            allowNull:false
          },
          cardName: {
            type: DataTypes.STRING,
            allowNull:false
          },
          cardDesignation: {
            type: DataTypes.STRING,
            allowNull:false
          },
          images: {
            type: DataTypes.STRING
          },
          
            github: {
                type: DataTypes.STRING,
                allowNull:false
            },
            linkdin: {
                type: DataTypes.STRING,
                allowNull:false
            },
            instagram: {
                type: DataTypes.STRING,
                allowNull:false
            },
          }
          )
    return Member
}