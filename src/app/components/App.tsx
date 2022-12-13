// https://github.com/michael-burrows-github/blog/blob/master/2020/035%20-%20Build%20a%20React%20sidebar%20navigation%20component/src/App.js

import * as React from 'react';
//import './mapVisualize/cssmap.css'

// TS1323: Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node12', or 'nodenext'
//const Empty = React.lazy(() => import('./empty'))

import Empty from './empty'

function App() {

  return (
    <div className='container'>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Empty />
      </React.Suspense>

    </div>
  );
}


export default App;
