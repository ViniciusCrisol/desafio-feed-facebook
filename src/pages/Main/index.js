import React from 'react';

import Post from '../../components/post/index';

import { Container, Header, HeaderText, HeaderLabel, Feed } from './styles';

import avatar from '../../assets/images/Profile.jpg';

const items = [
  {
    key: String(Math.random()),
    profileImage: avatar,
    commentProfile: avatar,
    postText: 'Pessoal, alguém sabe se a RocketSeat está contartando????',
    profileName: 'Vinícius Crisol',
    date: '01 abril 2020',
  },
  {
    key: String(Math.random()),
    profileImage: avatar,
    commentProfile: avatar,
    postText: 'Fala galera, Tudo suave ?',
    profileName: 'Robson Vieira',
    date: '22 jun 2020',
  },
];

export function App() {
  return (
    <Container>
      <Header>
        <HeaderText>Facebook</HeaderText>
        <HeaderLabel>Meu perfil</HeaderLabel>
      </Header>
      <Feed>
        {items.map((item) => (
          <Post
            key={item.key}
            profileImage={item.profileImage}
            commentProfile={item.commentProfile}
            postText={item.postText}
            profileName={item.profileName}
            date={item.date}
          />
        ))}
      </Feed>
    </Container>
  );
}

export default App;
