
const varients = {
    homeBtn: "inline-block bg-blue-900 text-on-primary px-xl py-md font-label-md text-label-md uppercase tracking-[0.2em] hover:opacity-90 transition-opacity",
    filterBtn: "flex items-center self-start m-3 gap-base text-label-md font-label-md text-primary border border-outline-variant px-sm py-xs rounded-DEFAULT hover:border-primary transition-colors duration-200"
}

export const Button = ({className,children,varient="homeBtn",...props}) => {
    return(
        <>
            <button className={`${varients[varient]} ${className}`} {...props}>
                {children}
            </button>
        </>
    )
}