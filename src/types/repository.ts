import { BaseEntity } from "./base-entity";
import { UpdateDto } from "./dtos";

export interface IRepository<T extends BaseEntity> {
    create(item: T): T;
    findById(id: string): T | null;
    findAll(): T[];
    deleteById(id: string): boolean;
    update(id: string, patch: UpdateDto<T>): T | null;
}