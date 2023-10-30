import PricingCard from "./pringCard";

const Pricing = () => {
    return (
        <>
            <div className="pricingSec black  center">
                <div>
                    <h1>OUR PRICING</h1>
                    <p className="center">We offer affordable pricing plan. Each plan cater to different preferences and fitness aspirations.</p>
                </div>
                <div>
                    <PricingCard/>
                </div>
            </div>
        </>
    )
}
export default Pricing;