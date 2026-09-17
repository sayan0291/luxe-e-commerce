export const FormField = ({label,id,type="text",placeholder,register,error,name,children=""}) => {
    return(
        <>
            <div className="group flex flex-col w-full mb-4" >
                {label && (
                    <label 
                        htmlFor={id} 
                        className={`block text-[11px] uppercase tracking-wider font-medium mb-1.5 transition-colors
                            group-focus-within:text-black text-neutral-500
                            ${error ? 'text-red-500 group-focus-within:text-red-500' : ''}`}
                        >
                    {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        {...register(name)}
                        className={`w-full px-4 py-3 text-sm bg-neutral-50/50 border rounded-none focus:outline-none focus:bg-white transition-all placeholder:text-neutral-400
                                        ${error 
                                            ? "border-red-500 focus:border-red-500" 
                                            : "border-neutral-300 focus:border-black"
                                    }`}
                    />
                    {
                        children
                    }
                </div>
                {error && (
                    <span className="text-xs text-red-500 mt-1 font-medium lowercase tracking-wide">
                    * {error.message}
                    </span>
                )}
            </div>
        </>
    )
}

export const CheckBox = ({id,name,register,children}) => {
    return(
        <>
            <div className="flex items-start gap-2.5">
                <input
                id={id}
                name={name}
                type="checkbox"
                {...register(name)}
                className="w-4 h-4 mt-0.5 rounded-none accent-black border-neutral-300 cursor-pointer"
                />
                <label htmlFor={id} className="text-xs text-neutral-600 font-light select-none cursor-pointer">
                    {children}
                </label>
            </div>
        </>
    )
}