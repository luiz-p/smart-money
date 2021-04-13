import React, {useCallback, useEffect, useState, ReactElement} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import IEntry from '../../interfaces/Entry';
import {getEntries} from '../../services/Entries';
import Container from '../Core/Container';
import EntryListItem from '../EntryListItem';

const _renderItem = (
  info: ListRenderItemInfo<IEntry>,
): ReactElement<IEntry> => {
  return <EntryListItem entry={info.item} />;
};

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
    <Container
      title="Últimos lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <FlatList // TODO: item.entryAt is Non-serializable value but RealmDB requires a date value
        data={entries}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Container>
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
