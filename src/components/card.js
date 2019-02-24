import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    const shift = 60,
        beginShift = 30;

    return (
        <div className={'card ' + props.additionalСlass}
             style={{left: (props.info.name-1)*shift + beginShift}}
             onClick={(event) => props.clickCard(event)}
        >
            {/*Данные карточки*/}
            <div className='circle'>
                {props.info.name}
            </div>
        </div>
    );
};

Card.propTypes = {
    info: PropTypes.shape({
        type: PropTypes.string, //тип ширины карточки
        name: PropTypes.number  //номер карточки, начиная с 1
    }),
    clickCard: PropTypes.func,
};

export default Card;