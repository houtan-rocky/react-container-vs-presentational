import * as React from 'react';

export default function Gallery({ users }) {
  return users.map((user, i) => (
    <div className={'user-card'}>
      <div className={'user-card__header'}>
        <h2 className={'user-card__login'}>{user.login}</h2>
      </div>
      <div className={'user-card__image'}>
        <img src={user.avatar_url} key={i} alt="Image" />
      </div>
    </div>
  ));
}
