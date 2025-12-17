import React from "react";

const PostCard = ({ post, onDelete, onEdit }) => {
    const formatDate = (date) => {
        return new Date(date).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    return (
        <div className="post-card">
            <div className="post-header">
                <span className="platform-badge">{post.platform}</span>
                <div className="post-actions">
                    <button className="edit-btn" onClick={() => onEdit(post)}>
                        ✏️ Edit
                    </button>
                    <button className="delete-btn" onClick={() => onDelete(post.id)}>
                        🗑️ Delete
                    </button>
                </div>
            </div>
            <p className="post-content">{post.content}</p>
            <p className="post-time">📅 {formatDate(post.scheduledFor)}</p>
        </div>
    );
};

export default PostCard;