import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div style={topBarStyle}>
        <h1 style={{ margin: 0, color: 'white' }}>Insurance Management System</h1>
      </div>

      <div style={welcomeContainerStyle}>
        <h2 style={helloCustomerStyle}>Hello, Customer</h2>
        <h2 style={welcomeTextStyle}>Welcome to the Insurance Management System</h2>
        <hr style={horizontalLineStyle} />

        <div style={buttonContainerStyle}>
          <Link to="/login">
            <button style={buttonStyle}>Login</button>
          </Link>
          <Link to="/register">
            <button style={buttonStyle}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const topBarStyle = {
  backgroundColor: 'black',
  padding: '10px',
  textAlign: 'center',
};

const welcomeContainerStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const helloCustomerStyle = {
  fontSize: '8em',
};

const welcomeTextStyle = {
  fontSize: '2.7em',  
  margin: '10px 0', 
};

const horizontalLineStyle = {
  border: 'none',
  borderTop: '1px solid #ccc',
  margin: '20px 0',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const buttonStyle = {
  fontSize: '1.5em', 
  margin: '0 15px', 
};

export default Home;
