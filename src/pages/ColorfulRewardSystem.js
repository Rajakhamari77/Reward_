import React, { useState } from 'react';
import './ColorfulRewardSystem.css';

const ColorfulRewardSystem = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState(20); // Starting points for the user
  const [recentActivities, setRecentActivities] = useState([
    { description: 'Answered: How to use React hooks?', points: 5 },
    { description: 'Upvoted: Explanation of useEffect', points: 5 },
    { description: 'Transferred to: Jane Doe', points: -10 }
  ]);
  const [selectedActivity, setSelectedActivity] = useState(null); // For handling activity details

  // Transfer points handler
  const handleTransfer = () => {
    if (recipient && amount > 0) {
      setRecentActivities([
        ...recentActivities,
        { description: `Transferred to: ${recipient}`, points: -amount },
      ]);
      setPoints(points - amount);
      setMessage(`Transferred ${amount} points to ${recipient}`);
      setRecipient('');
      setAmount(0);
    } else {
      setMessage('Please enter a valid recipient and amount.');
    }
  };

  // Simulate action handlers
  const handleSimulateAction = (action, pointsChange) => {
    setRecentActivities([
      ...recentActivities,
      { description: action, points: pointsChange },
    ]);
    setPoints(points + pointsChange);
  };

  // Handle activity click
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  // Undo last activity
  const handleUndoLastActivity = () => {
    if (recentActivities.length > 0) {
      const lastActivity = recentActivities[recentActivities.length - 1];
      setPoints(points - lastActivity.points); // Reversing the points change
      setRecentActivities(recentActivities.slice(0, -1)); // Removing last activity
    }
  };

  return (
    <div className="reward-system">
      {/* User Info Section */}
      <div className="user-info">
        <div className="avatar">
          {/* Using a random image from RandomUser.me */}
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User Avatar" />
        </div>
        <h2>John Doe</h2>
        <p>Active Contributor</p>
        <div className="points">
          <span className="total-points">{points} Points</span>
          <div className="badges">
            <span className="badge">Top Answerer</span>
            <span className="badge">Helpful Member</span>
          </div>
        </div>
      </div>

      {/* Transfer Points Section */}
      <div className="transfer-points">
        <h3>Transfer Points</h3>
        <input
          type="text"
          placeholder="Recipient Username"
          className="input"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="button" onClick={handleTransfer}>
          Transfer Points
        </button>
        {message && <p className="message">{message}</p>}
      </div>

      {/* Recent Activities Section */}
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index} onClick={() => handleActivityClick(activity)} className="clickable-activity">
              {activity.description}{' '}
              <span className="activity-points">
                {activity.points > 0 ? `+${activity.points}` : activity.points} points
              </span>
            </li>
          ))}
        </ul>

        {/* Display detailed information about clicked activity */}
        {selectedActivity && (
          <div className="activity-details">
            <h4>Activity Details</h4>
            <p>{selectedActivity.description}</p>
            <p>Points: {selectedActivity.points}</p>
          </div>
        )}

        {/* Undo last activity button */}
        <button className="button undo-button" onClick={handleUndoLastActivity}>
          Undo Last Activity
        </button>
      </div>

      {/* Simulate Actions Section */}
      <div className="simulate-actions">
        <h3>Simulate Actions</h3>
        <div className="action-buttons">
          <button
            className="action-btn answer"
            onClick={() => handleSimulateAction('Answered a question', 5)}
          >
            Answer (+5)
          </button>
          <button
            className="action-btn upvote"
            onClick={() => handleSimulateAction('Upvoted a post', 5)}
          >
            Upvote (+5)
          </button>
          <button
            className="action-btn downvote"
            onClick={() => handleSimulateAction('Downvoted a post', -2)}
          >
            Downvote (-2)
          </button>
          <button
            className="action-btn remove"
            onClick={() => handleSimulateAction('Removed a post', -5)}
          >
            Remove (-5)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorfulRewardSystem;
