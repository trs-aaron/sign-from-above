import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import ProductsSign from 'pages/signs/ProductsSign';
import ProductsSignModel from 'models/pages/signs/ProductsSign';

import config from 'screenConfig';


const ROUTES = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signs/products/1">
                <ProductsSign model={ProductsSignModel.fromJSON(config.signs['sports-desk-1'].data)} />
            </Route>
            <Route exact path="/signs/products/2">
                <ProductsSign model={ProductsSignModel.fromJSON(config.signs['sports-desk-2'].data)} />
            </Route>
            <Route exact path="/signs/products/3">
                <ProductsSign model={ProductsSignModel.fromJSON(config.signs['sports-desk-3'].data)} />
            </Route>
        </Switch>
    </BrowserRouter>
);

const Router = () => { return ROUTES; };


export default Router;