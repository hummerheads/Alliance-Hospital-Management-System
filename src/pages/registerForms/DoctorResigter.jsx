import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useForm } from 'react-hook-form';
import 'flowbite';
import axios from "axios";

const DoctorRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const onSubmit = async(data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match!");
            return;
          }
          try {
            await createUser(data.email, data.password);
            await updateUserProfile({
              displayName: `${data.firstName} ${data.lastName}`,
            });
            const doctorData = { ...data, role: 'doctor' };
            const response = await axios.post('http://localhost:5000/doctors', doctorData);

            if (response.status === 201) {
                alert("Doctor registered successfully!");
            } else {
                alert("Failed to register doctor.");
            }          } catch (error) {
            console.error(error);
            alert("Registration failed!");
          }
    };

    return (
        <div className="flex justify-center py-20 items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Doctor Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            {...register('fullName', { required: 'Full Name is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            {...register('phoneNumber', { required: 'Phone Number is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Specialization</label>
                        <input
                            type="text"
                            {...register('specialization', { required: 'Specialization is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                        <input
                            type="number"
                            {...register('experience', { required: 'Years of Experience is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            {...register('confirmPassword', { required: 'Confirm Password is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorRegister;