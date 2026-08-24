
const varients = {
    backHome: "cursor-pointer font-semibold overflow-hidden z-100 border border-green-500 group px-8 py-2"
}

export const Button = ({className,children,varient="backHome"}) => {
    return(
        <>
            <button className={`${varients[varient]} ${className}`}>
                {children}
            </button>
        </>
    )
}