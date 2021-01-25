import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from '../../page/tabar/home'
import Classify from '../../page/tabar/classify'
import Shopcart from '../../page/tabar/shopcart'
import Order from '../../page/tabar/order'
import User from '../../page/tabar/classify'
import tabarCss from './tabar.module.css'

export default class tabar extends Component {
    render() {
        const tabarList = [{title: '首页', url: '/'}, {title: '分类', url: '/classify'}, {
            title: '购物车',
            url: '/shopcart'
        }, {title: '订单', url: '/order'}, {title: '我的', url: '/user'}];
        const tabar = tabarList.map((item) => {
            return <li key={item.url}>
                <Link to={item.url}>{item.title}</Link></li>
        });

        return (
            <Router>
                <ul className={`${tabarCss.tabar} flex-row-around`}>
                    {tabar}
                </ul>

                <Switch>
                    <Route path='/user'>
                        <User/>
                    </Route>
                    <Route path='/order'>
                        <Order/>
                    </Route>
                    <Route path='/shopcart'>
                        <Shopcart/>
                    </Route>
                    <Route path='/classify'>
                        <Classify/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}