import React from 'react';

function Menu({items}) {

    return (
        <div className='d-flex flex-wrap  justify-content-center  '>
            {
                items.map((menuItem)=>{
                    const {id,img,title,desc,price,category}=menuItem;
                    return <div key={id} className=' m-2 bg-warning  p-2 rounded-3'style={{width:'300px'}} >
                        <img src={img} className='img-fluid rounded-3 w-100'style={{height:'200px'}} alt={title} />
                        <div className='p-1 bg-light rounded-3' >
                            <span className='fw-bold fs-5'>{title}</span> 
                            <span className='float-end mt-2 me-1 badge bg-info'>${price}</span>
                            <p className='fw-bolder'>{`${(category).toUpperCase()}`}</p>
                    <hr />
                            <p>{desc}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Menu;