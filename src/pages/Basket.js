import {useContext} from "react"
import Navbar from "../components/Navbar"
import {StoreContext} from "../context-and-reducer/StoreContext"
import BasketProduct from "../components/BasketProduct"
 

const Basket = () => {

    const {total, products} = useContext(StoreContext)
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Navbar />
            <div className="flex flex-row items-center
            justify-between mt-2 py-6 px-10
            text-xl font-medium">
            <h3>Your Basket</h3>
            <p>Total £{total.toFixed(2)}</p>
            </div>
            {products.map((product, i) => (
                <BasketProduct 
                key={i}
                item={product}
                />
            ))}
        </div>
    )
}

export default Basket