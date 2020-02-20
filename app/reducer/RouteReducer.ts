import * as constants from "../action/RouteAction"
import {routeGate} from "../viewmodel/RouteVM"

const initialState = {
  booth: routeGate.AUTH
}

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.MODIFY_BOOTH:
      return {
        ...state,
        booth: action.payload.booth
      }
    default:
      return state
  }
}
export default routeReducer
