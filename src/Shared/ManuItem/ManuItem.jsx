
const ManuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="md:flex space-x-4 mb-3">
            <img className="md:w-[120px] rounded-r-full rounded-b-full rounded-tr-full w-full" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}-----------</h1>
                <h2>{recipe}</h2>
            </div>
                <h2 className="text-yellow-500">${price}</h2>
        </div>
    );
};

export default ManuItem;