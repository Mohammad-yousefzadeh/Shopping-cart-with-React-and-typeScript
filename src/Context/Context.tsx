import { createContext, ReactNode , useState } from "react";

interface ShoppingCartProps{
    children : ReactNode
}

interface CartsQuantity {
    id : number 
    quantity : number
}

interface SideCartState {
    id : number
    imgUrl : string
    name : string
    price : number
}

interface ShoppingCartPropperties{
    getItemQuantity : (id : number) => number
    increasmentQunatity : (id : number) => void
    decreasmentQunatity : (id : number) => void
    removeCart : (id : number) => void
    calculateQuantity : () => number
    quantity : CartsQuantity[]
    sideCart : SideCartState[]
}


export const context = createContext({} as ShoppingCartPropperties)

const ContextProvider = ({children} : ShoppingCartProps) => {

    const [quantity , setQuantity] = useState<CartsQuantity[]>([])
    const [sideCart] = useState<SideCartState[]>([])

    const getItemQuantity = (id : number) =>{
        return quantity.find(item=>
            item.id === id
        )?.quantity || 0
    }
    const increasmentQunatity = (id : number) =>{
        setQuantity(curritems =>{
            if(curritems.find(item => item.id === id ) == undefined){
                return [...curritems , {id , quantity : 1}]
            }
            else{
                return curritems.map(item=>{
                    if(item.id === id){
                        return {...item , quantity : item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    const decreasmentQunatity = (id : number) =>{
        setQuantity((curritem)=>{
            if(curritem.find(item=>item.id === id)?.quantity == 1){
                return curritem.filter(item=>item.id !== id)
            }
            else{
                return curritem.map((items)=>{
                    if(items.id === id){
                        return {...items , quantity : items.quantity - 1}
                    }
                    else{
                        return items
                    }
                })
            }
        })       
    }
    const removeCart = (id : number) =>{
        setQuantity((curritem)=>{
            return curritem.filter(item=>item.id !== id)
        })
    }
    const calculateQuantity = () =>{
        let result = 0
        quantity.map(item=> result += item.quantity)
        return result
    }

    return (
        <context.Provider value={
            {
                getItemQuantity ,
                increasmentQunatity ,
                decreasmentQunatity ,
                removeCart ,
                sideCart , 
                calculateQuantity ,
                quantity ,
            }
        }>
            {children}
        </context.Provider>
    );
}
 
export default ContextProvider;