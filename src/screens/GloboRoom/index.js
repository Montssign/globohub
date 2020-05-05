import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import produce from 'immer';
import Background from '~/components/Background';

import FriendMessage from '~/components/FriendMessage';
import MyMessage from '~/components/MyMessage';
import Input from '~/components/Input';

import { Video, Container, InputContainer, Button } from './styles';

const data = [
  {
    id: 1,
    name: 'Sabrina Lewin',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/16508412_10206087078294559_8529907720311013722_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_oc=AQnQnLSYwJNkVebvJyqBH5a7iKQbHp2l2jAEdjKN3Alathm1GMBb54Va_FSYXMECj7vgXOZv0P3S8vUhN6oWZg2X&_nc_ht=scontent.fcgh3-1.fna&oh=9295e308938948c0db583056f94596ce&oe=5ED3E993',
    },
    who: 'me',
    when: '18:31',
    message: 'Boa!',
  },
  {
    id: 2,
    name: 'Felipe Lima',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/p960x960/55510798_665517047236925_2565065794723512320_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQlHDHcR5Mlrl8Tmvd3O7K0_KFp7lCvBa2J8hsSESt21EwFfy85w-K6s962LkzEnCCouf6morjJFBJMcosrIZ29R&_nc_ht=scontent.fcgh3-1.fna&_nc_tp=6&oh=f97ea959247e77f7c01098e2ce56efab&oe=5ED58D33',
    },
    who: 'friend',
    when: '18:32',
    message: 'O App ficou daora!',
  },
  {
    id: 3,
    name: 'Jeanluca Moreno',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/20106779_1376170429143294_9162307370558572724_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQkcYVnpEYUpirEHsKY8YEByjy9Mks_yjDQqXT1Cc-Q4Yu2v0fGbQ0ZqrkC_Iura7u6yp7P_IQ90i7aGk9RDdwUu&_nc_ht=scontent.fcgh3-1.fna&oh=84eb58982d601bed84b31f3c2ff2028e&oe=5ED62046',
    },
    who: 'friend',
    when: '18:35',
    message: 'Caraca',
  },
  {
    id: 4,
    name: 'Victor Vicaria',
    avatar: {
      url:
        'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/92700825_2843888142398455_502284266214785024_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_oc=AQnDnUr4NfR3kndmfNKJhWGv719owZ1T5VRSQMtxW5M-2V4S7s2onRgVMMJlak365HQHZQOTQs3kRlsoWa4gJl1W&_nc_ht=scontent.fcgh3-1.fna&oh=1440b90a0c65881820a6cdfae681cebc&oe=5ED64032',
    },
    who: 'friend',
    when: 'Um minuto atrás',
    message: 'Gostaram do pitch galera?',
  },
];

export default function GloboRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(
    data.sort((itemA, itemB) => (itemA.id < itemB.id ? 1 : -1))
  );
  const [isReady, setIsReady] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const [quality, setQuality] = useState();

  function addMessage() {
    setMessages(
      produce(messages, draft => {
        const messageToPush = {
          id: messages.length + 1,
          name: 'Anônimo',
          when: 'Agora',
          who: 'me',
          message,
        };
        draft.splice(0, 0, messageToPush);
      })
    );

    setMessage('');
  }

  return (
    <Background>
      <Video
        videoId="KVZ-P-ZI6W4"
        apiKey="AIzaSyCoXOplLbeYHPHBzof2whvpuEhkJ66n_rQ"
        onReady={() => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={{ alignSelf: 'stretch' }}
      />
      <Container
        inverted={-1}
        data={messages}
        keyExtractor={message => String(message.id)}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={messages.length - 1}
        renderItem={({ item }) =>
          item.who === 'friend' ? (
            <FriendMessage data={item} />
          ) : (
            <MyMessage data={item} />
          )
        }
      />
      <InputContainer>
        <Input
          value={message}
          setValue={setMessage}
          style={{ flex: 1 }}
          onSubmitEditing={addMessage}
          returnKeyType="send"
        />
        <Button onPress={addMessage}>
          <Icon name="send" size={25} />
        </Button>
      </InputContainer>
    </Background>
  );
}
