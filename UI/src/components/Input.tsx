import React from "react"

type Inputprops = {
    inputtype: string,
    placeholder: string,
    required: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        void

}
function Input({ inputtype, placeholder, onChange }: Inputprops) {
    return (
        <>
            <input type={inputtype} placeholder={placeholder} required onChange={onChange} />


        </>

    )
}

export default Input