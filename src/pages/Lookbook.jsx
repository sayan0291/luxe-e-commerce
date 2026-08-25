import { FadeUp } from "../components"

export const Lookbook = () => {
    return(
        <>
            <main className="flex-grow pt-15">
                <section className="relative h-screen flex w-full justify-end px-2 sm:px-5 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full" data-alt="hero section 1 image" src="/full_suit.png"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="relative z-10 flex lg:justify-end items-center h-full">
                        <FadeUp className="blur-card">
                            <h1 className="font-display text-display-mobile md:text-display tracking-tighter mb-sm uppercase">Autumn/Winter</h1>
                            <p className="font-body-lg text-body-lg text-on-primary/90 mb-lg w-[70%]">A study in structural elegance and stark contrast. Explore the new silhouette.</p>
                            <button className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 tracking-wider hover:opacity-90 transition-opacity duration-200">Explore Collection</button>
                        </FadeUp>
                    </div>
                </section>
            </main>
        </>
    )
}