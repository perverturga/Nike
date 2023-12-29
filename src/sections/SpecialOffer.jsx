import { offer } from "../assets/images"
import Button from "../components/Button"



const SpecialOffer = () => {
  return (
    // flex-col-reverse ile büyükten veya ?küçükten geçişlere tam tersine dönüştürür
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
        src={offer} width={773} height={687}
        className="object-contain w-full"
        />
      </div>


      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span>
            <span> Offer </span>
        </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            {/* info-text customize edilmiş classname dir detayları index css de  */}
            Ensuring premium comfort and style, our meticiously crafted footwear is designed to elevate your experience,
            providing you with unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Navigate a real pf possibilites designd to fulfill your unique desires, nothing short of exceptional</p>
          <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="View Details"/>
          <Button 
            label= "Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer