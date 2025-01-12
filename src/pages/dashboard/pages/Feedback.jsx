import { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    patientName: '',
    doctorName: '',
    rating: 5,
    comment: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/feedback', feedback);
      if (response.status === 201) {
        alert('Feedback submitted successfully!');
        setFeedback({
          patientName: '',
          doctorName: '',
          rating: 5,
          comment: '',
          date: new Date().toISOString().split('T')[0]
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Patient Feedback Form</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              value={feedback.patientName}
              onChange={(e) => setFeedback({...feedback, patientName: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
            <input
              type="text"
              value={feedback.doctorName}
              onChange={(e) => setFeedback({...feedback, doctorName: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              value={feedback.rating}
              onChange={(e) => setFeedback({...feedback, rating: Number(e.target.value)})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea
              value={feedback.comment}
              onChange={(e) => setFeedback({...feedback, comment: e.target.value})}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;