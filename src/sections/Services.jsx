import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"


const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map(card=>(
        <div>
          <ServiceCard key={card.label} {...card}/>
        </div>
      ))}
    </section>
  )
}

export default Services