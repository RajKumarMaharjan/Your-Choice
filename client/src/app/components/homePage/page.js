'use client';
import NavBar from "../../components/navbar/page"
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '../../components/card/page';
import Image from 'next/image'
import Category from '../List/page'
import '../../css/homepage.css'
import bannerImage from '../images/online-shopping.jpeg'

const Home = () => {
  const [itemList, setItemList] = useState([])

  const fetchItem = async () => {
    try {
      const res = await fetch('http://localhost:8080/item')
      const data = await res.json();
      setItemList(data.ClipboardItemList);
    } 
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className='body'>
      <NavBar />
      <div className="category flex">
        <Category/> 
        <p className="-ml-12 mt-6">Category</p>
      </div>
      <>
      <Image src={bannerImage} alt="Shopping" className="bannerImage"/>
      </>
      <div className='mt-20 mx-28 justify-items-center'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='gap-6'>
        {itemList && itemList.length > 0 ? (
          itemList.map((item) => {
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
    
  )
}

export default Home
