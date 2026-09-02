
const varients = {
    homeBtn: "inline-block bg-blue-900 text-on-primary px-xl py-md font-label-md text-label-md uppercase tracking-[0.2em] hover:opacity-90 transition-opacity",
    filterBtn: "flex items-center self-start m-3 gap-base text-label-md font-label-md text-primary border border-outline-variant px-sm py-xs rounded-DEFAULT hover:border-primary transition-colors duration-200",
    categoryBtn: "group relative overflow-hidden bg-surface-container flex items-end",
    filterBtnCategory: "px-md py-xs border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors",
    filterBtnSize: "aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors",
    applyBtn: "py-sm text-label-md uppercase tracking-widest bg-primary text-on-primary hover:opacity-90 transition-opacity rounded-DEFAULT",
    clearBtn: "py-sm text-label-md uppercase tracking-widest border border-outline-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
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