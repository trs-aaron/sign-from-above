import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';
import Screen from 'models/Screen';
import Layout from 'models/Layout';
import SignFactory from 'models/SignFactory';


class Api {

    static async getConfigVersion() {
        let cfg = await (await fetch('/data/config/sign_config.json')).json();
        return (Util.isObject(cfg) && Util.isNonEmptyString(cfg.version)) ? cfg.version : null;
    }

    static async getScreens() {
        let cfg = await (await fetch('/data/config/sign_config.json')).json();
        let screens = {};

        if (Util.isObject(cfg) && Util.isObject(cfg['screens'])) {
             Object.keys(cfg['screens']).map((id) => screens[id] = Screen.fromJSON(cfg['screens'][id]));
        }

        return screens;
    }

    static async getScreenById(id) {
        let screens = await Api.getScreens();
        return screens[id];
    }

    static async getScreenByDeviceId(id) {
        let screens = await Api.getScreens();
        let screen = Object.values(screens).find((s) => s.deviceId == id);
        return screen;
    }

    static async getLayouts() {
        let cfg = await (await fetch('/data/config/sign_config.json')).json();
        let layouts = {};

        if (Util.isObject(cfg) && Util.isObject(cfg['layouts'])) {
             Object.keys(cfg['layouts']).map((id) => layouts[id] = Layout.fromJSON(cfg['layouts'][id]));
        }

        return layouts;
    }

    static async getLayoutById(id) {
        let layouts = await Api.getLayouts();
        return layouts[id];
    }

    static async getLayoutForScreenId(id) {
        let screen = await Api.getScreenById(id);
        let layout = (screen && screen instanceof Screen) ? await this.getLayoutById(screen.layoutId) : null;
        return layout;
    }

    static async getLayoutForDeviceId(id) {
        let screen = await Api.getScreenByDeviceId(id);
        let layout = (screen && screen instanceof Screen) ? await this.getLayoutById(screen.layoutId) : null;
        return layout;
    }

    static async getSigns() {
        let cfg = await (await fetch('/data/config/sign_config.json')).json();
        let signs = {};

        if (Util.isObject(cfg) && Util.isObject(cfg['signs'])) {
             Object.keys(cfg['signs']).map((id) => signs[id] = SignFactory.buildFromJSON(cfg['signs'][id]));
        }

        return signs;
    }

    static async getSignById(id) {
        let signs = await Api.getSigns();
        return signs[id];
    }
}


export default Api;