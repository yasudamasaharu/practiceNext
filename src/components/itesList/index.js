import Image from 'next/image'

const ItemList = ({title}) => {
  const itemLists = [
    {
      id: 1,
      path: "/item1.jpg",
      name: "スウェットパーカー",
      price: "3980",
      color: "全二色",
    },
    {
      id: 2,
      path: "/item1.jpg",
      name: "スウェットパーカー",
      price: "3980",
      color: "全二色"
    },
    {
      id: 3,
      path: "/item1.jpg",
      name: "スウェットパーカー",
      price: "3980",
      color: "全二色"
    },
    {
      id: 4,
      path: "/item1.jpg",
      name: "スウェットパーカー",
      price: "3980",
      color: "全二色"
    }
  ];
  
  return (
    <div className='flex flex-col'>
      <h3 className="mb-4 ">{title}</h3>
      <ul className='flex max-w-104 w-10/12 rounded-xl bg-gray-400'>
        {
          itemLists.map(({id, path, name, price, color}) => {
            return (
              <li className='w-3/12 bg-gray-300' key={id}>
                <img src={path} className="w-full object-cover" />
                  <p className="mb-2 text-base font-medium">商品名　{name}</p>
                  <p className="mb-1 text-lg font-semibold">価格　¥{price}</p>
                  <span className='text-sm'>カラー　{color}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
    
}

export default ItemList;