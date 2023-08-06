import css from "./FriendListItem.module.css"

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li key={id} className={css.item}>
      {isOnline ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}