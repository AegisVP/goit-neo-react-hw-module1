import css from './Profile.module.css';

const Profile = ({ image = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', name, tag, location, stats = {} }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.card}>
      <img className={css.avatar} src={image} alt='User avatar' />
      <p className={css.nam}>{name}</p>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
