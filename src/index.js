import React from 'react';
import ReactDOM from 'react-dom';
import { addMiddleware } from 'mobx-state-tree';

import './assets/style.scss';
import App from './components/App';

import { groupStore } from './stores/GroupStore';

// addMiddleware(groupStore, (call, next) => {
//     console.log(`[${call.type}] ${call.name}`);
//     return next(call);
// });

const rootElement = document.getElementById('root');
ReactDOM.render(<App group={groupStore} />, rootElement);
