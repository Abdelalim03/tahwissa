import { initialViewState } from '@/data/data';
import {createStore} from 'redux';

function mapStateReducer(state, action) {
  switch (action.type) {
    case 'setViewState':
      return {...state, viewState: action.payload};

    default:
      return state;
  }
}

const defaultMapState = {
  mapStyle: 'mapbox://styles/mapbox/streets-v11',
  viewState: initialViewState
};

export default createStore(mapStateReducer, defaultMapState);