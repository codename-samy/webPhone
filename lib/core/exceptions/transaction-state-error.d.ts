import { Exception } from "./exception.js";
/**
 * Indicates that the operation could not be completed given the current transaction state.
 * @public
 */
export declare class TransactionStateError extends Exception {
    constructor(message?: string);
}
