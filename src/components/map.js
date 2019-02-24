import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backHover: 'mapOut' //className для смены цвета при наведении
        };
        this.onMouseOut = this.onMouseOut.bind(this);   // выход из поля background(карты)
        this.onMouseOver = this.onMouseOver.bind(this); // вход на поле background(карты)
    };

    onMouseOut(e) {
        if (e.target && e.target.id==='map') {
            this.setState({backHover: 'mapOut'});
        };
    };

    onMouseOver(e) {
        if (e.target && e.target.id==='map') {
            this.setState({backHover: 'mapHover'});
        };

    };

    render() {
        return (
            <div id='map'
                 onMouseOver={(event) => this.onMouseOver(event)}
                 onMouseOut= {(event) => this.onMouseOut(event)}
                 className={this.state.backHover}
            >
                {/*Компоненты карты*/}
                {this.props.children}
            </div>
        );
    };
};

export default Map;