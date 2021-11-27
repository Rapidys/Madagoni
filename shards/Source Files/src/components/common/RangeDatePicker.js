import React, {useMemo, useState} from "react";
import classNames from "classnames";
import "../../assets/range-date-picker.css";
import {useDispatch} from "react-redux";
import {TextField} from '@material-ui/core';
import {setDate} from "../../Reducers/addNewPost/setDate";


let RangeDatePicker = (props) => {

  let dispatch = useDispatch()

  let [dateValue, setDateValue] = useState({})

  let handleTest = (e) => {
    setDateValue(newDate)
    props.handleSetDate(e.target.value, props.index)
    const newDate = {...dateValue}
    newDate[e.target.id] = e.target.value
    // dispatch(setDate(value.currentTarget.value))
    console.log(e.target.id)
  }


  const {className} = props;
  const classes = classNames(className, "d-flex", "my-auto", "date-range");
  return (
    <form>
      <TextField
        id={"date"}
        label="შესასრულებელია - მდე"
        type="date"
        selected={dateValue}
        onChange={(e) => handleTest(e)}
        sx={{width: 250}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )

}


// class RangeDatePicker extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       endDate: undefined
//     };
//
//     this.handleEndDateChange = this.handleEndDateChange.bind(this);
//   }
//
//
//   handleEndDateChange(value) {
//     //aqedan avigeb values
//     this.setState({
//       ...this.state,
//       ...{ endDate: new Date(value) }
//     });
//   }
//
//   render() {
//     const { className } = this.props;
//     const classes = classNames(className, "d-flex", "my-auto", "date-range");
//
//     return (
//       <InputGroup className={classes}>
//
//         <DatePicker
//           size="sm"
//           selected={this.state.endDate}
//           onChange={this.handleEndDateChange}
//           placeholderText="End Date"
//           dropdownMode="select"
//           className="text-center"
//         />
//         <InputGroupAddon type="append">
//           <InputGroupText>
//             <i className="material-icons">&#xE916;</i>
//           </InputGroupText>
//         </InputGroupAddon>
//       </InputGroup>
//     );
//   }
// }

export default RangeDatePicker;


//
// class RangeDatePicker extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       startDate: undefined,
//       endDate: undefined
//     };
//
//     // this.handleStartDateChange = this.handleStartDateChange.bind(this);
//     this.handleEndDateChange = this.handleEndDateChange.bind(this);
//   }
//   //
//   // handleStartDateChange(value) {
//   //   this.setState({
//   //     ...this.state,
//   //     ...{ startDate: new Date(value) }
//   //   });
//   // }
//
//   handleEndDateChange(value) {
//     this.setState({
//       ...this.state,
//       ...{ endDate: new Date(value) }
//     });
//   }
//
//   render() {
//     const { className } = this.props;
//     const classes = classNames(className, "d-flex", "my-auto", "date-range");
//
//     return (
//       <InputGroup className={classes}>
//         <DatePicker
//           size="sm"
//           selected={this.state.startDate}
//           onChange={this.handleStartDateChange}
//           placeholderText="Start Date"
//           dropdownMode="select"
//           className="text-center"
//         />
//         <DatePicker
//           size="sm"
//           selected={this.state.endDate}
//           onChange={this.handleEndDateChange}
//           placeholderText="End Date"
//           dropdownMode="select"
//           className="text-center"
//         />
//         <InputGroupAddon type="append">
//           <InputGroupText>
//             <i className="material-icons">&#xE916;</i>
//           </InputGroupText>
//         </InputGroupAddon>
//       </InputGroup>
//     );
//   }
// }
//
// export default RangeDatePicker;
