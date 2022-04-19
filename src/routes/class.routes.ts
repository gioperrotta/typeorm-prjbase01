import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { uuid } from 'uuidv4';
import Class from '../database/models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const data = {
      id: uuid(),
      ...request.body
    };

    const repo = getRepository(Class);
    const res = await repo.save(data);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message >>', err.message)
  }
})

classRouter.get('/', async (request, response) => {
  response.json(await getRepository(Class).find())
})

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res= await repository.findByName(request.params.name) 
  response.json(res)
})

export default classRouter;