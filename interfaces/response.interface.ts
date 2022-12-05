/**
 * A response represents a [JSend](https://github.com/omniti-labs/jsend) response returned by the API
 */
export interface IResponse {
    /** The status */
    status: IResponseStatus.success | IResponseStatus.error | IResponseStatus.fail;

    /** An optional error code if status === 'error' */
    code?: number;

    /** The response data (optional if status === 'error', otherwise required) */
    data?: any;

    /** An optional message if status === 'error' */
    message?: string;
}

/**
 * A status represents the response status of the IResponse
 */
export enum IResponseStatus {
    success = 'success',
    error = 'error',
    fail = 'fail',
}
