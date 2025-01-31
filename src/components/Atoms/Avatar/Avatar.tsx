import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Avatar.module.css';
import avatarImg from '/images/default_avatar.png';

interface AvatarProps {
  imgUrl: string;
  href: string;
  borderless: boolean;
  size: number;
  borderColor: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imgUrl = '',
  href = '',
  borderless = true,
  size = 24,
  borderColor = 'var(--lightPurple)',
}) => {
  const navigate = useNavigate();

  const navClick = () => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  const changeToDefaultPhoto = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = avatarImg;
  };

  const avatarClassName = `${styles['my-avatar']} ${borderless || styles['my-avatar-default']}`;

  const pxSize = `${size}px`;
  return (
    <div
      style={{
        width: pxSize,
        height: pxSize,
        minHeight: pxSize,
        minWidth: pxSize,
        color: borderColor,
      }}
      className={styles['avatar-container']}
    >
      <img
        onClick={href ? navClick : () => {}}
        style={{ cursor: href && 'pointer' }}
        className={avatarClassName}
        src={imgUrl}
        alt="avatar"
        onError={changeToDefaultPhoto}
      />
      {/*TODO: heart component TBD */}
    </div>
  );
};

export default Avatar;
