import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"

export const Register = () => {

    const { register,handleSubmit,formState: { errors } } = useForm();

      const [showPassword, setShowPassword] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [registered, setRegistered] = useState(false);
      const [focusedField, setFocusedField] = useState(null);

      // Password strength indicators
      const hasLength = formData.password.length >= 8;
      const hasNumber = /\d/.test(formData.password);
      const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);

      const strengthScore = [hasLength, hasNumber, hasSpecial].filter(Boolean).length;
      
    return(
        <>
             <main className="flex-1 flex-jc-ic px-6 pt-25 pb-4">
                <div className="bg-white border border-neutral-200/70 p-8 sm:p-12 shadow-sm relative transition-all duration-300">
                    {/* Header */}
                    <div className="text-center mb-8">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-medium">LUXE Client Membership</span>
                    <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 mt-2 mb-2">Create an Account</h1>
                    <p className="text-xs text-neutral-500 font-light">Join the atelier for curated private views, preview releases, and bespoke service.</p>
                    </div>

                    {registered ? (
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
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full name row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label 
                            htmlFor="firstName" 
                            className={`block text-[11px] uppercase tracking-wider font-medium mb-1.5 transition-colors ${
                                focusedField === 'firstName' ? 'text-black' : 'text-neutral-500'
                            }`}
                            >
                            First Name
                            </label>
                            <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Jane"
                            className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-300 rounded-none focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
                            />
                        </div>
                        <div>
                            <label 
                            htmlFor="lastName" 
                            className={`block text-[11px] uppercase tracking-wider font-medium mb-1.5 transition-colors ${
                                focusedField === 'lastName' ? 'text-black' : 'text-neutral-500'
                            }`}
                            >
                            Last Name
                            </label>
                            <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Doe"
                            className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-300 rounded-none focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
                            />
                        </div>
                        </div>

                        {/* Email */}
                        <div>
                        <label 
                            htmlFor="email" 
                            className={`block text-[11px] uppercase tracking-wider font-medium mb-1.5 transition-colors ${
                            focusedField === 'email' ? 'text-black' : 'text-neutral-500'
                            }`}
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="name@domain.com"
                            className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-300 rounded-none focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                        </div>

                        {/* Password with strength visualizer */}
                        <div>
                        <label 
                            htmlFor="password" 
                            className={`block text-[11px] uppercase tracking-wider font-medium mb-1.5 transition-colors ${
                            focusedField === 'password' ? 'text-black' : 'text-neutral-500'
                            }`}
                        >
                            Create Password
                        </label>
                        <div className="relative">
                            <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('password')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Min. 8 characters"
                            className="w-full pl-4 pr-11 py-3 text-sm bg-neutral-50/50 border border-neutral-300 rounded-none focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
                            />
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-black transition-colors"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                            {showPassword ? (
                                <Eye />
                            ) : (
                                <EyeOff />
                            )}
                            </button>
                        </div>

                        {/* Interactive Strength Meter */}
                        {formData.password && (
                            <div className="mt-2 space-y-1.5">
                            <div className="flex gap-1.5 h-1">
                                <div className={`flex-1 transition-colors ${strengthScore >= 1 ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>
                                <div className={`flex-1 transition-colors ${strengthScore >= 2 ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>
                                <div className={`flex-1 transition-colors ${strengthScore >= 3 ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-neutral-400 tracking-wide font-light">
                                <span className={hasLength ? 'text-black font-normal' : ''}>• 8+ characters</span>
                                <span className={hasNumber ? 'text-black font-normal' : ''}>• Includes number</span>
                                <span className={hasSpecial ? 'text-black font-normal' : ''}>• Includes symbol</span>
                            </div>
                            </div>
                        )}
                        </div>

                        {/* Newsletter & Terms */}
                        <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-2.5">
                            <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 rounded-none accent-black border-neutral-300 cursor-pointer"
                            />
                            <label htmlFor="newsletter" className="text-xs text-neutral-600 font-light select-none cursor-pointer">
                            Receive early invitations to seasonal collections and atelier editorial drops.
                            </label>
                        </div>

                        <div className="flex items-start gap-2.5">
                            <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            checked={formData.terms}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 rounded-none accent-black border-neutral-300 cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-neutral-600 font-light select-none cursor-pointer">
                            I accept the <a href="#" className="text-black underline underline-offset-2">Terms of Service</a> and <a href="#" className="text-black underline underline-offset-2">Privacy Policy</a>.
                            </label>
                        </div>
                        </div>

                        {/* Submit button */}
                        <button
                        type="submit"
                        disabled={isLoading || !formData.terms}
                        className="w-full bg-black text-white hover:bg-neutral-800 disabled:opacity-50 py-3.5 px-6 text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
                        >
                        {isLoading ? (
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            <>
                            <span>Create Account</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            </>
                        )}
                        </button>
                    </form>
                    )}

                    {/* Switch to Login */}
                    <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
                    <p className="text-xs text-neutral-500 font-light">
                        Already registered with LUXE?{' '}
                        <a href="#" className="font-medium text-black underline underline-offset-4 hover:opacity-75 transition-opacity">
                        Sign in here
                        </a>
                    </p>
                    </div>
                </div>
                </main>
        </>
    )
}