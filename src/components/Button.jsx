const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
    font-montserrat texxt-lg leading-none 
    ${backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : "bg-coral-red rounded-full text-white border-coral-red" }
    rounded-full ${fullWidth && "w-full"}"}`} >
        {label}


{/* burada iconurl && img ı göster aksi halde göstermesin diye sonradan koşul eklendi
buttonun dizaynını farklı yerlerde de kullandığımzda görünmesin diye */}
        {iconURL && <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5 "
        /> }
    </button>
  )
}

export default Button