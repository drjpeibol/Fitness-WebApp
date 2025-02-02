import React, { useState } from 'react';
import FeedPost from '../components/social/FeedPost';
import FriendsList from '../components/social/FriendsList';

function Feed() {
  const [posts] = useState([
    {
      id: 1,
      userName: 'John Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: '2 hours ago',
      workoutType: 'CrossFit',
      workoutName: 'Fran',
      description: '21-15-9\nThrusters (95/65 lb)\nPull-ups',
      score: '3:21 - New PR!',
      likes: 15,
      comments: [
        {
          userName: 'Jane Smith',
          userAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          text: 'Amazing time! 💪'
        }
      ],
    },
    {
      id: 2,
      userName: 'Sarah Wilson',
      userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      timestamp: '4 hours ago',
      workoutType: 'Weightlifting',
      workoutName: 'Clean & Jerk Practice',
      description: '5x3 Clean & Jerk\nBuilding to heavy for the day',
      score: '185 lbs',
      image: 'https://source.unsplash.com/random/800x600/?weightlifting',
      likes: 23,
      comments: [],
    }
  ]);

  const [friends] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      isOnline: true,
      lastWorkout: 'Completed "Murph" - 45:21'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      isOnline: false,
      lastWorkout: 'Back Squat - 315 lbs'
    }
  ]);

  return (
    <div className="feed-container">
      <div className="feed-content">
        <div className="posts-section">
          <div className="new-post-card">
            <div className="new-post-header">
              <i className="fas fa-plus-circle"></i>
              <h3>Share your WOD</h3>
            </div>
            <textarea 
              placeholder="What did you accomplish today?"
              className="post-input"
            />
            <div className="new-post-actions">
              <button className="btn action-btn">
                <i className="fas fa-camera"></i> Add Photo
              </button>
              <button className="btn post-btn">
                <i className="fas fa-paper-plane"></i> Post
              </button>
            </div>
          </div>
          {posts.map(post => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        <aside className="feed-sidebar">
          <FriendsList friends={friends} />
        </aside>
      </div>
    </div>
  );
}

export default Feed; 