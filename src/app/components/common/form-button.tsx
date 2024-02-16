'use client'
import { useFormStatus } from "react-dom"
import { Button } from "@nextui-org/react"

interface FormButtonProps{
    children:React.ReactNode
}

export default function FormButton({children}:FormButtonProps){
    const {pending}=useFormStatus();
    return <Button isLoading={pending} type="submit">{children}</Button>

}