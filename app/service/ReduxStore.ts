import {createStore} from "redux"
import rootReducer from "../reducer/Index"

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore
