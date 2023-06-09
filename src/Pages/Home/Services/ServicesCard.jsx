import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <div className="rounded-full bg-red-300 p-1">
            <Link to={`/book/${_id}`}>
              <FiArrowRight className="w-6 h-6 text-red-600"></FiArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
