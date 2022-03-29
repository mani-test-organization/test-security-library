export interface IMapperService<S, T> {
    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOrArray: S | S[]): T | T[];
}
export declare abstract class MapperService<S, T> implements IMapperService<S, T> {
    protected abstract map(entity: S): T;
    transform(entity: S): T;
    transform(array: S[]): T[];
}
