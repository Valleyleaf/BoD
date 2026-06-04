// import {useState} from 'react';
// import { useTranslation } from 'react-i18next';
// import flowJson from './flowJSON.json';
// import roleFlowJSON from './flowRoleJSON.json';
// import './learnGameFlow.css';
// import ExplorerFlow from './roleFlow/LearnExplorerFlow';
// import HomeGuardFlow from './roleFlow/LearnHomeGuardFlow';
// import SettlerFlow from './roleFlow/LearnSettlerFlow';

// const LearnGameFlow = () => {
//   const [activeView, setActiveView] = useState(null);
//   const { i18n } = useTranslation();
//   const [roleSelection, setRoleSelection] = useState(null);
//   const languageData = flowJson[i18n.language] || flowJson.en;
//   const { learnGameFlow, flow } = languageData;
//   const roleFlowData = roleFlowJSON[i18n.language] || roleFlowJSON.en;
//   const { roleFlow } = roleFlowData;
//   const bgImage = 'https://res.cloudinary.com/dvutcekav/image/upload/v1761272572/S3Rxpw0_oyyxkb.jpg';
  
//   const handleBack = () => {
//     setActiveView(null);
//   };

//   if (activeView === "Explorer") {
//     return <ExplorerFlow onBack={handleBack} />;
//   }

//   if (activeView === "HomeGuard") {
//     return <HomeGuardFlow onBack={handleBack} />;
//   }

//   if (activeView === "Settler") {
//     return <SettlerFlow onBack={handleBack} />;
//   }

//   return (
//       <div
//       className='gameFlowBG'
//       style={{
//       backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${bgImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center top',
//       backgroundRepeat: 'no-repeat'
//       }}>
//         {roleFlow.map((flow, index) => (
//           <div
//             className='gameFlowContainer'
//             key={index}>
//                 <div className='gameFlowContentContainer'>
//                   <h3 className='gameFlowStageTitle'>{flow.title}</h3>
//                   <p className='gameFlowStageDescription'>{flow.description}</p>
//                   <div className='roleButtons'>
//                     <button id='Explorer' onClick={() => setActiveView("Explorer")}>
//                       <img src={flow.roleButton1Image} alt={flow.roleButton1}/>
//                     </button>
//                     <button id='HomeGuard' onClick={() => setActiveView("HomeGuard")}>
//                       <img src={flow.roleButton2Image} alt={flow.roleButton2}/>
//                     </button>
//                     <button id='Settler' onClick={() => setActiveView("Settler")}>
//                       <img src={flow.roleButton3Image} alt={flow.roleButton3}/>
//                     </button>
//                   </div>
//                 </div>
//                 <img className='gameFlowVisualContainer' src={flow.sampleImage} alt={flow.sampleImageAlt}/>
//           </div>
//         ))}
//       </div>
//   );
// };

// export default LearnGameFlow;
