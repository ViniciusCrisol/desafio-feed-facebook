import styled from 'styled-components';

export const Container = styled.div`
  min-height: 250px;
  max-width: 700px;
  width: 80%;
  background-color: white;
  margin: 22px auto;
  border-radius: 4px;
  padding: 12px;

  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TextHeaderContainer = styled.div`
  margin-left: 8px;

  h5 {
    font-size: 13px;
    line-height: 1.5;
  }

  p {
    font-size: 11px;
    color: #bbb;
  }
`;

export const PostContainer = styled.div`
  margin-top: 24px;
  min-height: 36px;
  border-bottom: 1px solid #eee;

  p {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const Comment = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-btwen;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CommentArea = styled.div`
  background-color: #eee;
  width: 80%;
  height: 80px;
  margin-left: 12px;
  border-radius: 18px;
`;
