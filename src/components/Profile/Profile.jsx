import css from "./Profile.module.css";

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          width="200"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};