import { Router } from 'express';

/**
 * Parent class representing routes for any service on the
 * rmember server.
 */

export class Routes {

    /** 
     * Initializes _routes object, instance of Router. All routes
     * will be assigned to this object.
     */
    constructor() {
        this._routes = Router();
    }

    /**
     * Returns the route object.
     */
    public get routes():any {
        return this._routes;
    }

    /** Route object containing any added routes. */
    private _routes: any;
}