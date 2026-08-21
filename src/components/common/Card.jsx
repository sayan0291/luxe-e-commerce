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
            imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeZIJJoDhmaT03pAtTXSBKDIfe1VGWGn4PBCIDLcrFlDg_HvjncN1JIFlkRXLQ4wDZT47rUqJKC0qx0vHy9zkNXQJMksxY3JCG9fyC5k2sjD--tILdUmBhzCA7bQFCazejyDwh9pGzPbD-6ASn1M2o9FLcdJCnzBGksx8OyfqxJudDQIsztv4lQUtgTFeI-nc88mrpPz4M66fDpiPhXLQ8-shN8PKiocF1gMqLqbQqQK7IAgEmCFGksxniwFs6PBg1-B1lVTGJsm7b",
            title: "Satin Slip Dress",
            price: "$340.00",
            altData: "A studio shot of a minimalist black silk slip dress draped elegantly on a slender mannequin against a warm beige background. The lighting is high-key and soft, emphasizing the fluidity and sheen of the silk fabric. The image is clean, high-end, and focused entirely on the garment's silhouette and premium material."
        },
        structuredBlazer: {
            imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXMzket7kehxxDOElnZkeBtl-eH5dtBjl4Q2qi9KpP2HRAFP8PJ1IYIO4ts67fvDHjjxfCt4TbIWSCiH5VuWcoOyEfQiCA3CUdiLMlesT5M7dAMw5QjD32c9WrcF-ehpod4HLVfP18vm1PAHIl5gGb9ByN4FXDx2OaZ1g_yfF_TpA70rqeZvoKezalCaGPqaWr1q2dlj5PQi8kd5WfcVBU4V5iVIZaR0TVljj8F051qDYsA2sPFB3a_y6U586oVW1tWp54b2DYevrL",
            title: "Structured Blazer",
            price: "$580.00",
            altData: "A minimalist product shot of an oversized tailored wool blazer in charcoal gray. The blazer is hung on a slim black metal hanger against a pristine white wall. Sharp, direct lighting creates a dramatic shadow, highlighting the garment's structural shoulders and premium craftsmanship. Modern, professional, and starkly beautiful."
        },
        signatureTote: {
            imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlvUr5TH4DSD-t1tY_Ugsnwfh5tlWPIr17C7IU6BNAn_IgCeC2wjWcbnWtti3KeKfwo4cO6vGZsZXdn4ig6ObD_t5GKUMqiNwWpK4nqJZIuPaZ3L47WTfkql4Z1IWL0wlMWzWDB2KBhpXWuH3k7ZqFiorjgf3cdKWFUDEKg2rHdT9TOjbtye-4nljg1pP3DlxwgNaq8-woTL_i3rlQl9osxV8TxRiokSP_Z6wDfABziPQjdiBBhNJbZ7AbMyps7v1fZQZd4W4KsDmv",
            title: "Signature Tote",
            price: "$890.00",
            altData: "A clean, minimalist shot of a high-end leather tote bag in a rich cream color, sitting on an oak wood pedestal. The background is a soft, out-of-focus interior with neutral tones. Soft natural light spills from a side window, illuminating the smooth texture of the leather and the subtle brand embossing. Elegant and timeless aesthetic."
        },
        atelierSneaker: {
            imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEOIGX0oCqrTQl64Ee_nYd9qW1o01hJdr_Au9nLUPOWUE0Q7dIJyrLUKfUWawmugo1fGSYerm210EPinwsGh3qYrAY4PTdnthyta1ZvIBX2iQoFWPoUOmI59skx32Jr0-QtcXv_2HZLoulZAHq0cDbLoEFHcuMkxESwoqJUDbrQzdGAMucLVqkCoVBel3a6468jqxBTkH7cl2dO2uNzCWpEF1y5_8-l1zXUE9WfHF_f0EDpQt2qx6-uWCeSIOA2z3aUm4kSegZCN-8",
            title: "Atelier Sneaker",
            price: "$295.00",
            altData: "Close-up detail of a pair of minimalist white leather sneakers with a slim profile. The sneakers are resting on a reflective black glass surface, creating a mirror effect. The lighting is cool-toned and architectural, highlighting the clean stitch lines and the matte finish of the leather. High-contrast, premium, and contemporary."
        },
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