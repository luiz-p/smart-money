import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import IEntry from '../../interfaces/Entry';
import {getEntries} from '../../services/Entries';

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState<
    Realm.Results<IEntry & Realm.Object>
  >();

  useEffect(() => {
    (async () => {
      const data = await getEntries();
      setEntries(data);
    })();
    console.log('EntryList :: useEffect');
  }, []);

  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            {item.description}: R${item.amount}
          </Text>
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
