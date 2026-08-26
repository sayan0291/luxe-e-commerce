
const varients = {
    homeBtn: "inline-block bg-blue-900 text-on-primary px-xl py-md font-label-md text-label-md uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
}

export const Button = ({className,children,varient="homeBtn"}) => {
    return(
        <>
            <button className={`${varients[varient]} ${className}`}>
                {children}
            </button>
        </>
    )
}