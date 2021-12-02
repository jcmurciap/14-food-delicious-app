import React from 'react'

const Card = (props) => {
    
    const { chows } = props;
    return (
        chows.data.map(chow => (
            <div 
                className="Card"
                key={chow.idMeal}
            >
                <img 
                    alt="meal"
                    className="Image__card"
                    src={chow.strMealThumb}
                />
                <div className="Card__content">   
                    <h4 className="Card__title">{chow.strMeal}</h4>
                    <div className="Card__metas">
                        <span className="Card__meta">{chow.strCategory}</span>
                        <span className="Card__meta">{chow.strArea}</span> 
                    </div>
                    <div className="Card__tags">
                        <span className="Card__tag">{chow.strTags}</span>
                    </div>
                    <button className="Button Button--contained Button--contained--bg">Show more</button>
                </div>
            </div>
        ))  
    );
};

export default Card;