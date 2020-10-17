import typeorm from './typeorm'
import logger from './logger'
import express from './express'

export default async ({ expressApp }) => {

  await typeorm();
  console.log('💾 TypeORM   Initialized 💾');

  await logger({ app: expressApp });
  console.log('🌲 Logger    Initialized 🌲');

  await express({ app: expressApp });
  console.log('🚀 Express   Initialized 🚀');

}
