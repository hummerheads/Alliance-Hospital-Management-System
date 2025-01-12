import { useEffect, useState } from "react";
import axios from "axios";

const Doctor = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [stats, setStats] = useState({
    totalPatients: 0,
    todayAppointments: 0,
    completedAppointments: 0
  });

  useEffect(() => {
    // Fetch doctor's appointments and patients
    const fetchData = async () => {
      try {
        const [appointmentsRes, patientsRes] = await Promise.all([
          axios.get('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/appointments'),
          axios.get('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/patients')
        ]);

        setAppointments(appointmentsRes.data);
        setPatients(patientsRes.data);
        
        // Calculate stats
        setStats({
          totalPatients: patientsRes.data.length,
          todayAppointments: appointmentsRes.data.filter(apt => 
            new Date(apt.date).toDateString() === new Date().toDateString()
          ).length,
          completedAppointments: appointmentsRes.data.filter(apt => 
            apt.status === 'completed'
          ).length
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Patients</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalPatients}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Today's Appointments</h3>
            <p className="text-3xl font-bold text-green-600">{stats.todayAppointments}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Completed Appointments</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.completedAppointments}</p>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Today's Appointments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(appointment.date).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.patientName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${appointment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        View Details
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Start Consultation
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Patients Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.slice(0, 6).map((patient) => (
              <div key={patient._id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg">{patient.firstName} {patient.lastName}</h3>
                <p className="text-gray-600">Age: {patient.age}</p>
                <p className="text-gray-600">Phone: {patient.contactNumber}</p>
                <button className="mt-2 text-blue-600 hover:text-blue-800">
                  View History
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;