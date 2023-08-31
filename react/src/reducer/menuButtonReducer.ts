export const menuButtonInitState = {
    showQuickPlayMenuPopup : false,
    showPlayRankedMenuPopup : false,
    showPlayWithFriendMenuPopup : false,
  }
type menuButtonInitStateType = {
    showQuickPlayMenuPopup : boolean,
    showPlayRankedMenuPopup : boolean,
    showPlayWithFriendMenuPopup : boolean
}
export const enum REDUCER_ACTION_TYPE {
    QUICK_PLAY_MENU,
    RANKED_PLAY_MENU,
    PLAY_WITH_FRIEND_MENU
  }
  
  type ReducerAction = {
    type: REDUCER_ACTION_TYPE
  }
 export const menuButtonReducer = (state : typeof menuButtonInitState, action : ReducerAction) => {
    switch(action.type) {
      case REDUCER_ACTION_TYPE.QUICK_PLAY_MENU:
        return { ...state, showQuickPlayMenuPopup : !state.showQuickPlayMenuPopup}
      case REDUCER_ACTION_TYPE.RANKED_PLAY_MENU:
        return { ...state, showPlayRankedMenuPopup : !state.showPlayRankedMenuPopup}
      case REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU:
        return { ...state, showPlayWithFriendMenuPopup : !state.showPlayWithFriendMenuPopup}
      default:
          throw new Error();
    }
  }