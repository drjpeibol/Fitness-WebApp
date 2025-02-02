import React, { useState } from 'react';

function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="user-info">
          <img src={post.userAvatar} alt={post.userName} className="user-avatar" />
          <div className="post-meta">
            <h3 className="user-name">{post.userName}</h3>
            <span className="post-time">
              <i className="fas fa-clock"></i> {post.timestamp}
            </span>
          </div>
        </div>
        <div className="workout-type-tag">
          <i className="fas fa-dumbbell"></i> {post.workoutType}
        </div>
      </div>
      <div className="post-content">
        <h4 className="workout-name">
          <i className="fas fa-fire"></i> {post.workoutName}
        </h4>
        <div className="workout-details">
          <pre className="workout-description">{post.description}</pre>
          {post.score && (
            <div className="workout-score">
              <span className="score-label">Score:</span>
              <span className="score-value">{post.score}</span>
            </div>
          )}
        </div>
        {post.image && (
          <img src={post.image} alt="Workout" className="workout-image" />
        )}
      </div>
      <div className="post-actions">
        <button 
          className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
          <span className="like-count">{isLiked ? post.likes + 1 : post.likes}</span>
        </button>
        <button 
          className="action-btn comment-btn"
          onClick={() => setShowComments(!showComments)}
        >
          <i className="far fa-comment"></i>
          <span className="comment-count">{post.comments.length}</span>
        </button>
        <button className="action-btn share-btn">
          <i className="far fa-share-square"></i>
        </button>
      </div>
      {showComments && post.comments.length > 0 && (
        <div className="comments-section">
          {post.comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={comment.userAvatar} alt={comment.userName} className="comment-avatar" />
              <div className="comment-content">
                <span className="comment-user">{comment.userName}</span>
                <p className="comment-text">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedPost; 