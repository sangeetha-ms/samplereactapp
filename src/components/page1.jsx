import React, { Component } from 'react';
import Page2 from './page2';

class page1 extends Component {

    // const , let, var

    constructor(props) {
        super(props);

        this.state = {
            name: "karthik D",
            name3: "karthikeyan D",
            num: 10,
            arr: [],
            flt: 10.2,
        }
    };
    componentDidMount() {

        const arr2 = [1, 2, 3, 4];

        this.setState({
            arr: arr2
        })
    }


    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                {
                    this.state.arr.map((i)=>

                        <p>{i}</p>
                    )
                }

                <Page2 fullname={this.state.name3}/>
            </div>
        );
    }
}

export default page1;



// export class Subpage extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

