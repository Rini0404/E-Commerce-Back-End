const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
        allowNull: false,
          autoIncrement: true,
            primaryKey: true,
    },
     // define columns
    price: {
      type: DataTypes.DECIMAL,
        allowNull: false,
          validate: {
            isDecimal: true,
          }
    },
     // define columns
    product_name: {
      type: DataTypes.STRING,
        allowNull: false,
    },
     // define columns
    stock: {
      type: DataTypes.INTEGER,
        allowNull: false,
          defaultValue: 10,    
    }, 
     // define columns
    category_id: {
              type: DataTypes.INTEGER,
                reference: {
                  model: 'category',
                    key: 'id',
                },
            }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
