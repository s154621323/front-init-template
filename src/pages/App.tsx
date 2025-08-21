// import { useImmer } from '@hooks/useImmer';
// // import { useState } from 'react';

// const App = () => {
//   const [data, setData] = useImmer({ info: '京程一灯' });
//   console.log('🐻 App component rendered');
//   return (
//     <>
//       <h1
//         className="text-4xl text-[#09F]"
//         onClick={() => {
//           setData(draft => {
//             draft.info = '京程一灯';
//             console.log('🐻 setData called');
//           });
//         }}
//       >
//         {data.info}
//       </h1>
//     </>
//   );
// };
// App.whyDidYouRender = true; // Enable WDYR for this component
// export default App;

// setData(draft => {
//   draft.info = '京程一灯';
// });

import { useRoutes } from 'react-router-dom';
import routes from '@/routes/index';

const App = () => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};
export default App;
