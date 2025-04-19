import Google from '../../assets/Home/google.png';
import Nestle from '../../assets/Home/nestle.png';
import Disney from '../../assets/Home/disney.png';
import Airbnb from '../../assets/Home/airbnb.png';
import Grab from '../../assets/Home/grab.png';
import Netflix from '../../assets/Home/netflix.png';

const PartnersSection = () => {
  const brands = [
    { name: 'Google', logo: Google },
    { name: 'Nestle', logo: Nestle },
    { name: 'Disney', logo: Disney },
    { name: 'Airbnb', logo: Airbnb },
    { name: 'Grab', logo: Grab },
    { name: 'Netflix', logo: Netflix },
  ];

  return (
    <section className="pb-16 pt-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-4">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-150 transition-all duration-600 cursor-pointer ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;