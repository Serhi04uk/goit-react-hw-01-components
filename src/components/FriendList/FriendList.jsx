import data from './data.json';
import css from './friend.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ id, isOnline, avatar, name }) => {
  return data.map(fri => {
    return (
      <li className={css.item} key={fri.id}>
        <span className={fri.isOnline ? css.status : css.red}></span>
        <img className="avatar" src={fri.avatar} alt="User avatar" width="48" />
        <p className="name">{fri.name}</p>
      </li>
    );
  });
};

export const Friends = () => {
  return (
    <ul className={css.friendList}>
      <FriendList />
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
