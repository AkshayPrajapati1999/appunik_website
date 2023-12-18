// /* eslint-disable @next/next/no-img-element */
// function ServiceApp({ serviceApp }: any) {
//   return (
//     <div
//       className="seviceApp_container"
//       data-aos="zoom-out-up"
//       // data-aos-offset="150"
//       data-aos-easing="ease-out-quart"
//       data-aos-once="false"
//       data-aos-anchor-placement="top-center"
//     >
//       {serviceApp.map((servicelist: any, index: number) => {
//         return (
//           <div className="container" key={index}>
//             <div className="row">
//               <div className="col-lg-12">
//                 <h3>{servicelist.title}</h3>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-6 col-sm-12">
//                 <h6>{servicelist.appheading}</h6>
//               </div>
//               <div className="col-lg-6 col-sm-12">
//                 <ul className="servicelist_icon_wrapper">
//                   {servicelist.serviceImages.map((icon: any, index: number) => (
//                     <li className="sevicelist_icon_wrap" key={index}>
//                       <img src={icon.image} alt="service list icon" />
//                       <span>{icon.info}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ServiceApp;
