// Thought
export default (sequelize, DataTypes) => {
  return sequelize.define('apps', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
}