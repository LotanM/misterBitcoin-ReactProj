// import { Component } from 'react'

// import './RobotFilter.scss'

// export class RobotFilter extends Component {
//     state = {
//         type: '',
//         model: '',
//         minBatteryStatus: '',
//         maxBatteryStatus: ''
//     }
//     handleChange = ({ target }) => {
//         const field = target.name
//         const value = target.type === 'number' ? +target.value : target.value
//         this.setState({ [field]: value }, () => {
//             this.props.onChangeFilter({ ...this.state })
//         })
//     }
//     render() {
//         const { type, model, minBatteryStatus, maxBatteryStatus } = this.state
//         return (
//             <form className="robot-filter" onSubmit={(ev) => ev.preventDefault()}>
//                 <label htmlFor="model">Model</label>
//                 <input type="text" id="model" name="model" value={model} onChange={this.handleChange} />

//                 <label htmlFor="type">Type</label>
//                 <select id="type" value={type} name="type" onChange={this.handleChange}>
//                     <option value="">Pick a type</option>
//                     <option value="Cooking">Cooking</option>
//                     <option value="Pleasure">Pleasure</option>
//                     <option value="Cleaning">Cleaning</option>
//                     <option value="Office">Office</option>
//                 </select>

//                 <label htmlFor="minBatteryStatus">Min Battery Status</label>
//                 <input type="number" id="minBatteryStatus" name="minBatteryStatus" value={minBatteryStatus} onChange={this.handleChange} />

//                 <label htmlFor="maxBatteryStatus">Max Battery Status</label>
//                 <input type="number" id="maxBatteryStatus" value={maxBatteryStatus} name="maxBatteryStatus" onChange={this.handleChange} />
//             </form>
//         )
//     }
// }
