import { BaseEntity } from "../types/base-entity";
import { UpdateDto } from "../types/dtos";
import { IRepository } from "../types/repository";

export class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
    protected items: T[] = [];

    create(item: T): T {
        this.items.push(item);
        return item;
    }

    findById(id: string): T | null {
        const item = this.items.find(item => item.id === id);

        if (!item) {
            return null;
        } 
        
        return item;
    }

    findAll(): T[] {
        return this.items;
    }

    deleteById(id: string): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }

    update(id: string, patch: UpdateDto<T>): T | null {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            return null;
        }
        const item = this.items[index];
        Object.assign(item, patch);
        item.updatedAt = new Date();
        return item;
    }
}