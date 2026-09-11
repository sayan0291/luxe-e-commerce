import { NavLink } from "react-router-dom"
import { FadeUp,Button, SimpleImageCard, DetailImageCard } from "../components"

export const Lookbook = () => {
    return(
        <>
            <main className="lookbook-section">
                <section className="lookbook-section-2">
                    <div>
                    {/* <!-- Left Text Block --> */}
                        <div>
                            <span>Chapter 01</span>
                            <h2>The Architecture of Cloth</h2>
                            <p>
                                This season, we deconstruct traditional tailoring to its purest geometric forms. Negative space becomes as important as the fabric itself, creating a dialogue between the wearer and the void.
                            </p>
                            <NavLink className="font-label-md text-label-md text-primary uppercase tracking-wider border-b border-primary pb-1 self-start hover:text-secondary hover:border-secondary transition-colors duration-200" to="/shop-trailoring">Shop Tailoring</NavLink>
                        </div>
                    {/* <!-- Right Image Portrait --> */}
                        <div>
                            <img className="img-section" data-alt="A close-up fashion portrait focusing on the architectural details of a sharply tailored black wool blazer. The garment features exaggerated, angular shoulders and a cinched waist. The model's face is partially obscured by shadows, directing focus entirely to the pristine construction and high-quality texture of the fabric. The background is a flat, matte off-white, emphasizing the stark contrast and premium minimalist aesthetic of the clothing." src="/half_blazzer.png"/>
                        </div>
                    </div>
                </section>
                    {/* <!-- Full Bleed Break --> */}
                <section className="w-full h-[512px] md:h-[716px] relative overflow-hidden">
                    <SimpleImageCard imgSrc="/_women.png" />
                </section>

                <section className="lookbook-section-4">
                    <div>
                    {/* <!-- Top Image Landscape --> */}
                        <div className="md:col-span-8 overflow-hidden h-[409px] md:h-[500px]">
                            <img className="img-section" data-alt="A horizontal landscape orientation image showing a model reclining on a modernist, low-profile leather sofa. The model is wearing a draped, fluid silk dress in a pristine, icy white. The setting is an austere, high-ceilinged room with massive windows letting in soft, diffused natural light. The mood is calm, luxurious, and effortlessly elegant, adhering strictly to a high-key, minimalist visual language." src="/hall_image.png"/>
                        </div>
                    {/* <!-- Blank space for grid offset --> */}
                        <div className="hidden md:block md:col-span-4"></div>
                    {/* <!-- Text Block --> */}
                        <div>
                            <span>Chapter 02</span>
                            <h2>Fluid Dynamics</h2>
                            <p>
                                Softness rendered with precision. Silk and light wools that drape with intent, offering movement without losing the defining silhouette.
                            </p>
                        </div>
                    {/* <!-- Bottom Image Portrait --> */}
                        <div className="md:col-span-5 md:col-start-7 mt-0 md:-mt-[200px] z-10 overflow-hidden h-[512px] md:h-[700px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" data-alt="A vertical portrait image of a model mid-stride against a solid light-grey studio backdrop. The model is wearing wide-leg trousers and a semi-sheer, fluid blouse in tonal shades of grey. The fabric is captured in motion, demonstrating its lightweight, luxurious drape. The lighting is even and soft, maintaining a bright, clean, premium aesthetic with zero visual clutter." src="/walkking_woman.png"/>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-container-low py-xl overflow-hidden">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-lg flex justify-between items-end">
                        <h3 className="font-headline-md text-headline-md text-primary tracking-tight">Featured Pieces</h3>
                        <div className="flex space-x-sm">
                        <button className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200">
                        <span className="material-symbols-outlined text-sm m-0" data-icon="arrow_back">arrow_back</span>
                        </button>
                        <button className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200">
                        <span className="material-symbols-outlined text-sm m-0" data-icon="arrow_forward">arrow_forward</span>
                        </button>
                        </div>
                    </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-margin-mobile md:pl-margin-desktop space-x-gutter pb-md">
                    <DetailImageCard product="product1" />
                    <DetailImageCard product="product2" />
                    <DetailImageCard product="product3" />
                    <DetailImageCard product="product4" />
                </div>
                </section>
            </main>
        </>
    )
}