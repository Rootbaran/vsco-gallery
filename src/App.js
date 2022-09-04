import { Instagram } from '@material-ui/icons';
import React from 'react';
import Gallery from './Gallery';


function App() {
  return (
    <>

    
     <article> 
    <header> 
        
       
       
      

         <ul> <div className='menü2'>
         <div align="center"> 
         
         <img src="https://www.svgrepo.com/show/306943/vsco.svg"  className='logo2'/> 
         
      
         <a href="#" class="gettheapp" >Get the app</a> 
         <li> <a class="menü" href="#home">Community</a> </li>
         <li> <a href="#contact">Support</a> </li>
         <li>  <a href="#about">Sign in</a> </li>
         <li>  <a href="#about">My Home</a> </li> 
         
         
         <div className='leftmenu'>  
        
         <svg xmlns="https://assets.vsco.co/assets/images/icons/icon-search.svg" width="20" height="" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg> 

           </div>
           
            
        
         </div>

         
          </div> </ul>
          
      


    </header>
   

 <div className='profil'>
         
    
     <div align="center"> 
         
  <img src="https://64.media.tumblr.com/28c712f38cc6af984c3c8fdb7cd23b34/tumblr_n5wkq9eTh81t8e8cao1_400.gifv" className='ProfilePicture'/></div>
         
            


             <h2 id='başlık' style={{textAlign: 'center'}}>Fotoğraf Galerisi</h2>
            
                         <p id='bio'> by Rootbarann </p>                                 
                       
                         <p id='bio'> bio 2 </p>  


   <div align="button">  
      <button type="button" class="button">Follow</button>
   </div>
           
            
 </div>
 
          </article>
 
      <div className='koleksiyon' >

        <nav>

            koleksiyon kısmı  paddingler 80-80


        </nav>


      </div>
 

    <Gallery />
   
   
    <div className='Footer'> 
 
  <footer> 

 
     
      <ul className='footeriç'>   

         








      <li> <div class="Company">Company</div> 
           
           <ul className='companylinks'>

      <li> 

         <a href="/about/company">About</a>

     </li>
          
      <li>

         <a href="/about/Careers">Careers</a>

      </li>



           </ul>
           
           
           </li>
           



           <li> <div class="Comunity">Comunity</div> 
           
           <ul className='companylinks'>

      <li> 

         <a href="/about/company">Guidelines</a>

     </li>
          
      <li>

         <a href="/about/Careers">Support</a>

      </li>

     
            <li>

         <a href="/about/Comunity">Community</a>

      </li>

      <li>

         <a href="/about/Redeem">Redeem</a>

      </li>
      
      




           </ul>
           
           
           </li>
           
           
           
           
           
           
           
           
           
           
           
             </ul> 

           
           
          
          
          
           <small>© VSCO 2022. All rights reserved. <br/> (By Rootbarann) </small>
  </footer>
  </div>

    </>
  );
}


export default App;

