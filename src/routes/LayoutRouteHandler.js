import Api from 'util/Api';
import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';
import Layout from 'Layout';
import LayoutModel from 'models/Layout';


export default class LayoutRouteHandler {

    static handleIdRoute(id) {
        if (!Util.isNonEmptyString(id)) {
            ErrorUtil.raiseInvalidParameterError('LayoutRouteHandler', 'handleIdRoute', 'id', ErrorUtil.MSG.VALUE_TYPE.NONE_EMPTY_STRING);
        }

        return <Layout id={id}/>;
    }
}