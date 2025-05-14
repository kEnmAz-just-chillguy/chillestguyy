import { Link } from "react-router-dom";

function Card({ star, cardIcon, title,addToBasket }) {
  return (
    <div  className="card bg-base-100 shadow-sm group">
   <Link to={"/detail/" + title.id}>  
      <figure className="h-73 ">
        <img
        className="transition-transform duration-300 group-hover:scale-105 "
          src={title.img}
          alt="Shoes"
        />
      </figure>
      </Link>
      <div className="card-body px-2 py-3">
        <p className="font-bold">{title.name}</p>
        <p>{title.description}</p>
     
        <div className="flex items-center gap-1">
          <img src={star} alt="star" className="w-3" />
          <p className="text-xs text-gray-400 font-medium">
            4.9 (297 sharhlar)
          </p>
        </div>

        <div className="flex">
          <span className="text-xs text-black bg-yellow-300 px-1 rounded">
            {Math.trunc(title.price / 12)} so'm/ 12 oyga
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold">${title.price}</p>

          <button onClick={() => addToBasket(title)}   className="btn btn-sm btn-circle">
            <img src={cardIcon} alt="cart" className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
