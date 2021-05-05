import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: 20px;
  padding-bottom: 15px;
  padding-right: 10px;

`;

export const UserImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 10px;
  margin-left: 10px;
  width: 300px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(255,192,203, .5);
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: rgba(255,192,203, 1);
  font-family: 'monospace';
`;

export const PostTime = styled.Text`
  font-size: 16px;
  color: rgba(255,192,203, 1);
  font-family: 'sans-serif-condensed';
`;

export const MessageText = styled.Text`
  font-size: 20px;
  color: rgba(255,192,203, .5);
`;