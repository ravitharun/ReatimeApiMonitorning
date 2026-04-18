import React from "react"

type Inputprops = {
    inputtype: string,
    placeholder?: string | '',
    required?: boolean,
    Inputvalue?: any
    className: string,
    accept?: string | '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        void

}
function Input({ inputtype, placeholder, className, accept, onChange }: Inputprops) {
    return (
        <>
            <input type={inputtype} accept={accept} placeholder={placeholder} required onChange={onChange} className={className} />


        </>

    )
}

export default Input