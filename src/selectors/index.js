import {createSelector} from 'reselect';


export const selectUser = state => state.session.user;
export const selectMsgId = state => state.message.result;
export const selectMsgEntities = state => state.entities.messages;
export const selectMsg = createSelector(
  [selectMsgId, selectMsgEntities, selectUser],
  (id, entities) => {
    if(entities[id]) {
      return entities[id].content;
    }

    return null;
  }
);
