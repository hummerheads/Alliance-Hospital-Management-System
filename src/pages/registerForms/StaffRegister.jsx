import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useForm } from 'react-hook-form';
import 'flowbite';

const StaffRegister = () => {
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
            alert("Registration successful!");
          } catch (error) {
            console.error(error);
            alert("Registration failed!");
          }
    };

    return (
        <div className="flex justify-center py-20 items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Staff Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            {...register('fullName', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.fullName && <span className="text-red-500">Full Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            {...register('phoneNumber', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phoneNumber && <span className="text-red-500">Phone Number is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Department</label>
                        <select
                            {...register('department', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Orthopedics">Orthopedics</option>
                        </select>
                        {errors.department && <span className="text-red-500">Department is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Position</label>
                        <input
                            type="text"
                            {...register('position', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.position && <span className="text-red-500">Position is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            {...register('dob', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.dob && <span className="text-red-500">Date of Birth is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <textarea
                            {...register('address', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.address && <span className="text-red-500">Address is required</span>}
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
                            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StaffRegister;