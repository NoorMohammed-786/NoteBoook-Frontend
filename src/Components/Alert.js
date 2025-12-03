// import React from "react";

// export default function Alert(props) {
//   const capitalize = (word) => {
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   };
//   return (
//     <div style={{ height: "50px" }}>
//       {props.alert && (
//         <div className={`alert alert-${props.alert.type}`} role="alert">
//           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//         </div>
//       )}
//     </div>
//   );
// }
import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    if(word==="danger"){
      word="error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div 
      style={{
        position: "fixed",
        top: "10px",
        width: "100%",
        display: "flex",
       justifyContent: "center",
       zIndex: 9999,
        pointerEvents: "none", // optional → allows clicks through alert area
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type}`}
          role="alert"
          style={{ pointerEvents: "auto" }} // only alert should be clickable
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

