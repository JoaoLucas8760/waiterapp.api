import { Order } from "../../models/Order";
import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;
    const order = await Order.create({ table, products });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
