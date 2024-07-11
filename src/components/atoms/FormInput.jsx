const FormInput = ({label, ...otherProps}) => {
    return(
        <div className="flex flex-col w-full">
             <label className="font-[garamond] text-[0.875rem]">{label}</label>
            <input {...otherProps} className="h-[3.5rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full" /> 
        </div>
    )
}

export default FormInput;