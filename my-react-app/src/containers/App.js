import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../actions/items';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (items, filterBy) => {
  switch (filterBy) {
    case 'all':
      return orderBy(items, 'name', 'asc');
    case 'itemGroupDisk':
      return orderBy(items, 'itemGroupDisk', 'asc');
    case 'itemGroupTire':
      return orderBy(items, 'itemGroupTire', 'asc');
    case 'itemGroupLiquids':
      return orderBy(items, 'itemGroupLiquids', 'asc');
    case 'itemGroupOils':
      return orderBy(items, 'itemGroupOils', 'asc');
    
    default:
      return items;
  }
};

const filterItems = (items, searchQuery) =>
  items.filter(
    o =>
      o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
     
  );

const searchItems = (items, filterBy, searchQuery) => {
  return sortBy(filterItems(items, searchQuery), filterBy);
};

const mapStateToProps = ({ items, filter }) => ({
  items: items.products && searchItems(items.products, filter.filterBy, filter.searchQuery),
  isReady: items.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
