import { useForm } from 'react-hook-form';
import 'flowbite';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='py-20'>
        <h1 className="text-3xl text-center mb-20 font-bold text-green-400">Want To Know More? Reach Us</h1>
        <div className="flex justify-center items-center w-10/12 mx-auto ">
            


            <div className="bg-white p-8 rounded-lg shadow-lg w-full items-center gap-40 flex">
                <div className="w-1/2 hidden md:block">
                    <img src="/contact.avif" alt="Contact Us" className="rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                {...register('message', { required: true })}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                            {errors.message && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                Send Message
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Contact;