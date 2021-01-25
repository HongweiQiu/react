import React, {Component} from 'react'
import homeCss from './home.module.scss'
import axios from 'axios'
export default class home extends Component {
    componentDidMount() {
        axios.get('http://test.caidj.cn/mobileOrder/indexItem')
    }

    render() {
        const navs = [1, 2, 3, 4];
        const nav = navs.map((item) => {
            return <li key={item}>
                nav+{item}
            </li>
        })
        return (
            <div>
                <ul className={`flex-row-around`}>
                    {nav}
                </ul>
                <div className={homeCss.home}>
                    <ul className={`flex-row-around`}>
                        {nav}
                    </ul>
                </div>
            </div>


        )
    }

}