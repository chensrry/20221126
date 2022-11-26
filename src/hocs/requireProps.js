// @requireProps({
//     userNname: (v) => {
//         return !!v;
//     },
// gender: (v) => {
//   return v === "female";
// };
// })

//connect()()

// @connect()

// const f = (args) => {
//   return (args) => {
//     return (args) => {};
//   };
// };

// f(1)(2)(3)(4);

// import { connect } from "dva";
import _ from "lodash";
import React from "react";

const requireProps = (propConditions) => (WrapperComps) => (props) => {
  if (
    _.some(propConditions, (propCondiion, propName) => {
      let passed = false;
      passed = propCondiion.call(null, props[propName], props);
      return !passed;
    })
  ) {
    return <div>loading</div>;
  }

  return React.createElement(WrapperComps, props);
};
