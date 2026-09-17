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

export const CheckBox = ({id,name,register,children,error}) => {
    return(
        <>
            <div className="flex flex-col gap-2.5">
                <div className="flex-ic gap-2.5">
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
                {error && (
                    <span className="text-xs text-red-500 mt-1 font-medium lowercase tracking-wide">
                    * {error.message}
                    </span>
                )}
            </div>
        </>
    )
}

export const FormHeader = ({texth1="Create an Account",textp=""}) => {
    return (
        <>
            <div className="text-center mb-8">
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-medium">LUXE Client</span>
                <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 mt-2 mb-2">{texth1}</h1>
                <p className="text-xs text-neutral-500 font-light">{textp}</p>
            </div>
        </>
    )
}

export const SuccessHeader = () => {
    return(
        <>
            <div className="py-12 text-center w-full space-y-4">
                <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mx-auto text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Membership Created</h3>
                <p className="text-xs text-neutral-500 mx-auto">
                A verification link has been sent to <span className="font-medium text-black">{formData.email}</span>. Please verify your email to access your client portal.
                </p>
                <div className="pt-4">
                <a href="#" className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                    Go to Sign In
                </a>
                </div>
            </div>
        </>
    )
}