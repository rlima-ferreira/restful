import { PrismaClient } from '../../prisma/database';
import { Request, Response, NextFunction } from 'express';
import Address from '../models/Address';

export default class AddressController {

  // Lista os dados
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const addresses = await prisma.addresses.findMany({
        orderBy: { id: 'asc' },
        include: { city: true, state: true, country: true }
      });
      res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }

  // Lista um dado específico
  public async show(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const { id } = req.params;
      const address = await prisma.addresses.findFirst({
        where: { id: parseInt(id, 10) },
        include: { city: true, state: true, country: true }
      });
      res.status(200).json(address);
    } catch (err) {
      return next(err);
    }
  }

  // Registra um novo dado
  public async store(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Address());
      const data:any = keys.reduce((acc, cur) => ({ ...acc, [cur]: req.body[cur] }) , {});
      await prisma.addresses.create({
        data: {
          ...data,
          public_place: req.body.publicPlace,
          city_id: req.body.city,
          state_id: req.body.state,
          country_id: req.body.country,
        }
      });
      res.status(201).json({ 'message': 'Endereço registrado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Atualiza os dados
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      const keys = Object.getOwnPropertyNames(new Address());
      const data:any = keys.reduce(
        (acc, cur) => req.body[cur] ? ({ ...acc, [cur]: req.body[cur] }) : acc
      , {});
      if (req.body.city) data.city_id = req.body.city;
      if (req.body.state) data.state_id = req.body.state;
      if (req.body.country) data.country_id = req.body.country;
      if (req.body.publicPlace) data.public_place = req.body.publicPlace;
      await prisma.addresses.update({
        where: { id: parseInt(req.params.id, 10) },
        data
      });
      res.status(201).json({ 'message': 'Endereço atualizado com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

  // Apaga os dados
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const prisma = new PrismaClient();
      await prisma.addresses.delete({ where: { id: parseInt(req.params.id, 10) } });
      res.status(201).json({ 'message': 'Endereço removido com sucesso' });
    } catch (err) {
      return next(err);
    }
  }

}