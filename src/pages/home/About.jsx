

const About = () => {
    return (
        <div className="flex flex-col md:flex-row py-20 items-center p-6 bg-gray-100">
            <div className="md:w-1/2">
            <img src="people.png" alt="About Us" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <h2 className="text-3xl text-green-400 font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-6">
                Welcome to Alliance Hospital Management System. We are dedicated to providing the best healthcare services.
                Our team of experienced professionals is committed to ensuring the highest standards of patient care and satisfaction.
                We leverage the latest technology and innovative practices to deliver exceptional healthcare solutions.
            </p>
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        );
};

export default About;