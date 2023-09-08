"use client";

import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const[variant, setVariant] = useState<Variant>('LOGIN');

    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVariant('REGISTER')
        } else{
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        if(variant === 'REGISTER'){
            // Axios Register
        }
        if(variant === 'LOGIN'){
            //Next Auth Sign in
        }
    }
  return (
    <div>AuthForm2</div>
  )
}

export default AuthForm