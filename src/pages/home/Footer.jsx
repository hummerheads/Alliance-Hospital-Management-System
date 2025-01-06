
const Footer = () => {
    return (
        <footer className=" bg-gray-200  py-6">
            <div className="w-11/12 container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-10 mr-3" />
                    <span className="text-xl font-bold">Alliance Hospital Limited</span>
                </div>
                <div className="flex space-x-6">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/services" className="hover:text-gray-400">Services</a>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-500">&copy; 2023 Alliance Hospital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;