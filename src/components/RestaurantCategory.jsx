
import CategoryItemlist from "./CategoryItemlist";

const RestaurantCategory = ({ data ,showItems ,setShowIndex}) => {
    // console.log(data);  

    const handleClick =() =>{
    //    console.log("clicked"); 
       setShowIndex();  //here we r updating the state var of parent indirectly
    };
    
    return (
        <div>
            {/* Accordian Header */}
            <div className="w-7/12 h-auto mx-auto my-3 shadow-lg bg-gray-50  cursor-pointer ">
                <div className="flex justify-between bg-slate-100 rounded-md py-3 " onClick={handleClick}>
                    <span className="font-bold text-lg mt-2 ml-1">{data.title} ({data.itemCards.length})</span>
                    <span className="mt-2 mr-2 text-xl ">∨</span>
                </div>
                {/* Accordian Body */}
                 {showItems && <CategoryItemlist  items={data?.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;