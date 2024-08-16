const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnailAlt: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    lore: {
      type: DataTypes.TEXT,
    },
    primaryStat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stats: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    faction: {
      type: DataTypes.STRING,
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    ability0: {
      type: DataTypes.JSON,
    },
    ability1: {
      type: DataTypes.JSON,
    },
    ability2: {
      type: DataTypes.JSON,
    },
    ability3: {
      type: DataTypes.JSON,
    },
    ability4: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;
