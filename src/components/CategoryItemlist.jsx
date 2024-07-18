import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";


const CategoryItemlist = ({ items }) => {
    // console.log(items);

    //writing Data to the slice in the store
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatching on action 'addItem'
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="w-full h-36 flex justify-between shadow-md transform transition-transform duration-200 hover:scale-105">
                    <div className="ml-4 ">
                        <span className="font-semibold text-xl">{item.card.info.name} - </span>
                        <span className="font-thin">{item.card.info.category}</span>
                        <p className="text-2xl text-left font-bold text-green-600">
                            ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}/-
                        </p>
                    </div>
                    <div className="size-36">
                        <img className="mt-1 w-full h-[138px] my-auto rounded-lg" src={CDN_URL + item.card.info.imageId} />
                        <button className="bg-green-500 text-white rounded-md px-2 py-1 relative bottom-8 right-12 "
                           //adding real items count to the data layer of cart
                            onClick={() => handleAddItem(item)}>  
                            add+</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryItemlist;