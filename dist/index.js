"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Match {
    constructor() {
        this.paths = [];
    }
    static create() {
        return new Match();
    }
    with(condition, pathFunction) {
        this.paths.push({
            condition,
            pathFunction
        });
        return this;
    }
    execute(value) {
        const executionPath = this.paths.find(p => p.condition(value));
        if (executionPath) {
            return executionPath.pathFunction(value);
        }
        throw new Error('No proper execution path was found');
    }
}
exports.Match = Match;
