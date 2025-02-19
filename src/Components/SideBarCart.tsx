import FormatCurrency from "../Utility/FormatCurrency"
import storeData from '../Data/items.json' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { context } from "../Context/Context"

interface SideBarCartProps {
    id : number
    quantity : number
}

const SideBarCart = ({id , quantity} : SideBarCartProps) => {

    const {removeCart} = useContext(context)

    const item = storeData.find(i => i.id == id)
    if(item == undefined) return undefined

    return (
        <>
          <div className="d-flex justify-content-between px-2 mb-3">
            <div className="d-flex">
                <img style={{width : '120px' , height : '90px' , border : '2px solid black' , borderRadius : '7px'}} src={item.imgUrl} alt="cart-image" />
                <div className="align-self-center ms-2">
                    <h6>{item.name} 
                        <span className={`text-secondary ms-1 ${quantity > 1 ? 'd-inline' : 'd-none'}`}>
                            <FontAwesomeIcon style={{fontSize : '12px'}} icon={faXmark} />{quantity}
                        </span>
                    </h6>
                    <span className="text-secondary">{FormatCurrency(item.price)}</span>
                </div>
            </div>
            <div className="d-flex align-self-center">
                <span className="align-self-center">{FormatCurrency(item.price * quantity)}</span>
                <FontAwesomeIcon onClick={()=>{
                    removeCart(id)
                }} icon={faXmark} style={{cursor : 'pointer'}} 
                className="border border-2 border-black rounded-2 p-2 mx-2 text-danger" />
            </div>
          </div>
        </>
    );
}
 
export default SideBarCart;