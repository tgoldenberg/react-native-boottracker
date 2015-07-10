var React = require('react-native');
var Main = require('./Components/Main');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

class Boottracker extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Github Boottracker",
          component: Main
        }} />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  }
});

AppRegistry.registerComponent('Boottracker', () => Boottracker);
