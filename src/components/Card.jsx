import React from 'react';

import { Link } from 'react-router-dom';

const CardComponent = ({ title, text, subTitle, backgroundColor, link=false }) => {
  return (
    // <Card className="h-100">
    //   <Card.Body>
    //     <Card.Title className='border-b-2'>{title}</Card.Title>
    //     <Card.Text>{text}</Card.Text>
    //   </Card.Body>
    // </Card>
    <div className={`card text-left h-100 ${backgroundColor} text-white`}>
        <div className="card-header">
        {title}
        </div>
        <div className="card-body">
            <h5 className="card-title">{subTitle}</h5>
            <p className="card-text">{text}</p>
        </div>
        {
            link && <div className='py-2 px-3 border-0 text-white'>
                    <Link to="/about" className='text-white text-decoration-none'> Know More ..</Link>
            </div>
        }
  </div>
  );
};

export default CardComponent;
