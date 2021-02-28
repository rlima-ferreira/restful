import { PrismaClient } from '../../prisma/database';
import { Request, Response, NextFunction } from 'express';
import Person from '../models/Person';

export default class PersonController {

  // Lista os dados
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const persons = await prisma.persons.findMany();
      res.status(200).json(persons);
    } catch (err) {
      next(err);
    }
  }

  // Lista um dado específico
  public async show(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const { cpf } = req.params;
      if (!cpf) throw new Error('CPF não informado');
      const person = await prisma.persons.findFirst({
        where: { cpf },
        include: { address: { include: { city: true, state: true, country: true } } }
      });
      res.status(200).json(person);
    } catch (err) {
      return next(err);
    }
  }

  // Registra um novo dado
  public async store(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Person());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      await prisma.persons.create({
        data: {
          ...data,
          address_id: req.body.address
        }
      });
      res.status(201).json({ 'message': 'Pessoa registrada com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Atualiza os dados
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Person());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      if (req.body.address) data.address_id = req.body.address;
      await prisma.persons.update({
        where: { id: parseInt(req.params.id, 10) },
        data
      });
      res.status(201).json({ 'message': 'Pessoa atualizada com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Apaga os dados
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      await prisma.persons.delete({ where: { id: parseInt(req.params.id, 10) } });
      res.status(201).json({ 'message': 'Pessoa removida com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

}