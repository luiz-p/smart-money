import React, {useCallback, useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import IEntry from '../../interfaces/Entry';
import {getEntries} from '../../services/Entries';

const EntryList: React.FC = () => {
  const navigation = useNavigation();

  const [entries, setEntries] = useState<
    Realm.Results<IEntry & Realm.Object>
  >();

  const loadEntries = useCallback(async () => {
    const data = await getEntries();
    setEntries(data);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadEntries();
    });
    return unsubscribe;
  }, [navigation, loadEntries]);

  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        // TODO: item.entryAt is Non-serializable value
        data={entries}
        renderItem={({item}) => (
          <>
            <Text>R${item.amount}</Text>
            <Button
              title={item.id}
              onPress={() => navigation.navigate('NewEntry', {entry: item})}
            />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
