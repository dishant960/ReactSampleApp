import React from 'react';
import data from './data.js'
import Card from './card.js'

const Content = (props) => {
    
    return data.map((cardData)=>
        <div key={cardData.id} className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone cardContainer">
            <Card content={cardData} />
        </div>
        )
  }

export default Content;

