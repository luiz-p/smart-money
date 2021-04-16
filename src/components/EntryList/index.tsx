import React from 'react';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import useEntries from '../../hooks/useEntries';
import ICategory from '../../interfaces/Category';
import Container from '../Core/Container';
import EntryListItem from '../EntryListItem';

interface EntryListProps {
  days?: number;
  category: ICategory;
}

const EntryList: React.FC<EntryListProps> = ({days = 7, category}) => {
  const navigation = useNavigation();

  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={() => navigation.navigate('Report')}>
      <FlatList // TODO: item.entryAt is Non-serializable value but RealmDB requires a date value
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={entries?.length ? index === entries.length - 1 : false}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
