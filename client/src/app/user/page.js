import { useEffect, useState } from 'react'
import Appbar from '../components/Appbar/page'
import Card from '../components/card/page'
import Grid from '@mui/material/Grid';


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
      <div className='m-20'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='gap-6'>
        {itemList && itemList.length > 0 ? (
          itemList.map((item) => {
            console.log(item)
            return (
              <div key={item.id}>
                <Card item={item}/>
              </div>
            );
          })
        ) : (
          <p>No items found.</p>
        )}
      </Grid>
      </div>
    </div>
  );
};

export default UserDashboard;