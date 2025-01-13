import React, { useState } from "react";

const UserDetails = ({ user, onUserUpdate, onUserDelete }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    location: user?.location || "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!user) {
    return <p className="no-user-message">No user found or click on show friend button.</p>;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await onUserUpdate(user.username, formData); // Call parent-provided update function
      setSuccessMessage("User updated successfully!");
      setEditing(false);
    } catch (err) {
      setError("Failed to update user.");
    }
  };

  const handleDelete = async () => {
    try {
      await onUserDelete(user.username); // Call parent-provided delete function
      setSuccessMessage("User deleted successfully!");
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="user-details-container">
      <div className="div-user-details-avatar">
        <img src={user.avatar_url} alt="User Avatar" className="user-details-avatar" />
      </div>

      <div className="user-info">
        {!editing ? (
          <>
            <h2>{user.name || user.username}</h2>
            <p>{user.bio}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Public Repos:</strong> {user.public_repos}</p>
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Following:</strong> {user.following}</p>

            <button onClick={() => setEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Soft Delete User
            </button>
          </>
        ) : (
          <>
            <div className="edit-form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Bio:
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <button onClick={handleUpdate} className="save-button">
              Save
            </button>
            <button onClick={() => setEditing(false)} className="cancel-button">
              Cancel
            </button>
          </>
        )}
      </div>

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default UserDetails;
