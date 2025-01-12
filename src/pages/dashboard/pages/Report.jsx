import { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({
    patientName: '',
    patientId: '',
    doctorName: '',
    testType: '',
    testDate: new Date().toISOString().split('T')[0],
    results: '',
    interpretation: '',
    recommendations: '',
    status: 'pending'
  });

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/reports');
      setReports(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reports:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/reports', newReport);
      if (response.status === 201) {
        alert('Report created successfully!');
        fetchReports();
        setNewReport({
          patientName: '',
          patientId: '',
          doctorName: '',
          testType: '',
          testDate: new Date().toISOString().split('T')[0],
          results: '',
          interpretation: '',
          recommendations: '',
          status: 'pending'
        });
      }
    } catch (error) {
      console.error('Error creating report:', error);
      alert('Failed to create report');
    }
  };

  const filteredReports = filter === 'all' 
    ? reports 
    : reports.filter(report => report.status === filter);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Medical Reports Management</h2>
      
      {/* Create New Report Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Create New Report</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input
                type="text"
                value={newReport.patientName}
                onChange={(e) => setNewReport({...newReport, patientName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Patient ID</label>
              <input
                type="text"
                value={newReport.patientId}
                onChange={(e) => setNewReport({...newReport, patientId: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
              <input
                type="text"
                value={newReport.doctorName}
                onChange={(e) => setNewReport({...newReport, doctorName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Test Type</label>
              <input
                type="text"
                value={newReport.testType}
                onChange={(e) => setNewReport({...newReport, testType: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Test Date</label>
              <input
                type="date"
                value={newReport.testDate}
                onChange={(e) => setNewReport({...newReport, testDate: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={newReport.status}
                onChange={(e) => setNewReport({...newReport, status: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="reviewed">Reviewed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Results</label>
            <textarea
              value={newReport.results}
              onChange={(e) => setNewReport({...newReport, results: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Interpretation</label>
            <textarea
              value={newReport.interpretation}
              onChange={(e) => setNewReport({...newReport, interpretation: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Recommendations</label>
            <textarea
              value={newReport.recommendations}
              onChange={(e) => setNewReport({...newReport, recommendations: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Report
          </button>
        </form>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Reports List</h3>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Reports</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="reviewed">Reviewed</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <tr key={report._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{report.patientName}</div>
                      <div className="text-sm text-gray-500">ID: {report.patientId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.testType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(report.testDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${report.status === 'completed' ? 'bg-green-100 text-green-800' :
                        report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;