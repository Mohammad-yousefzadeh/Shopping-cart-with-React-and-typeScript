import StoreItems from '../Components/StoreItems';
import itmes from '../Data/items.json'

const Store = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        itmes.map((item)=>(
                            <StoreItems key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
 
export default Store;