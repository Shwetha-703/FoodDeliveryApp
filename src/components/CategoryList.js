import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { CDN_IMAGE_URL } from '../utils/constants';

const CategoryList = ({items}) => {

    const dispatcher = useDispatch();

    const handleAdd = (item) =>{
        dispatcher(addItem(item));
    }
    return (
        <div>
            {
                items.map(item=>(
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                        <div className='w-9/12'>
                            <div className='py-2'>
                                <span>{item?.card?.info?.name}</span>
                                <span>- ₹{item?.card?.info.price/100}</span>
                            </div>
                            <p className='text-xs'>{item?.card?.info?.description   }</p>
                        </div>
                        <div className='w-3/12 p-4'>
                            <div className='absolute'>
                                <button className='p-1 rounded bg-black text-white shadow-lg mx-1' onClick={()=>handleAdd(item)} >
                                    Add +
                                </button>
                            </div>
                            <img className='w-full rounded-md' src={CDN_IMAGE_URL+item.card.info.imageId}/>
                        </div>
                    </div>
                ))
            }   
        </div>
    )
}

export default CategoryList;
