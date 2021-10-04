import * as React from 'react';
import { TextInput, Card } from 'react-native-paper';

const Input = () => {
  const [text, setText] = React.useState('');

  return (
      <Card.Content>
        <TextInput
          label="Password"
          secureTextEntry
          left={<TextInput.Icon name="user" />}
        />
        <TextInput
          label="Password"
          secureTextEntry
          left={<TextInput.Icon name="lock" />}
        />
      </Card.Content>
  );
};

export default Input;