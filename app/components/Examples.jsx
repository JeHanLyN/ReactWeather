var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => { //refactoring stateless functional component
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philippines'>Philippines, PH</Link>
        </li>
        <li>
          <Link to='/?location=Korea'>Seoul, Korea</Link>
        </li>
      </ol>
    </div>
  )
};


module.exports = Examples;
