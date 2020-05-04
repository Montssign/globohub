import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import produce from 'immer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setTitle } from '~/store/modules/title/actions';

import Background from '~/components/Background';
import FriendItem from '~/components/FriendItem';

import { Container, Line, Title, Row, AddButton } from './styles';
import Input from '~/components/Input';

const data = [
  {
    id: 1,
    name: 'Sabrina Lewin',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/16508412_10206087078294559_8529907720311013722_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_oc=AQnQnLSYwJNkVebvJyqBH5a7iKQbHp2l2jAEdjKN3Alathm1GMBb54Va_FSYXMECj7vgXOZv0P3S8vUhN6oWZg2X&_nc_ht=scontent.fcgh3-1.fna&oh=9295e308938948c0db583056f94596ce&oe=5ED3E993',
    },
    status: 'Online',
    action: 'Aceitar convite?',
    accept: true,
  },
  {
    id: 2,
    name: 'Felipe Lima',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/p960x960/55510798_665517047236925_2565065794723512320_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQlHDHcR5Mlrl8Tmvd3O7K0_KFp7lCvBa2J8hsSESt21EwFfy85w-K6s962LkzEnCCouf6morjJFBJMcosrIZ29R&_nc_ht=scontent.fcgh3-1.fna&_nc_tp=6&oh=f97ea959247e77f7c01098e2ce56efab&oe=5ED58D33',
    },
    status: 'Online',
    action: 'Assistindo no GloboRoom',
    globoRoom: {
      canEnter: true,
    },
  },
  {
    id: 3,
    name: 'Jeanluca Moreno',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/20106779_1376170429143294_9162307370558572724_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQkcYVnpEYUpirEHsKY8YEByjy9Mks_yjDQqXT1Cc-Q4Yu2v0fGbQ0ZqrkC_Iura7u6yp7P_IQ90i7aGk9RDdwUu&_nc_ht=scontent.fcgh3-1.fna&oh=84eb58982d601bed84b31f3c2ff2028e&oe=5ED62046',
    },
    status: 'Online',
    action: 'Lendo notícias',
  },
  {
    id: 4,
    name: 'Victor Vicaria',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/92700825_2843888142398455_502284266214785024_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_oc=AQnDnUr4NfR3kndmfNKJhWGv719owZ1T5VRSQMtxW5M-2V4S7s2onRgVMMJlak365HQHZQOTQs3kRlsoWa4gJl1W&_nc_ht=scontent.fcgh3-1.fna&oh=1440b90a0c65881820a6cdfae681cebc&oe=5ED64032',
    },
    status: 'Offline',
  },
];

export default function Friends({ navigation }) {
  const dispatch = useDispatch();
  const [people, setPeople] = useState(data);
  const [email, setEmail] = useState('');

  function acceptInvite(id) {
    setPeople(
      produce(people, draft => {
        const index = draft.findIndex(item => item.id === id);
        if (index >= 0) {
          delete draft[index].accept;
          draft[index].action = 'Online';
        }
      })
    );
  }

  function rejectInvite(id) {
    setPeople(
      produce(people, draft => {
        const index = draft.findIndex(item => item.id === id);
        if (index >= 0) {
          draft.splice(index, 1);
        }
      })
    );
  }

  function addFriend() {
    setEmail('');
  }

  const friends = useMemo(() => people.filter(person => !person.accept), [
    people,
  ]);

  const newFriends = useMemo(() => people.filter(person => person.accept), [
    people,
  ]);

  const validEmail = useMemo(() => {
    // eslint-disable-next-line
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return valid.test(email);
  }, [email]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setTitle('Meus Amigos'));
    });
  }, [dispatch, navigation]);

  return (
    <Background>
      <Row>
        <Input
          value={email}
          setValue={setEmail}
          onSubmitEditing={addFriend}
          style={{ flex: 1 }}
          returnKeyType="send"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          icon="email"
        />
        <AddButton canSend={validEmail} onPress={addFriend}>
          <Icon name="add" size={30} />
        </AddButton>
      </Row>

      {newFriends.length > 0 && (
        <>
          <Title>Novos Convites</Title>
          <Container
            data={newFriends}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <FriendItem
                data={item}
                acceptInvite={acceptInvite}
                rejectInvite={rejectInvite}
              />
            )}
            newFriends
            length={newFriends.length}
          />
          <Line />
        </>
      )}
      <Container
        data={friends}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FriendItem data={item} />}
      />
    </Background>
  );
}

Friends.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
