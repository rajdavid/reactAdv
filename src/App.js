import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import Hero from './components/Hero';
// import ErrorBoundry from './components/ErrorBoundry';
// // import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div className="App">
      

      {/* <PortalDemo/> */}

      {/* <ErrorBoundry>
          <Hero heroname='batman' />
      </ErrorBoundry>
      
      <ErrorBoundry>
        <Hero heroname='superman' />
      </ErrorBoundry>
      
      <ErrorBoundry>
        <Hero heroname='joker'/>
      </ErrorBoundry> */}
      <ClickCounter name="david"/>
      <HoverCounter/>
    </div>
  );
}

export default App;
