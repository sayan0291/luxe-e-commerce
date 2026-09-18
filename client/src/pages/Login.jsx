import { useForm } from "react-hook-form";
import { loginValidationRules } from "../config/formValidation";
import { FormHeader, SuccessHeader,FormField, ChoseField, FormButton } from "../components";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye,EyeOff } from "lucide-react";

export const Login = () => {

    const { register,handleSubmit,formState: { errors,isSubmitting } } = useForm({
        resolver: zodResolver(loginValidationRules),
        mode: "onChange"
    })

    const [login,setLogin] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [formData, setFormData] = useState();

    const onSubmit = async (data) => {
        console.log("i am clicked on Login")
        await new Promise((resolve) => setTimeout(resolve,2000))
        setFormData(data)
        setLogin(true)
    }

    return(
        <>
            <main className="flex-1 flex-jc-ic px-6 pt-25 pb-4">
                <div className="bg-white border border-neutral-200/70 p-8 sm:p-12 shadow-sm relative transition-all duration-300">
                    {/* Header */}
                    <FormHeader texth1="Welcome Back" textp="Access your private atelier orders, saved pieces, and tailored services." />

                    {
                        login ? (<SuccessHeader formData={formData} texth3="Logged In" className="hidden" />) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <FormField label="Email" id="email" type="email" name="email" placeholder="example@gmail.com" register={(n) => register("email")} error={errors.email} />
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
                                <FormButton isSubmitting={isSubmitting} text="Login" />
                            </form>
                        )
                    }
                    {!login && (<ChoseField textp="Don't have an Luxe account?" texta="up" to="/register" />)}
                </div>
            </main>
        </>
    )
}