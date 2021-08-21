import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import ItemCard from '../containers/ItemCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';



class App extends Component {
  componentDidMount() {
    const { setItems } = this.props;
    axios.get('/itemsData.json').then(({ data }) => {
      setItems(data);
    });
  }

  render() {
    const { items, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : items.map((item, i) => <ItemCard key={i} {...item} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
