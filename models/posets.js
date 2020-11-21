module.exports = function(sequelize, DataTypes) {
    var Poset = sequelize.define("Poset", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
    {
      timestamps: false
    });

    // WIll also add insertName to Poset model
    Poset.associate = function (models) {
      models.Poset.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  
    return Poset;
  };
