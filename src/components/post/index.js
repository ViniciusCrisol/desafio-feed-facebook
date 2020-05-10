import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  TextHeaderContainer,
  PostContainer,
  Comment,
  CommentArea,
} from './styles';

export default function Post({
  profileImage,
  profileName,
  date,
  commentProfile,
  postText,
}) {
  return (
    <Container>
      <Header>
        <img src={profileImage} alt="Profile" />
        <TextHeaderContainer>
          <h5>{profileName}</h5>
          <p>{date}</p>
        </TextHeaderContainer>
      </Header>
      <PostContainer>
        <p>{postText}</p>
      </PostContainer>
      <Comment>
        <img src={commentProfile} alt="Profile" />
        <CommentArea />
      </Comment>
    </Container>
  );
}

Post.propTypes = {
  profileImage: PropTypes.element.isRequired,
  profileName: PropTypes.element.isRequired,
  date: PropTypes.element.isRequired,
  commentProfile: PropTypes.element.isRequired,
  postText: PropTypes.element.isRequired,
};
