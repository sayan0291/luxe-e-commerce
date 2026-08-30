import { NavLink } from "react-router-dom"
import { FadeUp, ImageCard, Header, ProductCard, Button, SimpleImageCard } from "../components"

export const Hero = () => {
    return(
        <main className="hero-section">
            <section className="hero-section-1 section-align pt-15">
                <SimpleImageCard imgSrc="/enhanced_unnamed.png" />
                <div>
                    <FadeUp className="blur-card md:w-[70%] lg:w-[50%]">
                        <h2>The Art of <br/>Curated Living</h2>
                        <p>Discover our latest collection of architectural silhouettes and elevated essentials designed for the modern individual.</p>
                        <Button varient="homeBtn" >
                            Shop Now
                        </Button>
                    </FadeUp>
                </div>
            </section>
            <section className="hero-section-2" id="featured">
                <Header className="mb-lg" title="Featured Collections" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px] md:h-[600px]">
                    <FadeUp className="md:col-span-8 relative group overflow-hidden" >
                        <ImageCard varient="newArrivals"  />
                    </FadeUp>
                    <FadeUp className="md:col-span-4 relative group overflow-hidden" >
                        <ImageCard varient="bestSellers" />
                    </FadeUp>
                </div>
            </section>
            <section className="hero-section-3">
                <div className="max-w-container-max mx-auto">
                    <div className="flex justify-between items-end mb-lg reveal">
                        <div>
                            <Header className="mb-gutter" title="Trending Now" />
                            <p className="font-body-md text-body-md text-secondary mt-base">The pieces everyone is talking about.</p>
                        </div>
                        <a className="hidden md:block font-label-md text-label-md text-primary uppercase border-b border-primary hover:opacity-70" href="#">View All</a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                    {/* <!-- Product 1 --> */}
                        <ProductCard varient="trendingProducts" product="satinSlipDress" />
                    {/* <!-- Product 2 --> */}
                        <ProductCard varient="trendingProducts" product="structuredBlazer" />
                    {/* <!-- Product 3 --> */}
                        <ProductCard varient="trendingProducts" product="signatureTote" />
                    {/* <!-- Product 4 --> */}
                        <ProductCard varient="trendingProducts" product="atelierSneaker" />
                    </div>
                </div>
            </section>
            <section className="hero-section-4">
                <div className="max-w-2xl mx-auto reveal">
                <span>Our Philosophy</span>
                <blockquote>"Luxury is not about abundance, it is about the perfection of the few things that truly matter."
                            </blockquote>
                <div className="h-[1px] w-12 bg-primary mx-auto mb-lg"></div>
                    <NavLink className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-primary hover:opacity-70 transition-opacity" to="/lookbook">Read the Lookbook</NavLink>
                </div>
            </section>
        </main>
    )
}