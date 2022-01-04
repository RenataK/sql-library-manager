'use strict';
const { Model } = require('sequelize');

//defining and initializing the Book model:
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
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
    //Adding the following attributes/columns: title, author, genre, year
    title: {
      //specifing a data type
      type: DataTypes.STRING,
      //setting allowNull to false to ensure no empty fields 
      allowNull: false,
      //adding validation to title, author, genre, year with a msg property if fields are blank
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