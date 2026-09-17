import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { FormField,CheckBox, FormHeader, SuccessHeader } from "../components";
import { registerValidationRules } from "../config/formValidation";
import { zodResolver } from "@hookform/resolvers/zod"

export const Register = () => {

    const { register,handleSubmit,formState: { errors,isSubmitting } } = useForm({
        resolver: zodResolver(registerValidationRules),
        mode: "onChange"
    });

      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState();
      const [registered, setRegistered] = useState(false);

      const onSubmit = async (data) => {
        console.log("i am clicked")
        await new Promise((resolve) => setTimeout(resolve,2000))
        setFormData(data)
        setRegistered(true)
      }
      
    return(
        <>
             <main className="flex-1 flex-jc-ic px-6 pt-25 pb-4">
                <div className="bg-white border border-neutral-200/70 p-8 sm:p-12 shadow-sm relative transition-all duration-300">
                    {/* Header */}
                    <FormHeader textp="Join the atelier for curated private views, preview releases, and bespoke service." />

                    {registered ? (
                        <SuccessHeader />
                    ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Full name row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField label="First Name" id="firstName" type="text" name="firstName" placeholder="Jane" register={(n) => register("firstName")} error={errors.firstName} />
                            <FormField label="Last Name" id="lastName" type="text" name="lastName" placeholder="Doe" register={(n) => register("lastName")} error={errors.lastName} />
                        </div>

                        {/* Email */}
                            <FormField label="Email" id="email" type="email" name="email" placeholder="example@gmail.com" register={(n) => register("email")} error={errors.email} />

                        {/* Password with strength visualizer */}
                        <FormField label="Password" id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Password" register={(n) => register("password")} error={errors.password} >
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-500 transition-colors"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                            {showPassword ? (
                                <Eye strokeWidth={1.5} />
                            ) : (
                                <EyeOff strokeWidth={1.5} />
                            )}
                            </button>
                        </FormField>
                        <FormField label="Confirm Password" id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" register={(n) => register("confirmPassword")} error={errors.confirmPassword} />

                        {/* Terms */}
                        <CheckBox id="terms" name="terms" register={(n) => register("terms")} error={errors.terms} >
                            I accept the <a href="#" className="link-text">Terms of Service</a> and <a href="#" className="link-text">Privacy Policy</a>
                        </CheckBox>

                        {/* Submit button */}
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white hover:bg-neutral-800 disabled:opacity-50 py-3.5 px-6 text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
                        >
                        {isSubmitting ? (
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