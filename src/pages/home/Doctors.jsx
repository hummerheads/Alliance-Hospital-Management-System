import React from 'react';

const doctors = [
    {
        name: 'Dr. John Doe',
        specialization: 'Orthopedics',
        image: '/doc1.jpg',
        description: 'Expert in bone and joint care with 10 years of experience.'
    },
    {
        name: 'Dr. Jane Smith',
        specialization: 'Orthopedics',
        image: '/doc2.jpg',
        description: 'Specializes in sports injuries and rehabilitation.'
    },
    {
        name: 'Dr. Emily Johnson',
        specialization: 'Cardiology',
        image: '/doc3.jpg',
        description: 'Renowned cardiologist with a focus on preventive care.'
    },
    {
        name: 'Dr. Michael Brown',
        specialization: 'Cardiology',
        image: '/doc2.jpg',
        description: 'Expert in heart surgeries and cardiovascular treatments.'
    },
    {
        name: 'Dr. Sarah Davis',
        specialization: 'Pediatrics',
        image: '/doc3.jpg',
        description: 'Dedicated pediatrician with a passion for child health.'
    },
    {
        name: 'Dr. William Wilson',
        specialization: 'Pediatrics',
        image: '/doc1.jpg',
        description: 'Specializes in newborn care and childhood diseases.'
    }
];

const Doctors = () => {
    return (
        <section className="py-12 w-10/12 mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-400 text-center mb-8">Our Doctors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">{doctor.name}</h3>
                                <p className="text-gray-600 mb-4">{doctor.specialization}</p>
                                <p className="text-gray-700">{doctor.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;