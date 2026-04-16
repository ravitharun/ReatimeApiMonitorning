type buttonType = {
    name: string,
    handelonClick: () => void
}

function Button({ name, handelonClick }: buttonType) {
    return (
        <>

            <button onClick={handelonClick} > {name} </button>
        </>)
}

export default Button