var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered ">
          {props.children}
        </div>
      </div>
    </div>
  );
}
 // ung this.props.children hndi na pwede kc may argument na props na sa taas

module.exports = Main;
