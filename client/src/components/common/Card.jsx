import { title } from "motion/react-client";
import { imageCardDetails } from "../../data/productData.js";

export const SimpleImageCard = ({imgSrc}) => {
    return(
        <>
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full" data-alt="hero section 1 image" src={imgSrc} />
            </div>
        </>
    )
}

export const ImageCard = ({className="w-full h-full",className2="p-lg",className3="",varient="newArrivals"}) => {
    const {imgSrc,title,description,altData} = imageCardDetails[varient];
 return(
    <>
        <div className="w-full h-full flex-jc-ic">
            <img className={`${className} object-cover transition-transform duration-700`} data-alt={altData} src={imgSrc}/>
        </div>
        <div className={`absolute inset-0 bg-black/20 flex flex-col justify-end ${className2} opacity-100 group-hover:bg-black/30 transition-all`} >
            <h3 className={`font-display text-headline-lg text-white uppercase mb-base ${className3}`}>{title}</h3>
            <a className="font-label-sm text-label-sm text-white uppercase tracking-widest border-b border-white w-fit pb-1" href="#">{description}</a>
        </div>
    </>
 )
}

export const DetailImageCard = ({varient="lookbook",product="product1"}) => {

    const { imgSrc,title,description,price,altData } = imageCardDetails[varient][product];
    return(
        <div class="flex-none w-[280px] md:w-[350px] snap-start group cursor-pointer">
            <div class="w-full aspect-[3/4] bg-surface-container mb-sm overflow-hidden relative">
            <img class="img-section" data-alt={altData} src={imgSrc} />
            <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1">{title}</span>
            <span class="font-body-md text-body-md text-primary font-medium mb-1">{description}</span>
            <span class="font-body-md text-body-md text-on-surface-variant">{price}</span>
            </div>
        </div>
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

export const ProductCardDetail = ({obj}) => {
    return(
        <>
            <div className="relative w-full aspect-[3/4] mb-sm overflow-hidden bg-surface-variant">
                <img className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" data-alt={obj.altData} src={obj.imgSrc} />
                <div className="absolute top-sm right-sm bg-surface/90 backdrop-blur-sm px-xs py-base text-label-sm font-label-sm uppercase tracking-wider text-primary">New</div>
            </div>
            <div className="flex flex-col gap-base">
                <h3 className="font-label-md text-label-md text-primary">{obj.title}</h3>
                <p className="font-body-md text-body-md text-secondary">{obj.price}</p>
            </div>
        </>
    )
}

export const RapidApiProducts = ({obj,categoryParam}) => {
    console.log(obj)
    let className;

    if(categoryParam === "laptops"){
        className = ""
    }else {
        className = "aspect-[3/4]"
    }

    return(
        <>
            <div className="group">
                <div className={`relative overflow-hidden mb-md ${className}`}>
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt={obj.Description} src={obj.Image} />
                </div>
                <button className="absolute bottom-4 left-4 right-4 bg-white text-primary py-xs font-label-sm text-label-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">QUICK ADD</button>
                </div>
                <h4 className="font-label-md text-label-md text-primary uppercase mb-base">{obj.Brand}</h4>
                <p className="font-body-md text-body-md text-secondary">{obj.Price}</p>
            </div>
        </>
    )
}