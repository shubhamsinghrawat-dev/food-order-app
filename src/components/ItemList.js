import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleclick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-3 border-b-2 border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          <div className="flex-1 py-2">
            <span className="text-lg">{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            <p className="text-xs py-2 text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-full sm:w-3/12 relative">
            <button
              className="p-2 text-xs text-white bg-black opacity-80 shadow-lg rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => handleclick(item)}
            >
              Add+
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
