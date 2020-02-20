import React, {Component} from "react"// eslint-disable-line no-unused-vars
import * as actions from "../action/RouteAction"
import {connect} from "react-redux"
import {View, Text} from "react-native"// eslint-disable-line no-unused-vars

interface routeProps {
  booth?: routeGate
}

interface routeState {
}

export enum routeGate {
  AUTH = 0,
  MAIN = 1
}

class RouteViewModel extends Component <routeProps, routeState> {// eslint-disable-line require-jsdoc
    calculateView = () => {
      // console.log(this.props)
      switch (this.props.booth) {// eslint-disable-line no-invalid-this
        case (routeGate.AUTH):
          return notFoundViewAuth
        case (routeGate.MAIN):
          return notFoundViewMain
        default:
          return notFoundView
      }
    }
    // eslint-disable-next-line require-jsdoc
    render() {
      return (this.calculateView())
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.route.booth)
  return {
    booth: state.route.booth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyBooth: (booth) => {
      dispatch(actions.modifyBooth(booth))
    }
  }
}

const notFoundView = <View><Text>Not found view</Text></View>
const notFoundViewAuth = <View><Text>Not found view auth</Text></View>
const notFoundViewMain = <View><Text>Not found view main</Text></View>

export default connect(mapStateToProps, mapDispatchToProps)(RouteViewModel)
