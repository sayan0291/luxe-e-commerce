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