import css from './friend.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(fri => {
        return (
          <li className={css.item} key={fri.id}>
            <span className={fri.isOnline ? css.status : css.red}></span>
            <img
              className="avatar"
              src={fri.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{fri.name}</p>
          </li>
        );
      })}
      ;
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
