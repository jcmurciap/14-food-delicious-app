import React from 'react'
import Card from './Card';

const CardModal = (props) => {
    return (
        <div className="Modal">
            <h3 className="Modal__title">Meal title</h3>
            <div className="Box">
                <Card />
                <div className="Box">
                    <h4 className="Modal__subtitle">Ingredients</h4>
                    <ul className="Box">
                        <li className="Modal__ingredient">ingredient1</li>
                        <li className="Modal__ingredient">ingredient2</li>
                        <li className="Modal__ingredient">ingredient3</li>
                        <li className="Modal__ingredient">ingredient4</li>
                    </ul>
                </div>
            </div>
            <div className="Box">
                <button className="Button Button-contained">As easy as pie</button>
            </div>
            <div className="Box">
                <p className="Modal__legend">Go to preparation</p>
            </div>
        </div>
    );
};
export default CardModal;