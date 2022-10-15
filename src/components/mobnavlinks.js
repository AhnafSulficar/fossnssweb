import { Link } from 'gatsby';
import React from 'react';

const MobNavLinks = props => {
    const [active, setActive] = React.useState(false);
    function changeState() {
        if (!active) setActive(true);
        else setActive(false);
    }
    const [activeTroop, setActiveTroop] = React.useState(false);
    function changeStateTroop() {
        if (!activeTroop) setActiveTroop(true);
        else setActiveTroop(false);
    }

    return (
        <ul className={props.activateStatus}>
            <li>
                <p>
                    <Link onClick={props.action} to='/' activeClassName='mobactive-link'>
                        HOME
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/blog'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        BLOG
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/events'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        EVENTS
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/minidebconf'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        MiniDebConf
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/about'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        ABOUT
                </Link>
                </p>
            </li>
            <li>
            <div>
                <button
                    className={
                        activeTroop ? 'accordion activate-accordion' : 'accordion'
                    }
                    onClick={changeStateTroop}>
                    TROOP
                </button>
                <NestedListTroop
                    activateStatus={
                        activeTroop ? 'nestedListTroop activate-nestedList' : 'nestedList'
                    }
                />
            </div>
            </li>
            <div>
                <button
                    className={
                        active ? 'accordion activate-accordion' : 'accordion'
                    }
                    onClick={changeState}>
                    MORE
                </button>
                <NestedList
                    activateStatus={
                        active ? 'nestedList activate-nestedList' : 'nestedList'
                    }
                />
            </div>
        </ul>
    );
};

const NestedList = props => (
    <ul className={props.activateStatus}>

        <li>
            <p>
                <Link
                    to='/news'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    NEWS
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/gallery'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    GALLERY
            </Link>
            </p>
        </li>
    </ul>
);

const NestedListTroop = props => (
    <ul className={props.activateStatus}>

        <li>
            <p>
                <Link
                    to='/troop2021'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    2021
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/troop2020'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    2020
            </Link>
            </p>
        </li>
    </ul>
);

export default MobNavLinks;
