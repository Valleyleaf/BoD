// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import flowJson from './flowJSON.json';
// import roleFlowJSON from './flowRoleJSON.json';
// import './learnGameFlow.css';

// const LearnGameFlowMenu = () => {
//   const { i18n } = useTranslation();
//   const [roleSelection, setRoleSelection] = useState(null);
//   const languageData = flowJson[i18n.language] || flowJson.en;
//   const { learnGameFlow, flow } = languageData;
//   const roleFlowData = roleFlowJSON[i18n.language] || roleFlowJSON.en;
//   const { roleFlow } = roleFlowData;

//   const handleRoleClick = (roleId) => {
//     console.log(`Role selected: ${roleId}`);
//     setRoleSelection(roleId);
//   };

//   return (
//     <div id='roleContainer' className='flexColumn center-content'>
//       {roleFlow.map((flow, index) => (
//         <div key={index}>
//           <div className='gameFlowTextContainer'>
//             <div className='roleButtons'>
//               <button id='Explorer' onClick={() => handleRoleClick('Explorer')}>
//                 <img src={flow.roleButton1Image} alt={flow.roleButton1}/>
//               </button>
//               <button id='HomeGuard' onClick={() => handleRoleClick('HomeGuard')}>
//                 <img src={flow.roleButton2Image} alt={flow.roleButton2}/>
//               </button>
//               <button id='Settler' onClick={() => handleRoleClick('Settler')}>
//                 <img src={flow.roleButton3Image} alt={flow.roleButton3}/>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LearnGameFlowMenu;