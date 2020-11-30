import { fork, all } from 'redux-saga/effects';
import employee from './employee';

function* index() {
yield all([
	fork(employee),
]);
}

export default index;
