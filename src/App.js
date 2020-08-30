import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './HoverCounterTwo';
// import User from './components/User';
//import ClickCounter from './components/ClickCounter';
//import HoverCounter from './components/HoverCounter';
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
      {/* <ClickCounter name="david"/>
      <HoverCounter/> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'david': 'guest'}/> */}

      <Counter>
      {(count, incrementcount) => (
        <ClickCounterTwo count={count} incrementcount={incrementcount}/>
      )}
      </Counter>
      <Counter>
      {(count, incrementcount) => (
        <HoverCounterTwo count={count} incrementcount={incrementcount}/>
      )}

      </Counter>

    </div>
  );
}

export default App;
