import { Button } from "react-bootstrap"
import FormatCurrency from "../Utility/FormatCurrency"
import { useContext, useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { context } from "../Context/Context"

interface StoreItemsProps {
    id : number 
    name : string 
    price : number 
    imgUrl : string
}

const StoreItems = ({id , name , price , imgUrl} : StoreItemsProps) => {

    const [showPurchse ,setShowPurchase] = useState(false)

    const {decreasmentQunatity ,increasmentQunatity ,removeCart , getItemQuantity } = useContext(context)

    const quantity = getItemQuantity(id)

    const showingQuantity = () : number | undefined =>{
        if(quantity === 0)
            setShowPurchase(false)
        else {
            return quantity
        }
    }

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="card">
                    <img style={{width : '100%' , height : '300px'}} src={imgUrl} className="card-img-top" alt="Book" />
                    <div className="card-body d-flex justify-content-between">
                        <h4>{name}</h4>
                        <h4 className="me-2">{FormatCurrency(price)}</h4>
                    </div>
                    <div className="text-center">
                        {
                            showPurchse ? 
                            <>
                              <div className="d-flex justify-content-center">
                                <Button onClick={()=>{
                                    increasmentQunatity(id)

                                }}>+</Button>
                                <span className="mx-3 align-self-center fs-5 border py-2 px-3 rounded border-2 border-black">{showingQuantity()}</span>
                                <Button onClick={()=>{
                                    decreasmentQunatity(id)
                                }}>-</Button>
                              </div>
                              <Button onClick={()=>{
                                removeCart(id)
                                setShowPurchase(false)
                              }} className="bg-danger my-3 border-0 px-3">Remove</Button>
                            </>
                            :
                            <Button onClick={()=>{
                                increasmentQunatity(id)
                                setShowPurchase(true)
                            }} className="w-75 mt-2 mb-3 py-2 fw-bold" >Purchase</Button>
                           
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default StoreItems;