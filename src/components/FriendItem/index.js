import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Avatar,
  TextContainer,
  Name,
  Status,
  ActionButtons,
  ActionButton,
  UserContainer,
} from './styles';

export default function FriendItem({
  data,
  rejectInvite,
  acceptInvite,
  canEnterRoom,
}) {
  return (
    <Container status={data.status}>
      <UserContainer>
        <Avatar source={{ uri: data.avatar.url }} />
        <TextContainer>
          <Name>{data.name}</Name>
          <Status>{data.action || data.status || ''}</Status>
        </TextContainer>
      </UserContainer>
      {data.accept && (
        <ActionButtons>
          <ActionButton onPress={() => rejectInvite(data.id)}>
            <Icon name="clear" size={30} />
          </ActionButton>
          <ActionButton onPress={() => acceptInvite(data.id)}>
            <Icon name="check" size={30} />
          </ActionButton>
        </ActionButtons>
      )}
      {data.globoRoom && data.globoRoom.canEnter && (
        <ActionButtons>
          <ActionButton onPress={canEnterRoom}>
            <Status>Juntar-se</Status>
            <Icon name="chevron-right" size={20} />
          </ActionButton>
        </ActionButtons>
      )}
    </Container>
  );
}

FriendItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    action: PropTypes.string,
    status: PropTypes.string,
    accept: PropTypes.bool,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    globoRoom: PropTypes.shape({
      canEnter: PropTypes.bool,
    }),
  }).isRequired,
  acceptInvite: PropTypes.func,
  rejectInvite: PropTypes.func,
  canEnterRoom: PropTypes.func,
};

FriendItem.defaultProps = {
  acceptInvite: () => {},
  rejectInvite: () => {},
};
