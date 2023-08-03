 import Item from '../Item/Item'
 const ItemList = ({productos}) => {
 return (
    <div className='containerItemList'>
        
        <div>
           {
            productos.length > 0 &&
            productos.map((prod )=> {
              return (
                    <Item  producto={prod} key={prod.id}/>
                    )
            }
           )}
        </div>

    </div>
  )
}

export default ItemList;
