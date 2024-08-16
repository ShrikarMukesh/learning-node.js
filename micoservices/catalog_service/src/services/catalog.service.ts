import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repositroy: ICatalogRepository) {
    this._repository = repositroy;
  }
  createProduct(input: any) {}

  updateProduct(input: any) {}

  getProducts(limit: number, offset: number) {}

  getProduct(id: number) {}
}
