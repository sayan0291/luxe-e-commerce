import { useNavigate } from "react-router-dom"
import { FadeUp, Header, ImageCard, Button } from "../components"

export const Collections = () => {

    const navigate =  useNavigate();

    const handleClick = (category) => {
        navigate(`/shoping?category=${category}`)
    }

    return(
        <main className="collection-section">
            <header>
                <div>
                    <Header className="mb-gutter" title="Curated Collections" />
                    <p className="font-body-lg text-body-lg text-secondary mt-xs max-w-2xl">Explore our definitive edits. A masterclass in high-end minimalism, designed for the modern purist.</p>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-label-md font-label-md text-secondary">
                    <span>View:</span>
                    <button className="text-primary border-b border-primary pb-0.5">Grid</button>
                    <button className="hover:text-primary transition-colors duration-200">Editorial</button>
                </div>
            </header>

            <div className="collection-section-body">
                <Button varient="categoryBtn" className="md:col-span-8 md:row-span-2 " onClick={() => handleClick('womens-wear')} >
                    <ImageCard varient="womensWear" className3="self-start" />
                    <span className="absolute right-5 bottom-5 material-symbols-outlined text-sm text-surface" data-icon="arrow_forward">arrow_forward</span>
                </Button>
                <Button varient="categoryBtn" className="md:col-span-4 md:row-span-1" onClick={() => handleClick('mens-wear')}>
                    <ImageCard varient="mensWear" className3="self-start" />
                </Button>
                <Button varient="categoryBtn" className="md:col-span-4 md:row-span-1" onClick={() => handleClick('watches')}>
                    <ImageCard className="h-[100%]" className3="self-start" varient="watches" />
                </Button>
                <Button varient="categoryBtn" className="md:col-span-4 md:row-span-1" onClick={() => handleClick('laptop')}>
                    <ImageCard className="h-[50%]" varient="laptop" />
                </Button>
                <Button varient="categoryBtn" className="md:col-span-4 md:row-span-1" onClick={() => handleClick('kids-wear')}>
                    <ImageCard varient="kidswear" />
                </Button>
                <Button varient="categoryBtn" className="md:col-span-2 md:row-span-1" onClick={() => handleClick('mens-footwear')}>
                    <ImageCard varient="mensFootWear" className="h-[70%]" className2="p-0" />
                </Button>
                <Button varient="categoryBtn" className="md:col-span-2 md:row-span-1" onClick={() => handleClick('womens-footwear')}>
                    <ImageCard varient="womensFootWear" className="h-[70%]" className2="p-0" />
                </Button>
            </div>
        </main>
    )
}
