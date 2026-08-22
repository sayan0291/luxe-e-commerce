import { FadeUp, Header, ImageCard } from "../components"

export const Collections = () => {
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
                <button className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-surface-container flex items-end">
                    <ImageCard varient="minimalists" />
                    <span class="absolute right-5 bottom-5 material-symbols-outlined text-sm text-surface" data-icon="arrow_forward">arrow_forward</span>
                </button>
                <button className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-surface-container flex items-end">
                    <ImageCard varient="urbanArchive" />
                </button>
                <button className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-surface-container flex items-end">
                    <ImageCard varient="coreEssentials" />
                </button>
            </div>
        </main>
    )
}
