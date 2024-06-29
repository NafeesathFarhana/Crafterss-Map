import React from 'react'
import photo from '../Assets/picbig1.png'
import { useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';




function Supplies() {
  const {userId}=useParams()
  console.log(userId);
  return (
    <div>
      <Nav/>
<img src={photo} alt="" />
<h6 style={{marginRight:'1200px' }}  > <a href={`/home/${userId}`}><span className='text-danger'>Home -- </span></a><b className='text-dark'> Supplies</b></h6>

<h2 className='text-dark fs-1'  style={{fontFamily:'serif' }}>Supplies</h2>
<h4 className='text-dark mt-4 ' style={{fontFamily:'serif'}}>Beginers Kits</h4>

{/* image div */}
<div className="container d-flex m-5 p-3 " style={{backgroundColor:'thistle'}}>
    <div>
    <img src="https://i.etsystatic.com/18124409/r/il/91e238/4079626595/il_570xN.4079626595_7ire.jpg" className='m-3' height={'250px'} width={'230px'}  alt="" />
      <a href="https://www.etsy.com/in-en/listing/1259632218/rakhi-making-diy-kit-craft-kit-starter"><h3 className='text-dark'>Rakhi making Kit</h3></a> 
    </div>
    <div>
    <img src="https://i.etsystatic.com/31200741/r/il/d17ee7/3572479292/il_570xN.3572479292_9euk.jpg" className='m-3' height={'250px'} width={'230px'}  alt="" /> 
        <a href="https://www.etsy.com/in-en/listing/1044681418/beginners-quilling-kit-diy-craft-kit-for?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=paper+craft+kit&ref=sc_gallery-1-5&sts=1&plkey=e1b6c4e5536c302cc80d87ad253794d52df2d9fe%3A1044681418"><h3 className='text-dark'>Paper Craft Kit</h3></a> 
    </div>
    <div>
    <img src="https://childslife.ca/wp-content/uploads/2023/02/craftkits-forkids.jpg" className='m-3' height={'250px'} width={'230px'} alt="" />
       <a href="https://www.etsy.com/in-en/listing/774899241/make-a-mosaic-letter-craft-kit-hanging?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-4&bes=1&sts=1&plkey=67726054b2669a36a29dbf6aba28427f69d0e9ac%3A774899241"><h3 className='text-dark'>Craft Kits for Kids</h3></a>
    </div>
    <div>
        <img src="https://i.etsystatic.com/inv/b92ee5/5148941612/inv_fullxfull.5148941612_2rlvc8sn.jpg?version=0" className='m-3' height={'250px'} width={'230px'} alt="" />
        <a href="https://www.etsy.com/in-en/listing/1518128318/3-set-beginner-embroidery-kit-embroidery?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=embroidery+kit&ref=sr_gallery-1-8&pro=1&frs=1&organic_search_click=1"><h3 className='text-dark'>Embroidery Kit</h3></a>
    </div>
    <div>
        <img src="https://i.etsystatic.com/9557059/r/il/d0e9bf/4229322823/il_570xN.4229322823_cb7f.jpg" className='m-3' height={'250px'} width={'230px'} alt="" />
     <a href="https://www.etsy.com/in-en/listing/1415135778/miniature-doll-kit-crochet-kit-anne?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-14&cns=1&sts=1&plkey=e1f351fb7c3c4073b40cbf649c5e2f663661a940%3A1415135778"><h3 className='text-dark'>Knitting Kits</h3></a>
    </div>
</div>

{/* second div */}
<div className="container d-flex m-5 p-3  " style={{backgroundColor:'thistle'}}>
   <div>
   <img src="https://i.etsystatic.com/6210764/r/il/b27d96/4210696760/il_570xN.4210696760_nbw6.jpg" className='m-3'  height={'250px'} width={'230px'} alt="" />
    <a href="https://www.etsy.com/in-en/listing/1302015262/beginners-knitting-kit-beginners-simple?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=beginners+knit+kit&ref=sr_gallery-1-5&sts=1&organic_search_click=1"><h3 className='text-dark'>Knit beginers Kit</h3></a>
   </div>
<div>
    <img src="https://i.etsystatic.com/18203011/r/il/855d72/2364677362/il_570xN.2364677362_7jdi.jpg" className='m-3' height={'250px'} width={'230px'} alt="" />
   <a href="https://www.etsy.com/in-en/listing/917607696/plants-transparent-embroidery-kit-for?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=beginner+embroidery+kit&ref=sc_gallery-1-2&pro=1&sts=1&plkey=166eac32677193b97c72277853d0adfa17b8ce74%3A917607696"><h3 className='text-dark'>Embroidery Kit</h3></a>
</div>
<div>
    <img src="https://i.etsystatic.com/22706059/r/il/9bb8f2/2722818558/il_570xN.2722818558_kfw4.jpg" className='m-3' height={'250px'} width={'230px'} alt="" />
    <a href="https://www.etsy.com/in-en/listing/1064204365/beginner-macrame-wall-hanging-kit-craft?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=macrame+kit+beginners&ref=sr_gallery-1-2&bes=1&sts=1&organic_search_click=1"><h3 className='text-dark'>Macremes Kits</h3></a>
   </div>
<div>
    <img src="https://i.etsystatic.com/11300972/r/il/082a49/4156928539/il_570xN.4156928539_ijb1.jpg" className='m-3' height={'250px'} width={'230px'} alt="" />
   <a href="https://www.etsy.com/in-en/listing/1199060092/quilling-gift-quilling-kit-for-beginners?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=quilling+kit&ref=sr_gallery-1-17&organic_search_click=1"><h3 className='text-dark'>Quilling Kits</h3></a>
</div>
<div>
  <img src="https://i.etsystatic.com/13407462/r/il/4671a8/1645489019/il_570xN.1645489019_5t0u.jpg"  className='m-3' height={'250px'} width={'230px'} alt="" />
 <a href="https://www.etsy.com/in-en/listing/1447676680/journaling-set-of-64-itemsjournaling?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=scrapbook+kits&ref=sr_gallery-1-2&pro=1&sts=1&organic_search_click=1"><h3 className='text-dark'>Scrapbook Kits</h3></a>
</div>
</div>
<Footer/>
    </div>
    
  )
}

export default Supplies