import React from 'react'

const Card = ({item}) => {
    console.log(item);
  return (
    <>
     <div className='mt-4 my-3 p-3'>

     <div className="card bg-base-100 w-96 shadow-xl hover:scale-110 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.Category}</div>
    </h2>
    <p>{item.titel}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer rounded-full border-[2px] hover:text-pink-500 hover: text-white duration-200 py-1 px-2">Buy Now</div>
    </div>
  </div>
</div>
     </div>
    
    </>
  )
}

export default Card