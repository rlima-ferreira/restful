import { PrismaClient } from '../../prisma/database';
import { Request, Response, NextFunction } from 'express';
import City from '../models/City';

export default class CityController {

  // Lista os dados
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const cities = await prisma.cities.findMany({ orderBy: { id: 'asc' } });
      await prisma.$disconnect();
      res.status(200).json(cities);
    } catch (err) {
      next(err);
    }
  }

  // Lista um dado específico
  public async show(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const { id } = req.params;
      const city = await prisma.cities.findFirst({ where: { id: parseInt(id, 10) } });
      await prisma.$disconnect();
      res.status(200).json(city);
    } catch (err) {
      return next(err);
    }
  }

  // Registra um novo dado
  public async store(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new City());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      await prisma.cities.create({ data });
      await prisma.$disconnect();
      res.status(201).json({ 'message': 'Cidade registrada com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Atualiza os dados
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new City());
      const data:any = keys.reduce(
        (acc, cur) => req.body[cur] ? ({ ...acc, [cur]: req.body[cur] }) : acc
      , {});
      await prisma.cities.update({
        where: { id: parseInt(req.params.id, 10) },
        data
      });
      await prisma.$disconnect();
      res.status(201).json({ 'message': 'Cidade atualizada com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Apaga os dados
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      await prisma.cities.delete({ where: { id: parseInt(req.params.id, 10) } });
      res.status(201).json({ 'message': 'Cidade removida com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

}