import React from 'react';

function FriendsList({ friends }) {
  return (
    <div className="friends-list">
      <h3 className="friends-title">Training Partners</h3>
      <div className="friends-grid">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-card">
            <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
            <div className="friend-info">
              <h4 className="friend-name">{friend.name}</h4>
              <span className="friend-status">
                {friend.isOnline ? 'Training now' : 'Last WOD: 2h ago'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsList; 