'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faq.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pertanyaan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jawaban: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inovasi_id:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Faq',
  });
  return Faq;
};
