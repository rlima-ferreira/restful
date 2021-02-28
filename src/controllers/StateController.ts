import { PrismaClient } from '../../prisma/database';
import { Request, Response, NextFunction } from 'express';
import State from '../models/State';

export default class StateController {

  // Lista os dados
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const countries = await prisma.states.findMany({ orderBy: { id: 'asc' } });
      await prisma.$disconnect();
      res.status(200).json(countries);
    } catch (err) {
      next(err);
    }
  }

  // Lista um dado específico
  public async show(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const { id } = req.params;
      const state = await prisma.states.findFirst({ where: { id: parseInt(id, 10) } });
      await prisma.$disconnect();
      res.status(200).json(state);
    } catch (err) {
      return next(err);
    }
  }

  // Registra um novo dado
  public async store(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new State());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      await prisma.states.create({ data });
      await prisma.$disconnect();
      res.status(201).json({ 'message': 'Estado registrado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Atualiza os dados
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new State());
      const data:any = keys.reduce(
        (acc, cur) => req.body[cur] ? ({ ...acc, [cur]: req.body[cur] }) : acc
      , {});
      await prisma.states.update({
        where: { id: parseInt(req.params.id, 10) },
        data
      });
      await prisma.$disconnect();
      res.status(201).json({ 'message': 'Estado atualizado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Apaga os dados
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      await prisma.states.delete({ where: { id: parseInt(req.params.id, 10) } });
      await prisma.$disconnect();
      res.status(201).json({ 'message': 'Estado removido com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

}