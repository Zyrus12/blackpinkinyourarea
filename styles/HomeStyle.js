import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgba(0, 0, 0, .9);
  padding: 20px;
`;

export const Card = styled.View`
    background-color: rgba(255,192,203, .8);
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-family: 'monospace';
`;

export const PostTime = styled.Text`
    font-size: 14px;
    font-family: 'sans-serif-condensed';
    color: #000000;
`;

export const PostText = styled.Text`
    font-size: 16px;
    font-family: 'serif';
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    color: #000000;
    font-weight: 600;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;

export const Divider = styled.View`
    border-bottom-color: rgba(0, 0, 0, .7);
    border-bottom-width: 2px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? 'rgba(0, 0, 0, 0)' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-size: 16px;
    font-family: 'sans-serif-thin';
    font-weight: bold;
    color: ${props => props.active ? '#000' : '#333'};
    margin-top: 2px;
    margin-left: 10px;
`;