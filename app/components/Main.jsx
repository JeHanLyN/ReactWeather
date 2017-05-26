var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}
 // ung this.props.children hndi na pwede kc may argument na props na sa taas
 
module.exports = Main;
