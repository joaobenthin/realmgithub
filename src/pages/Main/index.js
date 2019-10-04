import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';

import {
  Container, Title, Form, Input, Submit, List,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input autoCapitalize="none" autoCorrect={false} placeholder="Procurar repositório..." />

        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#fff" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'unform',
            description: 'ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!',
            stars: 1234,
            forks: 123,
          },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} />
        )}
      />
    </Container>
  );
}
