import express, { Request, Response, NextFunction } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repository/catalog.repository";

const router = express.Router();

const catalogService = new CatalogService(new CatalogRepository());

router.post(
  "/product",
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await catalogService.createProduct(req.body);
    return res.status(201).json(data);
  }
);

export default router;
