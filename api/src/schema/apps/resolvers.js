// App Imports
import models from '../../models'

// Get app by ID
export async function getById(parentValue, {id}) {
  return await models.App.findOne({where: {id}})
}

// Get all apps
export async function getAll() {
  return await models.App.findAll()
}

// Create app
export async function create(parentValue, {name, app}) {
  return await models.App.create({
    name,
    app
  })
}

// Delete app
export async function remove(parentValue, {id}) {
  return await models.App.destroy({where: {id}})
}