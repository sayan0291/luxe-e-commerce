import { useLocation } from "react-router-dom"
import { size } from "../components/common/Filter"
import { Button } from "../components"

export const ProductDetails = () => {

    const location = useLocation();

    const obj = location.state?.product;

    if (!obj) {
        return <div>No product data found</div>;
    }


    return(
        <div className="p-sm pt-30">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="w-full h-full" src="/full_suit.png" />
                <div>
                    <section>
                        <h2>{obj.Brand}</h2>
                        <p>{obj.Description}</p>
                        <h2>{obj.Price}</h2>
                    </section>
                    <section>
                        <h3 className="filter-h3">
                            Size
                        </h3>
                        <div className="grid grid-cols-5 h-[50%] w-[50%] gap-xs">
                            {
                            size.map(obj => (<Button key={obj.id} varient="filterBtnSize">{obj.name}</Button>))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}