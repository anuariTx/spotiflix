import { createRoutine } from 'redux-saga-routines';

import { FETCH_LIST_ITEM } from '@rdx/action-types';

export const fetchListItemAction = createRoutine(FETCH_LIST_ITEM);
