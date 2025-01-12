import { useState } from 'react';
import axios from 'axios';

const Bill = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({
    patientName: '',
    patientId: '',
    date: '',
    services: [],
    totalAmount: 0,
    status: 'pending'
  });

  const [service, setService] = useState({
    name: '',
    cost: 0
  });

  const addService = () => {
    setNewBill(prev => ({
      ...prev,
      services: [...prev.services, service],
      totalAmount: prev.totalAmount + Number(service.cost)
    }));
    setService({ name: '', cost: 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/bills', newBill);
      if (response.status === 201) {
        alert('Bill created successfully!');
        setBills([...bills, response.data]);
      }
    } catch (error) {
      console.error('Error creating bill:', error);
      alert('Failed to create bill');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Billing Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Create New Bill</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              value={newBill.patientName}
              onChange={(e) => setNewBill({...newBill, patientName: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Patient ID</label>
            <input
              type="text"
              value={newBill.patientId}
              onChange={(e) => setNewBill({...newBill, patientId: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={newBill.date}
              onChange={(e) => setNewBill({...newBill, date: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="text-lg font-medium mb-2">Add Services</h4>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Service name"
                value={service.name}
                onChange={(e) => setService({...service, name: e.target.value})}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="number"
                placeholder="Cost"
                value={service.cost}
                onChange={(e) => setService({...service, cost: e.target.value})}
                className="w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={addService}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="text-lg font-medium mb-2">Services Added</h4>
            <ul className="space-y-2">
              {newBill.services.map((s, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{s.name}</span>
                  <span>${s.cost}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <strong>Total: ${newBill.totalAmount}</strong>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Generate Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bill;