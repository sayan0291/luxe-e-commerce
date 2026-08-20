export const Header = ({title}) => {
    return(
        <>
            <div className="mb-lg reveal">
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">{title}</h2>
                <div className="h-[1px] w-20 bg-primary mt-xs"></div>
            </div>
        </>
    )
}