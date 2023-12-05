
const Product = ({ item }) => {
    return (
        <div className="mx-auto px-8 border border-gray font-semibold
        rounded-lg">
            <img alt="glasses" src={item.image} />
            <div  className="flex flex-row items-center justify-between">
                <p className="text-xl">{item.name}</p>
                <p className="text-lg">{item.price}</p>
            </div>
            <button className="bg-indigo-500 text-white text-lg
            rounded-full font-medium">Add to basket</button>
        </div>
    )
}

export default Product