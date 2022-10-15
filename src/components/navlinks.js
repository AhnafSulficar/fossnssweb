import { Link } from 'gatsby';
import React from 'react';

const NavLinks = () => {
    const [active, setActive] = React.useState(false);
    const [activeTroop, setActiveTroop] = React.useState(false);
    function activateDropdown() {
        if (!active) setActive(true);
    }
    function deactivateDropdown() {
        if (active) setActive(false);
    }

    function activateDropdownTroop() {
        if (!activeTroop) setActiveTroop(true);
    }
    function deactivateDropdownTroop() {
        if (activeTroop) setActiveTroop(false);
    }
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/' activeClassName='active-link'>
                    HOME
                </Link>
            </li>
            <li>
                <Link
                    to='/blog'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    BLOG
                </Link>
            </li>
            <li>
                <Link
                    to='/events'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    EVENTS
                </Link>
            </li>
            <li>
                <Link
                    to='/minidebconf'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    MiniDebConf
                </Link>
            </li>
            
                <div role="button" onMouseLeave={deactivateDropdownTroop} tabIndex={0}>

                    <button className='accordion' onMouseEnter={activateDropdownTroop}
                    >TROOP
                        <div className={activeTroop ? 'button activate-button':''} />

                    </button>
                    <NestedListTroop
                        activateStatusTroop={
                            activeTroop ? 'nestedList activate-nestedList' : 'nestedList'
                        }
                    />
                </div>
            
            <li>
                <Link
                    to='/about'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    ABOUT
                </Link>
            </li>

            <div role="button" onMouseLeave={deactivateDropdown} tabIndex={0}>
                <button className='accordion' onMouseEnter={activateDropdown}>
                    <div className={active ? 'button activate-button' : 'button'} />
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
    <ul className={props.activateStatusTroop}>
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
export default NavLinks;
