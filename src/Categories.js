import React from 'react';

function Categories({categ,filter}) {
    return (
        <div className='d-flex justify-content-center my-3'>
        {
            categ.map((cat,i)=>{
                return(
                    <button type='button' className='border-0 mx-2 bg-primary text-uppercase text-white fw-bold ' onClick={()=>{filter(cat)}} key={i} >{cat}</button>
                )
            })
        }
        </div>
    );
}

export default Categories