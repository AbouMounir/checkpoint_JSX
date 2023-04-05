import iconstar from '.././icon-star.svg';
import './part_one.css';
import React from 'react';

const PartOne = () => {
    return (
      <div className='part_one'>
        <div className='container'>
           <div className='img_box'>
             <img src={iconstar} className ='iconstar' alt='iconstar' /> 
           </div>
           <h1> How did we do?</h1>
           <p className='text'> Please let us know we did with your support request. All feedback is appreciated tp help us improve our offering! </p>
           <div className='mark_box'>
             <div className='mark'> 1 </div>
             <div className='mark'> 2 </div>
             <div className='mark'> 3 </div>
             <div className='mark'> 4 </div>
             <div className='mark'> 5 </div>
           </div>
           <div className='submit'> 
             <p> SUBMIT </p> 
           </div>
        </div>
      </div>      
    );
}


export default PartOne ;