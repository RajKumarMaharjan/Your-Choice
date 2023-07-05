import { useEffect, useState } from 'react';
import Appbar from '../components/Appbar/page';

const UserDashboard = () => {
  const [itemList, setItemList] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await fetch('http://localhost:8080/item');
      const data = await res.json()
      setItemList(data.ClipboardItemList);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
console.log(itemList)
  return (
    <div>
      <Appbar />
      <div>
        {itemList && itemList.length > 0 ? (
          itemList.map((item) => {
            console.log(item)
            return (
              <div>
                <h4>{item['Item Name']}</h4>
                <p>{item['Item Description']}</p>
                <p>{item['Item Description']}</p>
                <p>{item['Item Image']}</p>
               
              </div>
            );
          })
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;