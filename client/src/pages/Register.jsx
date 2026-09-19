import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { FormInput,CheckBox, FormHeader, SuccessHeader, ChoseField,FormButton } from "../components";
import { registerValidationRules } from "../config/formValidation";
import { zodResolver } from "@hookform/resolvers/zod"
import { apiAuthDataHandle } from "../api/apiAuthDataHandle";

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
        await apiAuthDataHandle();
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
                        <SuccessHeader formData={formData} />
                    ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Full name row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormInput label="First Name" id="firstName" type="text" name="firstName" placeholder="Jane" register={(n) => register("firstName")} error={errors.firstName} />
                            <FormInput label="Last Name" id="lastName" type="text" name="lastName" placeholder="Doe" register={(n) => register("lastName")} error={errors.lastName} />
                        </div>

                        {/* Email */}
                            <FormInput label="Email" id="email" type="email" name="email" placeholder="example@gmail.com" register={(n) => register("email")} error={errors.email} />

                        {/* Password with strength visualizer */}
                        <FormInput label="Password" id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Password" register={(n) => register("password")} error={errors.password} >
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
                        </FormInput>
                        <FormInput label="Confirm Password" id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" register={(n) => register("confirmPassword")} error={errors.confirmPassword} />

                        {/* Terms */}
                        <CheckBox id="terms" name="terms" register={(n) => register("terms")} error={errors.terms} >
                            I accept the <a href="#" className="link-text">Terms of Service</a> and <a href="#" className="link-text">Privacy Policy</a>
                        </CheckBox>

                        {/* Submit button */}
                        <FormButton isSubmitting={isSubmitting} text="Create an Account" />
                    </form>
                    )}
                    {!registered && (<ChoseField />)}
                </div>
                </main>
        </>
    )
}