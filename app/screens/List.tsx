import {View, Button} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {FIREBASE_AUTH} from '../../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({navigation}: RouterProps) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => navigation.navigate('details')}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

export default List;
