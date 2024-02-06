import css from './FriendListItem.module.css'

export const FriendListItem = ({friend : {avatar, name, isOnline}}) => {
    const statusClass = isOnline ? css.isOnline : css.isOffline;

  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="48" className={avatar}/>
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
