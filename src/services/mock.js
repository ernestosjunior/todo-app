import { freeze } from '../utils/freeze'
import { faker } from '@faker-js/faker'

const mockTask = () => {
  return {
    id: faker.datatype.uuid(),
    checked: faker.datatype.boolean(),
    todo: faker.random.words(5),
  }
}

export const login = async (email, password) => {
  await freeze()

  const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`

  return {
    ok: true,
    data: { name: fullName, photo: faker.image.avatar() },
    token: faker.datatype.uuid(),
  }
}

export const getTasks = async id => {
  await freeze()
  return [mockTask(), mockTask(), mockTask(), mockTask(), mockTask()]
}
