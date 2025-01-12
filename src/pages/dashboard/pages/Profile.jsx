import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import axios from "axios";

const Profile = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editedData, setEditedData] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!authLoading && user?.email && user?.role) {
      fetchProfile();
    }
  }, [user?.email, user?.role, authLoading]);

  const fetchProfile = async () => {
    try {
      const collections = {
        admin: 'admins',
        doctor: 'doctors',
        patient: 'patients',
        staff: 'staffs'
      };
      
      if (!collections[user?.role]) {
        setError("Invalid user role");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/${collections[user?.role]}/profile/${user?.email}`
      );

      if (response.data) {
        setProfileData(response.data);
        setEditedData(response.data);
        setError("");
      } else {
        setError("No profile data found");
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError(error.response?.data?.message || "Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedData({...profileData});
    setError("");
    setSuccess("");
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedData({...profileData});
    setError("");
    setSuccess("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const collections = {
        admin: 'admins',
        doctor: 'doctors',
        patient: 'patients',
        staff: 'staffs'
      };

      if (!collections[user?.role]) {
        throw new Error("Invalid user role");
      }

      // Remove protected fields before sending
      const updatedData = { ...editedData };
      ['_id', 'email', 'role', 'password', 'confirmPassword'].forEach(field => {
        delete updatedData[field];
      });

      const response = await axios.patch(
        `http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/${collections[user?.role]}/profile/${user?.email}`,
        updatedData
      );

      if (response.data.success) {
        setProfileData(editedData);
        setSuccess("Profile updated successfully!");
        setEditMode(false);
        await fetchProfile(); // Refresh data after update
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if user is logged in
  if (!user?.email || !user?.role) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">Please log in to view your profile</p>
      </div>
    );
  }

  // Loading state while fetching profile data
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderField = (key, value) => {
    // Skip these fields from rendering/editing
    if (['_id', 'email', 'role', 'password', 'confirmPassword'].includes(key)) return null;

    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

    return (
      <div key={key} className="border-b border-gray-200 pb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
        {editMode ? (
          <input
            type="text"
            name={key}
            value={editedData[key] || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-900">{value || 'Not provided'}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profile Information</h2>
            <p className="text-gray-600 mb-8">
              Role: {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                {success}
              </div>
            )}
          </div>

          {profileData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Display email (non-editable) */}
                <div className="border-b border-gray-200 pb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{profileData.email}</p>
                </div>

                {/* Render other editable fields */}
                {Object.entries(profileData).map(([key, value]) => renderField(key, value))}
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                {editMode ? (
                  <>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
                          Saving...
                        </span>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors disabled:bg-gray-200"
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No profile data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
