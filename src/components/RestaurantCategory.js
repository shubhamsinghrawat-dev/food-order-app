import { RiArrowDropDownLine } from "react-icons/ri";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showitems,setShowindex}) =>
{
    const handleclick=()=>
    {
        setShowindex();
    }
    return (
        <div className="w-[90%] sm:w-7/12 mx-auto my-5 bg- rounded bg-gray-50 shadow-lg">
            <div className="flex justify-between p-3 cursor-pointer" onClick={handleclick}>
                <span className="text-xl font-medium ">{data?.title} ({data?.itemCards?.length})</span>
                <span className="font-bold text-3xl"><RiArrowDropDownLine /></span>
            </div>
            <div>
                {showitems && <ItemList items={data?.itemCards} />}
            </div>
        </div>
    )
}
export default RestaurantCategory;