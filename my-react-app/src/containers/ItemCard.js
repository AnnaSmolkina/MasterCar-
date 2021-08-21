import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ItemCard from '../components/ItemCard';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.products.reduce((count, item) => count + (item.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemCard);
