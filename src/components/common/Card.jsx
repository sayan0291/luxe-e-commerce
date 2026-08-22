import { title } from "motion/react-client";

const imageCardDetails = {
    newArrivals: {
        imgSrc: "/new-arrivals.png",
        title: "New Arrivals",
        description: "Explore Edition 01",
        altData: "A high-fashion editorial portrait of a model wearing a minimalist, structured white wool coat against a stark, light gray concrete architectural background. The composition is asymmetrical and high-fashion, utilizing sharp lines and negative space. Soft morning light creates subtle tonal gradations, emphasizing the texture of the fabric and the clean luxury aesthetic."
    },
    bestSellers: {
        imgSrc: "/best-sellers.png",
        title: "Best Sellers",
        description: "Shop Icons",
        altData: "A close-up aesthetic shot of luxury leather accessories—a structured black handbag and a pair of minimalist loafers—arranged on a white marble surface. The lighting is crisp and overhead, highlighting the premium grain and matte finish of the leather. The mood is sophisticated, professional, and intentionally curated, with a restricted palette of black, white, and gray."
    },
    trendingProducts: {
        satinSlipDress: {
            imgSrc: "/products/dress-photo.png",
            title: "Satin Slip Dress",
            price: "$340.00",
            altData: "A studio shot of a minimalist black silk slip dress draped elegantly on a slender mannequin against a warm beige background. The lighting is high-key and soft, emphasizing the fluidity and sheen of the silk fabric. The image is clean, high-end, and focused entirely on the garment's silhouette and premium material."
        },
        structuredBlazer: {
            imgSrc: "/products/blazer-photo.png",            
            title: "Structured Blazer",
            price: "$580.00",
            altData: "A minimalist product shot of an oversized tailored wool blazer in charcoal gray. The blazer is hung on a slim black metal hanger against a pristine white wall. Sharp, direct lighting creates a dramatic shadow, highlighting the garment's structural shoulders and premium craftsmanship. Modern, professional, and starkly beautiful."
        },
        signatureTote: {
            imgSrc: "/products/bag-photo.png",
            title: "Signature Tote",
            price: "$890.00",
            altData: "A clean, minimalist shot of a high-end leather tote bag in a rich cream color, sitting on an oak wood pedestal. The background is a soft, out-of-focus interior with neutral tones. Soft natural light spills from a side window, illuminating the smooth texture of the leather and the subtle brand embossing. Elegant and timeless aesthetic."
        },
        atelierSneaker: {
            imgSrc: "/products/shoe-photo.png",
            title: "Atelier Sneaker",
            price: "$295.00",
            altData: "Close-up detail of a pair of minimalist white leather sneakers with a slim profile. The sneakers are resting on a reflective black glass surface, creating a mirror effect. The lighting is cool-toned and architectural, highlighting the clean stitch lines and the matte finish of the leather. High-contrast, premium, and contemporary."
        },
    },
    minimalists: {
        imgSrc: "/minimalists.png",
        title: "New Arrivals",
        description: "Explore Edition 01",
        altData: "A striking high-fashion editorial photograph of a model wearing stark, minimalist structural clothing in pristine white and deep black. The setting is a bright, airy gallery space with concrete floors and soft, diffused natural light pouring in from large windows. The mood is serene, elevated, and quietly luxurious, emphasizing clean lines and perfect tailoring."
    },
    urbanArchive: {
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcnHpe-NPvEr1pzSR2eqEKf6YA1Oxu-1UTZuLHfLyNiQNI9_ms3krKhCC8PeVcdndo84gM9VpH-OGrPA1GAZ_euQFMsr5OpN9Kd87ZMt01f0D_UiKuERgW9MYdRcTXNXmkE50GBvbyBZNoN5CTEiHTACNNXGHH7IywlUkHqHryUEYkWpP-JE5KDeC7LKlMO7jquXVIbHO9LLGQZ7i42HiZOWTlMCVnWmm0LYUPpHrphoFFZBvWUJolNw",
        title: "Urban Archive",
        description: "Utility redefined",
        altData: "A close-up fashion photography shot focusing on premium textured fabrics, specifically a heavy, dark charcoal wool blend coat. The lighting is moody and directional, highlighting the weave of the fabric and the sharp, structured collar. The aesthetic is modern urban utility mixed with high-end luxury, shot against a soft grey background."
    },
    coreEssentials: {
        imgSrc: "/coreEssentials.png",
        title: "Core Essentials",
        description: "The foundation.",
        altData: "A meticulously styled flat lay of luxury wardrobe essentials on a stark white background. The composition includes a crisp white cotton shirt, a perfectly tailored black leather belt, and minimalist silver jewelry. The lighting is flat and bright, creating a clean, graphic, and highly organized visual aesthetic typical of high-end catalog imagery."
    }
}

export const ImageCard = ({varient="newArrivals"}) => {
    const {imgSrc,title,description,altData} = imageCardDetails[varient];
 return(
    <>
        <div className="w-full h-full">
            <img className="w-full h-full object-cover transition-transform duration-700" data-alt={altData} src={imgSrc}/>
        </div>
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-lg opacity-100 group-hover:bg-black/30 transition-all">
            <h3 className="font-display text-headline-lg text-white uppercase mb-base">{title}</h3>
            <a className="font-label-sm text-label-sm text-white uppercase tracking-widest border-b border-white w-fit pb-1" href="#">{description}</a>
        </div>
    </>
 )
}

export const ProductCard = ({varient="trendingProducts",product="satinSlipDress"}) => {
    const { imgSrc,title,price,altData } = imageCardDetails[varient][product];

    return(
        <>
            <div className="group">
                <div className="relative overflow-hidden mb-md aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt={altData} src={imgSrc} />
                <button className="absolute bottom-4 left-4 right-4 bg-white text-primary py-xs font-label-sm text-label-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">QUICK ADD</button>
                </div>
                <h4 className="font-label-md text-label-md text-primary uppercase mb-base">{title}</h4>
                <p className="font-body-md text-body-md text-secondary">{price}</p>
            </div>
        </>
    )
}