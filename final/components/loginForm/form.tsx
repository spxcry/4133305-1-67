import { FC } from "react";
import FormField from "./FormField";
import { FormData, loginSchema } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: FormData) =>{
        console.log("SUCCESS", data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Staff Register</h1>
                    <FormField 
                        type="email" 
                        placeholder="email" 
                        name="email" 
                        register={register} 
                        required 
                        error={errors.email} 
                    />
                    <FormField 
                        type="text" 
                        placeholder="Exp year(s)" 
                        name="exp" 
                        register={register} 
                        required
                        valueAsNumber
                        error={errors.exp} 
                    />
                    <FormField 
                        type="password" 
                        placeholder="pass" 
                        name="pass" 
                        register={register} 
                        required 
                        error={errors.pass} 
                    />
                    <FormField 
                        type="password" 
                        placeholder="Confirm Password" 
                        name="confirmPass" 
                        register={register} 
                        required 
                        error={errors.confirmPass} 
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default Form;
