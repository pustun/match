export interface ICondition<T> {
    (x: T): boolean;
}
export interface IFunction<T, U> {
    (x: T): U;
}
export interface IExecutionPath<T, U> {
    condition: ICondition<T>;
    pathFunction: IFunction<T, U>;
}
export declare class Match<T, U> {
    private paths;
    private constructor();
    static create<T, U>(): Match<T, U>;
    with(condition: ICondition<T>, pathFunction: IFunction<T, U>): Match<T, U>;
    execute(value: T): U;
}
