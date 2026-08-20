import { FadeUp, ImageCard, Header } from "../components"

export const Hero = () => {
    return(
        <>
            <section className="hero-section">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover" data-alt="..." src="/enhanced_unnamed.png"/>
                </div>
                <div>
                    <FadeUp className="reveal active bg-[rgba(0,0,0,0.4)]/95 rounded p-5 sm:p-lg md:p-xl md:w-[70%] lg:w-[50%] mt-10">
                        <h1 className="font-display text-display-mobile md:text-display text-primary mb-md leading-[1.1]">The Art of <br/>Curated Living</h1>
                        <p className="font-body-lg text-body-lg text-surface mb-lg">Discover our latest collection of architectural silhouettes and elevated essentials designed for the modern individual.</p>
                        <a className="inline-block bg-yellow-900 text-on-primary px-xl py-md font-label-md text-label-md uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" href="#featured">Shop Now</a>
                    </FadeUp>
                </div>
            </section>
                <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="featured">
                    <Header title="Featured Collections" />
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px] md:h-[600px]">
                        <FadeUp className="md:col-span-8 relative group overflow-hidden" >
                            <ImageCard varient="newArrivals"  />
                        </FadeUp>
                        <FadeUp className="md:col-span-4 relative group overflow-hidden" >
                            <ImageCard varient="bestSellers" />
                        </FadeUp>
                    </div>
                </section>
        </>
    )
}