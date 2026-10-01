import { InMemoryRepository } from "./repositories/in-memory-repository";
import { EntityStatus } from "./types/entity-status";
import { Product } from "./types/product";

const productRepository = new InMemoryRepository<Product>();

const product: Product = {
    id: "prod-001",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Carrot",
    price: 20,
    status: EntityStatus.Active
}

productRepository.create(product);

const foundProduct = productRepository.findById("prod-001");
console.log(foundProduct);

productRepository.update("prod-001", {title: "CarrotUpd", price: 30});
const allProducts = productRepository.findAll();
console.log(allProducts);

const isDeleted = productRepository.deleteById("prod-001");
console.log(isDeleted);