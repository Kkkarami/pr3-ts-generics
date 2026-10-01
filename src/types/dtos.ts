    import { EntityStatus } from "./entity-status";
    import { Product } from "./product";

    export type CreateDto<T> = Omit<T, "id" | "createdAt" | "updatedAt">;

    export type UpdateDto<T> = Partial<CreateDto<T>>;

    export type EntitySummary<T extends Product> = Pick<T, "id" | "title" | "price">;

    export type EntityAnalytics<T> = Record<EntityStatus, number>;