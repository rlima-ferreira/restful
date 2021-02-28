import { PrismaClient } from '../../prisma/database';
import { Request, Response, NextFunction } from 'express';
import Country from '../models/Country';

export default class CountryController {

  // Lista os dados
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const countries = await prisma.countries.findMany({ orderBy: { id: 'asc' } });
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
      const country = await prisma.countries.findFirst({ where: { id: parseInt(id, 10) } });
      res.status(200).json(country);
    } catch (err) {
      return next(err);
    }
  }

  // Registra um novo dado
  public async store(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Country());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      await prisma.countries.create({ data });
      res.status(201).json({ 'message': 'Pais registrado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Atualiza os dados
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Country());
      const data:any = keys.reduce(
        (acc, cur) => req.body[cur] ? ({ ...acc, [cur]: req.body[cur] }) : acc
      , {});
      await prisma.countries.update({
        where: { id: parseInt(req.params.id, 10) },
        data
      });
      res.status(201).json({ 'message': 'Pais atualizado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Apaga os dados
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      await prisma.countries.delete({ where: { id: parseInt(req.params.id, 10) } });
      res.status(201).json({ 'message': 'Pais removido com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

}