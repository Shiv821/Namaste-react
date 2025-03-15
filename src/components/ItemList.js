import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            className="p-2 m-2  border-grey-200 border-b-2 text-left flex justify-between"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹ -
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.finalPrice / 100 ||
                    item.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs ">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  onClick={() => handleClick(item)}
                  className="p-2 mx-16 rounded-lg text-green-300 bg-white shadow-lg align-bottom "
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
