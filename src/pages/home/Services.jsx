

const services = [
    {
        image: '/orthopedics.webp',
        title: 'Orthopedics',
        details: 'Comprehensive care for bones, joints, and muscles.',
    },
    {
        image: '/cardiology.webp',
        title: 'Cardiology',
        details: 'Advanced heart care and cardiovascular treatments.',
    },
    {
        image: '/pediatrics.jpg',
        title: 'Pediatrics',
        details: 'Dedicated healthcare services for children. Quality Treatment',
    },
];

const Services = () => {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center text-green-400 mb-8">Our Services</h2>
            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full h-60" src={service.image} alt={service.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl text-green-400 mb-2">{service.title}</div>
                            <p className="text-gray-700 text-base">{service.details}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
