import React from 'react';

const  Resalut = (props) => {
     return (
        <div className="Person">
          <p> auther: <a href={props.linkauthor}>{props.auther}</a></p>
         <div> 
       <a href={props.imageurl}> <img src={props.image} alt="Smiley face"/>  </a> 
            </div>
        </div>
    );
}

export default Resalut;