export interface ICondition<T> {
    (x: T): boolean;
}

export interface IFunction<T, U> {
    (x: T): U
}

export interface IExecutionPath<T, U> {
    condition: ICondition<T>;
    pathFunction: IFunction<T, U>
}

export class Match<T, U> {
    private paths: IExecutionPath<T, U>[] = [];    

    private constructor() {
    }

    public static create<T, U>() {
        return new Match<T, U>();
    }

    public with(condition: ICondition<T>, pathFunction: IFunction<T, U>): Match<T, U> {
        this.paths.push({
            condition,
            pathFunction
        });

        return this;
    }

    public execute(value: T): U {
        const executionPath = this.paths.find(p => p.condition(value));

        if (executionPath) {
            return executionPath.pathFunction(value);
        }

        throw new Error('No proper execution path was found');
    }
}