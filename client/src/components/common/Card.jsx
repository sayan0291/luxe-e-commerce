import { Button } from "./Button.jsx";
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

export const RapidApiProducts = ({obj,categoryParam,...props}) => {
    let className;

    if(categoryParam === "laptops"){
        className = ""
    }else {
        className = "aspect-[3/4]"
    }

    return(
        <>
            <div className="group" {...props}>
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


export const SizeSelector = ({size,activeSizeId,setActiveSizeId}) => {
    return(
        <>
            <h3 className="filter-h3 mb-1">
                Size
            </h3>
            <div className="grid grid-cols-5 w-[50%] gap-xs">
                {
                    size.map(obj => (<Button key={obj.id} varient="filterBtnSize" className={`${activeSizeId === obj.id ? 'bg-primary text-white' : ''}`} onClick={() => setActiveSizeId(obj.id)} >{obj.name}</Button>))
                }
            </div>
        </>
    )
}

export const ColorSelector = () => {
    return(
        <>
            <div className="flex flex-col space-y-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-widest">Color: Black</span>
                <div className="flex gap-sm">
                    <button className="w-8 h-8 rounded-full bg-primary border-2 border-primary ring-2 ring-offset-2 ring-primary transition-all"></button>
                    <button className="w-8 h-8 rounded-full bg-[#E5E2E1] border-2 border-transparent hover:border-primary transition-all"></button>
                    <button className="w-8 h-8 rounded-full bg-[#3D3E42] border-2 border-transparent hover:border-primary transition-all"></button>
                </div>
            </div>
        </>
    )
}

export const SearchInput = () => {
    return(
        <>
           <div className="flex items-center border focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden" >
                <input
                    type="text"
                    placeholder="Search for products"
                    className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0 0 30 30"
                    fill="#6B7280"
                >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
                </div>
        </>
    )
}