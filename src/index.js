import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         lat: null,
    //         long: null,
    //         error: ''
    //     }
    // }

    // alternate to initial state
    state = { lat: null, long: null, error: '' }

    // content vissible on screen  (initial data loading..) runs only time when component loads
    componentDidMount() {
        // console.log('did mount');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                this.setState({ long: position.coords.longitude })
            },
            (err) => {
                this.setState({ error: err.message })
            }
        )
    }
    // sit and wait for updates (rerenders)
    componentDidUpdate() {
        console.log('did update');
    }
    // component is not longer shown
    componentWillUnmount() {

    }

    renderContent() {
        if (this.state.error && !this.state.lat) {
            return <div> Error: {this.state.error}</div>
        }
        if (!this.state.error && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return (
            <Spinner message='please allow location' />
        )
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// // exercise
// class App extends React.Component {
//     state = {
//         time: new Date().toLocaleTimeString()
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ time: new Date().toLocaleTimeString() })
//         }, 1000)
//     }
//     render() {
//         return (
//             <div>
//                 the time is {this.state.time}
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'))
