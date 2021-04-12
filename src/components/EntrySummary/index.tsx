import React from 'react';

import Container from '../Core/Container';
import EntrySummaryChart from '../EntrySummaryChart';
import EntrySummaryList from '../EntrySummaryList';

const EntrySummary: React.FC = () => {
  const entriesGrouped = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
    {key: '4', description: 'Teste', amount: 10},
    {key: '5', description: 'Teste mais caro', amount: 1990},
  ];

  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </Container>
  );
};

export default EntrySummary;
