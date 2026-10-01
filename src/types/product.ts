import { BaseEntity } from "./base-entity";
import { EntityStatus } from "./entity-status";

export interface Product extends BaseEntity {
    title: string;
    price: number;
    status: EntityStatus;
}