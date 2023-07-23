import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Logo from '../images/your-choice.png'
import Customercare from '../CustomerCare/page'
import AboutUs from '../AboutUs/page'
import '../../css/footer.css'

const Footerdashboard = () => {
    return(
        <div className='footer'>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid gap-48'>
                <div>
                    <Customercare/>
                </div>
                <div>
                  <AboutUs/>
                </div>
                <div>
                <Image src={Logo} alt="logo" width={250} className='logo'/>
                <p>www.yourchoice.com</p>
                </div>
               
             </Grid>
        </div>
    )
};

export default Footerdashboard;