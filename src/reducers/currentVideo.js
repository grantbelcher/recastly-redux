import Redux from 'redux';


var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type){
    case 'CHANGE_VIDEO':

      return action.video
    default:
      return null
  }
  // if (action.type === 'CHANGE_VIDEO') return {video: action.video}
  // return null
};

export default currentVideoReducer;
