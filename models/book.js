'use strict';
const { Model } = require('sequelize');
// const Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
  // module.exports = (sequelize) => {
  //   class Book extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    title: {
      type: DataTypes.STRING,
      // type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "title"',
        }, 
        notEmpty: {
          msg: 'Please provide a value for "title"',
        },
      },
    }, 
    author: {
      type: DataTypes.STRING,
      // type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "author"',
        }, 
        notEmpty: {
          msg: 'Please provide a value for "author"',
        },
      },
    },
    genre: { 
      type: DataTypes.STRING,
      // type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "genre"',
        }, 
        notEmpty: {
          msg: 'Please provide a value for "genre"',
        },
      },
    },
    year: {
      type: DataTypes.INTEGER,
      // type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "year"',
        }, 
        notEmpty: {
          msg: 'Please provide a value for "year"',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};