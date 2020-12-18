Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/BaseModal.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _DraggableView=require('./DraggableView');var _DraggableView2=_interopRequireDefault(_DraggableView);var _ModalContext=require('./ModalContext');var _ModalContext2=_interopRequireDefault(_ModalContext);var _Backdrop=require('./Backdrop');var _Backdrop2=_interopRequireDefault(_Backdrop);var _Animation=require('../animations/Animation');var _Animation2=_interopRequireDefault(_Animation);var _FadeAnimation=require('../animations/FadeAnimation');var _FadeAnimation2=_interopRequireDefault(_FadeAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_ModalProps=require('../type').babelPluginFlowReactPropTypes_proptype_ModalProps||require('prop-types').any;var BackHandler=_reactNative.BackHandler||_reactNative.BackAndroid;var MODAL_OPENING='opening';var MODAL_OPENED='opened';var MODAL_CLOSING='closing';var MODAL_CLOSED='closed';var DEFAULT_ANIMATION_DURATION=150;var HARDWARE_BACK_PRESS_EVENT='hardwareBackPress';var styles=_reactNative.StyleSheet.create({container:_extends({},_reactNative.StyleSheet.absoluteFillObject),modal:{overflow:'hidden',backgroundColor:'#ffffff'},hidden:{top:-10000,left:0,height:0,width:0},round:{borderRadius:8},draggableView:{flex:1,justifyContent:'center',alignItems:'center'}});var BaseModal=function(_Component){_inherits(BaseModal,_Component);function BaseModal(props){_classCallCheck(this,BaseModal);var _this=_possibleConstructorReturn(this,(BaseModal.__proto__||Object.getPrototypeOf(BaseModal)).call(this,props));_this.onHardwareBackPress=function(){return _this.props.onHardwareBackPress();};_this.handleMove=function(event){if(_this.state.modalState===MODAL_CLOSING){return;}if(!_this.lastSwipeEvent){_this.lastSwipeEvent=event;}var newOpacity=void 0;var opacity=_this.props.overlayOpacity;if(Math.abs(event.axis.y)){var lastAxis=Math.abs(_this.lastSwipeEvent.layout.y);var currAxis=Math.abs(event.axis.y);newOpacity=opacity-opacity*currAxis/(_reactNative.Dimensions.get('window').height-lastAxis);}else{var _lastAxis=Math.abs(_this.lastSwipeEvent.layout.x);var _currAxis=Math.abs(event.axis.x);newOpacity=opacity-opacity*_currAxis/(_reactNative.Dimensions.get('window').width-_lastAxis);}_this.backdrop.setOpacity(newOpacity);};_this.handleSwipingOut=function(event){_this.isSwipingOut=true;_this.props.onSwipingOut(event);};_this.state={modalAnimation:props.modalAnimation||new _FadeAnimation2.default({animationDuration:props.animationDuration}),modalState:MODAL_CLOSED};return _this;}_createClass(BaseModal,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.visible){this.show();}BackHandler.addEventListener(HARDWARE_BACK_PRESS_EVENT,this.onHardwareBackPress);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.visible!==prevProps.visible){if(this.props.visible){this.show();return;}this.dismiss();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){BackHandler.removeEventListener(HARDWARE_BACK_PRESS_EVENT,this.onHardwareBackPress);}},{key:'show',value:function show(){var _this2=this;this.setState({modalState:MODAL_OPENING},function(){_this2.state.modalAnimation.in(function(){_this2.setState({modalState:MODAL_OPENED},_this2.props.onShow);});});}},{key:'dismiss',value:function dismiss(){var _this3=this;this.setState({modalState:MODAL_CLOSING},function(){if(_this3.isSwipingOut){_this3.setState({modalState:MODAL_CLOSED},_this3.props.onDismiss);return;}_this3.state.modalAnimation.out(function(){_this3.setState({modalState:MODAL_CLOSED},_this3.props.onDismiss);});});}},{key:'render',value:function render(){var _this4=this;var _state=this.state,modalState=_state.modalState,modalAnimation=_state.modalAnimation;var _props=this.props,rounded=_props.rounded,modalTitle=_props.modalTitle,children=_props.children,onTouchOutside=_props.onTouchOutside,hasOverlay=_props.hasOverlay,modalStyle=_props.modalStyle,animationDuration=_props.animationDuration,overlayOpacity=_props.overlayOpacity,useNativeDriver=_props.useNativeDriver,overlayBackgroundColor=_props.overlayBackgroundColor,style=_props.style,footer=_props.footer,onSwiping=_props.onSwiping,onSwipeRelease=_props.onSwipeRelease,onSwipeOut=_props.onSwipeOut,swipeDirection=_props.swipeDirection,swipeThreshold=_props.swipeThreshold;var overlayVisible=hasOverlay&&[MODAL_OPENING,MODAL_OPENED].includes(modalState);var round=rounded?styles.round:null;var hidden=modalState===MODAL_CLOSED&&styles.hidden;return _react2.default.createElement(_ModalContext2.default.Provider,{value:{hasTitle:Boolean(modalTitle),hasFooter:Boolean(footer)},__source:{fileName:_jsxFileName,lineNumber:225}},_react2.default.createElement(_reactNative.View,{pointerEvents:this.isSwipingOut?'none':'auto',style:[styles.container,hidden],__source:{fileName:_jsxFileName,lineNumber:231}},_react2.default.createElement(_DraggableView2.default,{style:_reactNative.StyleSheet.flatten([styles.draggableView,style]),onMove:this.handleMove,onSwiping:onSwiping,onRelease:onSwipeRelease,onSwipingOut:this.handleSwipingOut,onSwipeOut:onSwipeOut,swipeDirection:swipeDirection,swipeThreshold:swipeThreshold,__source:{fileName:_jsxFileName,lineNumber:232}},function(_ref){var pan=_ref.pan,onLayout=_ref.onLayout;return _react2.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:243}},_react2.default.createElement(_Backdrop2.default,{ref:function ref(_ref2){_this4.backdrop=_ref2;},pointerEvents:_this4.pointerEvents,visible:overlayVisible,onPress:onTouchOutside,backgroundColor:overlayBackgroundColor,opacity:overlayOpacity,animationDuration:animationDuration,useNativeDriver:useNativeDriver,__source:{fileName:_jsxFileName,lineNumber:244}}),_react2.default.createElement(_reactNative.Animated.View,{style:pan.getLayout(),onLayout:onLayout,__source:{fileName:_jsxFileName,lineNumber:256}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.modal,round,_this4.modalSize,modalStyle,modalAnimation.getAnimations()],__source:{fileName:_jsxFileName,lineNumber:260}},modalTitle,children,footer)));})));}},{key:'pointerEvents',get:function get(){var overlayPointerEvents=this.props.overlayPointerEvents;var modalState=this.state.modalState;if(overlayPointerEvents){return overlayPointerEvents;}return modalState===MODAL_OPENED?'auto':'none';}},{key:'modalSize',get:function get(){var _Dimensions$get=_reactNative.Dimensions.get('window'),screenWidth=_Dimensions$get.width,screenHeight=_Dimensions$get.height;var _props2=this.props,width=_props2.width,height=_props2.height;if(width&&width>0.0&&width<=1.0){width*=screenWidth;}if(height&&height>0.0&&height<=1.0){height*=screenHeight;}return{width:width,height:height};}}]);return BaseModal;}(_react.Component);BaseModal.defaultProps={rounded:true,modalTitle:null,visible:false,style:null,animationDuration:DEFAULT_ANIMATION_DURATION,modalStyle:null,width:null,height:null,onTouchOutside:function onTouchOutside(){},onHardwareBackPress:function onHardwareBackPress(){return false;},hasOverlay:true,overlayOpacity:0.5,overlayPointerEvents:null,overlayBackgroundColor:'#000',onShow:function onShow(){},onDismiss:function onDismiss(){},footer:null,onMove:function onMove(){},onSwiping:function onSwiping(){},onSwipeRelease:function onSwipeRelease(){},onSwipingOut:function onSwipingOut(){},useNativeDriver:true};BaseModal.propTypes=babelPluginFlowReactPropTypes_proptype_ModalProps;exports.default=BaseModal;