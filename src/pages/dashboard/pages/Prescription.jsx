import { useState } from 'react';
import axios from 'axios';

const Prescription = () => {
  const [prescription, setPrescription] = useState({
    patientName: '',
    patientId: '',
    doctorName: '',
    date: new Date().toISOString().split('T')[0],
    medications: [],
    instructions: '',
    diagnosis: '',
    followUpDate: ''
  });

  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    duration: ''
  });

  const addMedication = () => {
    if (medication.name && medication.dosage) {
      setPrescription(prev => ({
        ...prev,
        medications: [...prev.medications, medication]
      }));
      setMedication({
        name: '',
        dosage: '',
        frequency: '',
        duration: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/prescriptions', prescription);
      if (response.status === 201) {
        alert('Prescription created successfully!');
        // Reset form
        setPrescription({
          patientName: '',
          patientId: '',
          doctorName: '',
          date: new Date().toISOString().split('T')[0],
          medications: [],
          instructions: '',
          diagnosis: '',
          followUpDate: ''
        });
      }
    } catch (error) {
      console.error('Error creating prescription:', error);
      alert('Failed to create prescription');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create Prescription</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input
                type="text"
                value={prescription.patientName}
                onChange={(e) => setPrescription({...prescription, patientName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient ID</label>
              <input
                type="text"
                value={prescription.patientId}
                onChange={(e) => setPrescription({...prescription, patientId: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
              <input
                type="text"
                value={prescription.doctorName}
                onChange={(e) => setPrescription({...prescription, doctorName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={prescription.date}
                onChange={(e) => setPrescription({...prescription, date: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Medications</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Medicine name"
                value={medication.name}
                onChange={(e) => setMedication({...medication, name: e.target.value})}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Dosage"
                value={medication.dosage}
                onChange={(e) => setMedication({...medication, dosage: e.target.value})}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Frequency"
                value={medication.frequency}
                onChange={(e) => setMedication({...medication, frequency: e.target.value})}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Duration"
                value={medication.duration}
                onChange={(e) => setMedication({...medication, duration: e.target.value})}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button
              type="button"
              onClick={addMedication}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add Medication
            </button>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Added Medications</h4>
              <ul className="space-y-2">
                {prescription.medications.map((med, index) => (
                  <li key={index} className="bg-gray-50 p-2 rounded-md">
                    {med.name} - {med.dosage} - {med.frequency} - {med.duration}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Diagnosis</label>
            <textarea
              value={prescription.diagnosis}
              onChange={(e) => setPrescription({...prescription, diagnosis: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Instructions</label>
            <textarea
              value={prescription.instructions}
              onChange={(e) => setPrescription({...prescription, instructions: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Follow-up Date</label>
            <input
              type="date"
              value={prescription.followUpDate}
              onChange={(e) => setPrescription({...prescription, followUpDate: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Create Prescription
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prescription;