import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderCard = ({item}) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 lg:gap-10 lg: grid-cols-3">
                {
                    item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderCard;