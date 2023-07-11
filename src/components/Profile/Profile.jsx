import PropTypes from 'prop-types';
import user from './user.json';
import css from './prof.module.css';

export const Prof = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Prof.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
