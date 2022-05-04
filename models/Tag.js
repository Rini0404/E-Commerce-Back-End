const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
        allowNull: false,
          primaryKey: true,
            autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
        reference : {
          model: 'product',
            key: 'id',
        },
    },
    tag_id: {
      type: DataTypes.INTEGER,
        reference: {
          model: 'tag',
            key: 'id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
