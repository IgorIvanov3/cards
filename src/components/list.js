import React, { Component } from 'react';

import Card from './card';
import { data } from '../config';

class List extends Component {

    constructor(props) {
        super(props);
        data.cards.forEach((elem, i) => {elem.name = i+1}); //добавляем значения для уникальных key и отображения номера
        this.state = {
            cards: data.cards || []
            // поменять если нужно восстанавливать состояние из истории при перезагрузке страницы на
            //cards: window.history.state || data.cards
        };
        this.clickCard = this.clickCard.bind(this);     // click по стопке карточек
        this.onPopState = this.onPopState.bind(this);   // click по кнопке навигации истории браузера
    };

    componentDidMount() {
        window.onpopstate = this.onPopState;
    };

    clickCard(event) {
        const CARDS = this.state.cards;

        if (event.shiftKey) {
            let newCard = {name: CARDS.length+1};
            newCard.type = (event.altKey) ? 'wide' : 'narrow';
            window.history.pushState([...CARDS, newCard],'',window.location.pathname);
            return this.setState({cards: [...CARDS, newCard]});
        };

        if (this.state.cards.length) {
            window.history.pushState(CARDS.slice(0,-1),'',window.location.pathname);
            this.setState({cards: CARDS.slice(0,-1)});
        };
    };

    onPopState(event) {
        if (event.state)
            this.setState({cards: event.state});
    };

    render() {
        return (
            <>
                {this.state.cards.map((elem, i, arr) => (
                    <Card key={elem.name}
                          info={elem}
                          additionalСlass={(i === arr.length-1) ? elem.type : ''}
                          clickCard={this.clickCard}
                    />
                ))
                }
            </>
        );
    };
};

export default List;