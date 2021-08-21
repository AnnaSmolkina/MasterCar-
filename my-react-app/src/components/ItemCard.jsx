import React from 'react';
import { Card, Image, Icon, Button, Header, Modal } from 'semantic-ui-react';

const ItemCard = item => {
  const { name, itemGroupTire,itemGroupDisk,itemGroupLiquids, itemGroupOils, price, foto, addToCart, addedCount,
         type,width, diameter,seson, height, heightProfile, structure,color, volume, model } = item;
  const [open, setOpen] = React.useState(false);
  return (
    <Card>
      <div className="card-image">
        <Image src={foto} />
      </div>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{itemGroupTire|| itemGroupDisk || itemGroupLiquids || itemGroupOils}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
      
          <Icon name='money' />
          {price}&nbsp;бел.руб.
      
      </Card.Content>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Подробнее</Button>}
      
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={foto} wrapped />
        <Modal.Description>
          <Header>Характеристики</Header>
            {type}<br/>
            {seson}<br/>
            {width}<br/>
            {diameter}<br/>
            {height}<br/>
            {heightProfile}<br/>
            {structure}<br/>
            {volume}<br/>
            {color}<br/>
            {model}<br/>

         </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Назад
        </Button>
        <Button
          content="В корзину"
          labelPosition='right'
          icon='checkmark'
          onClick={addToCart.bind(this, item)}
          positive
         />
      </Modal.Actions>
    </Modal>
        <Button onClick={addToCart.bind(this, item)} color='green'>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ItemCard;
