import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxury() {
    return (
        <div className="bg-dark-green p-12 max-lg:rounded-b-lg:rounded-r-l-lg">
            <img src={iconLuxury}alt="icones dos carros luxury" className="mb-7"/>
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
            <p className="font-lexend mb-7 text-offwhite" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
            <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhite lg:mb-20" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
        </div>
    )
}