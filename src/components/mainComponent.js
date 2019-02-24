import React, { Component } from 'react';

import '../styles.sass'
import Map from './map';
import List from './list';

class MainComponent extends Component {
    render() {
        return (
            <Map>
                <List />
            </Map>
        );
    };
};

export default MainComponent;