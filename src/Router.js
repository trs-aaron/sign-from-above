import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route,
    useParams,
} from 'react-router-dom';
import LayoutRouteHandler from 'routes/LayoutRouteHandler';
import ScreenRouteHandler from 'routes/ScreenRouteHandler';


const LayoutIdRoute = () => {
    let { id } = useParams();
    return LayoutRouteHandler.handleIdRoute(id);
}

const ScreenIdRoute = () => {
    let { id } = useParams();
    return ScreenRouteHandler.handleIdRoute(id);
}

const DeviceIdRoute = () => {
    let { id } = useParams();
    return ScreenRouteHandler.handleDeviceIdRoute(id);
}

const ROUTES = (
    <BrowserRouter>
        <Switch>
            <Route path="/layout/:id">
                <LayoutIdRoute />
            </Route>
            <Route path="/screen/device-id/:id">
                <DeviceIdRoute />
            </Route>
            <Route path="/screen/:id">
                <ScreenIdRoute />
            </Route>
        </Switch>
    </BrowserRouter>
);

const Router = () => { return ROUTES; };


export default Router;