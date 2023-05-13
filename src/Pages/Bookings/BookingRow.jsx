import { FiX } from "react-icons/fi";
// import Swal from "sweetalert2";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, email, date, price, service, img, status } =
    booking;

  return (
    <>
      <tr>
        <th>
          <label onClick={() => handleDelete(_id)}>
            <FiX className="h-6 w-6 p-1 text-blue-950 rounded-full bg-red-400"></FiX>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div>{customerName}</div>
              <div>{email}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td>{date}</td>

        <th>
          {status === "confirm" ? (
            <span className="font-bold text-primary btn btn-xs btn-outline">
              Confirmed
            </span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-error btn-xs text-white"
            >
              pending
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
