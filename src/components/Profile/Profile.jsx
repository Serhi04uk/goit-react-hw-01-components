import user from './user.json';
import './prof.css';

export const Prof = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user[0].avatar} alt="User avatar" className="avatar" />
        <p className="name">{user[0].username}</p>
        <p className="tag">{user[0].tag}</p>
        <p className="location">{user[0].location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user[0].stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user[0].stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user[0].stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
