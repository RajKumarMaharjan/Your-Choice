import { useEffect, useState } from 'react';
import Appbar from '../components/Appbar/page';
import Card from '../components/card/page';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../css/user.css'

const UserDashboard = () => {
  const [itemList, setItemList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchItem = async (page=1) => {
    try {
      const res = await fetch('http://localhost:8080/item?page='+page)
      const data = await res.json();
      setItemList(data.ClipboardItemList);
      setPageCount(data.pageCount);
    } 
    catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, value)=>{
    fetchItem(value)
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className=' bg-slate-50'>
      <Appbar />
      <div className='mt-20 mx-28 justify-items-center'>
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
      <Stack spacing={2}>
      <Pagination 
      count={pageCount}
      onChange = {handleChange}
       />
    </Stack>
    </div>
  );
};

export default UserDashboard;