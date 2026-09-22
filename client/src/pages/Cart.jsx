import { CartItem,EmptyState,Header,OrderSummary } from "../components"

export const Cart = () => {
    return(
        <>
            <div className="py-24 px-5">
                <Header className="mb-gutter" title="Your Bag" />
                <p className="font-body-lg text-body-lg text-secondary mt-xs max-w-2xl">Review your selection before proceeding to checkout.</p>
            </div>
            
        </>
    )
}