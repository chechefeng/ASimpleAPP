import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import stores from './src/stores';
import Routers from './src/routers';

export default class ASimpleAPP extends Component {
    // 构造
    constructor(props) {
        StatusBar.setBarStyle('light-content', false);
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Provider {...stores}>
                <Routers />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ASimpleAPP', () => ASimpleAPP);
