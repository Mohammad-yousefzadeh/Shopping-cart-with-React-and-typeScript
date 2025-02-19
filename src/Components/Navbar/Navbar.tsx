import { NavLink } from "react-router-dom";
import { Button , Navbar as Nav} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart , faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { context } from "../../Context/Context";
import './Navbar.css'
import SideBarCart from "../SideBarCart";
import storeData from '../../Data/items.json'
import FormatCurrency from "../../Utility/FormatCurrency";

const Navbar = () => {

    const { calculateQuantity , quantity} = useContext(context)
    const [showSideBar , setShowSideBar] = useState(false)

    return (
        <Nav className="shadow-sm py-3 px-2 px-lg-5 bg-white" fixed="top">  
            <div className={`closing-navbar shadow-lg ${showSideBar ? 'opening-navbar' : ''}`}>
                <FontAwesomeIcon onClick={()=>{
                    setShowSideBar(false)
                }} className="sideBar-Xmark mb-5" icon={faXmark} />
                {quantity.map(items => (
                    <SideBarCart key={items.id} {...items} />
                ))}
                <h5 className="fw-bolder p-2 d-flex justify-content-end">
                Total Price : {FormatCurrency(quantity.reduce((total , items)=>{
                    const item = storeData.find(i => i.id == items.id)
                    return total + ((item?.price || 0) * items.quantity)
                } , 0))}
                </h5>
            </div> 
            <div className="me-auto">
                <NavLink to='/' style={({isActive})=>{
                    return {color : isActive ? 'red' : 'black'}
                }} className='text-decoration-none'>Home</NavLink>
                <NavLink style={({isActive})=>{
                    return {color : isActive ? 'red' : 'black'}
                }} to='/store' className='mx-3 mx-lg-5 text-decoration-none'>Store</NavLink>
                <NavLink style={({isActive})=>{
                    return {color : isActive ? 'red' : 'black'}
                }} to='/about' className='text-decoration-none'>About</NavLink>
            </div>
            <Button className={`position-relative ${calculateQuantity() > 0 ? 'd-inline-block' : 'd-none'}`} onClick={()=>{
                setShowSideBar(true)
            }}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className="rounded-circle bg-danger px-2"
                style={{position : 'absolute' , bottom : 0 , right : 0 , transform : 'translate(50% , 50%)'}}>{calculateQuantity()}</div>
            </Button>
        </Nav>
    );
}
 
export default Navbar;