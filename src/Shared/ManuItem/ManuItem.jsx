
const ManuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    console.log(name, image, price);
    return (
        <div className="flex space-x-4 mb-3">
            <img className="w-[120px] rounded-r-full rounded-b-full rounded-tr-full" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}-----------</h1>
                <h2>{recipe}</h2>
            </div>
                <h2 className="text-yellow-500">${price}</h2>
        </div>
    );
};

export default ManuItem;