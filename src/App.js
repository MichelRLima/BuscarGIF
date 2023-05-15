import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import { WhatsappShareButton } from "react-share";
import {BsWhatsapp} from 'react-icons/bs'


function App() {
  const chaveAPI = "XiYOBHVDbb0yBzGOwnDkueFAP4FHfwXf"
  const [gif, setGif] = useState([])
  const [buscarGif, setBuscarGif] = useState("random")

 useEffect ( ()=>{
    const dados = async () =>{
        const response = await axios.get("https://api.giphy.com/v1/gifs/search",
        {
          params:{
            q:buscarGif,
            api_key: chaveAPI,
            limit:50
          }
        }
        )
        setGif(response.data.data);

    }
      dados()
      if(buscarGif === ""){
        setBuscarGif("radom")
      }
 },[buscarGif])


  return (
    <div className="App">
    <div className='tituloGIF'></div>
    
   <input placeholder='Buscar GIF' type='text' onChange={(e)=> setBuscarGif(e.target.value)}></input> 
   
    
    <div className='containerGif'>
      

      {gif.map((gif)=>(
        
        <div className='gif' key={gif.id}><img alt={buscarGif} src={gif.images.fixed_height.url}></img>
        <div className='Link'>
          <WhatsappShareButton url={gif.embed_url}>
            <p>Share</p>
         <BsWhatsapp size={32}/>
        </WhatsappShareButton></div>
        
       
        </div>
      ))}
    </div>
    
    </div>
  );
}

export default App;
