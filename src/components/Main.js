import React, {  useState } from 'react'
import SearchCard from './SearchCard'
import DetailCard from './DetailCard'
import DetailSlider from './DetailSlider'
import axios from 'axios';
import Lottie from "lottie-react";
import animationLooking from './../assets/Animation -2.json'
import notfoundanimation from './../assets/NotFound-Animation.json'
import moveanimation from './../assets/Animation-move.json'
import FilterSection from './FilterSection';
import ChatBot from './ChatBot';
import { API_KEY } from '../config';
const Main = () => {
   const [UserData, setUserData] = useState({
    from: '',
    to: '',
    date: '',
    cabin_class: '',
    airline: '',
    min_price: ""
  })

  const [chatbotMessage,setChatBotMessage] = useState([]);
  const [chatbotInput, setChatBotInput] = useState('');


const [flights, setFlights] = useState([]);
const [SingleData, setSingleData] = useState();
const [loading, setLoading] = useState(true);
const [loadingImage, setLoadingImage] = useState(animationLooking);

const getApiData = async () => {
    setLoading(true);
    setLoadingImage(animationLooking);
    try{
        const response = await axios.get(` https://flight-api-3zx8.onrender.com/api/flights?from=${UserData.from}&to=${UserData.to}&date=${UserData.date}&cabin_class=${UserData.cabin_class}&airline=${UserData.airline}&min_price=${UserData.min_price}`); 
        if (response.data.length > 0) {
        setFlights(response.data);
        setSingleData(response.data[0]);
        setLoading(false);
        }else{
            setLoading(true);
            setLoadingImage(notfoundanimation);
        }
    } catch(error) {
      console.error(error);
      setLoading(true);
      setLoadingImage(notfoundanimation);
    }
}    
    

const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev)=> ({
      ...prev,
      [name]: value
    }))
}

const  handleChangeChatbot = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setChatBotInput(value);
}

const resetFilter = () => {
    setUserData((prev) => ({
      ...prev,
      cabin_class: '',
      airline: '',
      min_price: ''

    }))


    getApiData();
  }

const extractJson = (text) => {

  let convertedtext = text.replace(/```json|```/g, '').trim('');
  return JSON.parse(convertedtext);

  }

const getApiDataChatbot = async () => {
  
  try{
      const chatbotresponse = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,{
    contents: [
      {
        parts: [
          {
            "text": `your a flight search assitent ${chatbotInput} this user input  convert to json format {
            from: '',
            to: '',
            date: '',
            cabin_class: '',
            airline: '',
            min_price: ""
          }`}]}]
  }); 
    const data = await extractJson(chatbotresponse.data.candidates[0].content.parts[0].text);
    let chatmessages = { text: 'user', message:chatbotInput };
    setChatBotMessage(prev => [...prev, chatmessages]);

    setLoading(true);
    setLoadingImage(animationLooking);
    try{
        const response = await axios.get(` https://flight-api-3zx8.onrender.com/api/flights?from=${data.from}&to=${data.to}&date=${data.date}&cabin_class=${data.cabin_class}&airline=${data.airline}&min_price=${data.min_price}`); 
        if (response.data.length > 0) {
        setFlights(response.data);
        setSingleData(response.data[0]);
        setLoading(false);
        setChatBotInput('');
        setChatBotMessage(prev => [...prev, { text: 'bot', message: `Here Available Flights for ${data.from} to ${data.to} on ${data.date} ${response.data.length} Flights Found` }]);
        }else{
            setLoading(true);
            setLoadingImage(notfoundanimation);
        }
    } catch(error) {
      console.error(error);
      setLoading(true);
      setLoadingImage(notfoundanimation);
    }

  } catch(error) {
    console.error(error);
  }
}   



  return (
    <div className='row'>
        <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
            <SearchCard getData={getApiData} handleChanges ={handleChange} from={UserData.from} to={UserData.to} date={UserData.date}/>

{
loading ? <>
<Lottie animationData={loadingImage} style={{height:"280px"}}/>
</> :<>
   <div className='my-3'>
              { 
                loading ? <h1>Loading...</h1> :<>
                <div className='d-flex align-items-center justify-content-between gap-3'>
                    <div >
                        <p className='mb-1'>From</p>
                        <h4 className='mb-1'>{SingleData.departure.city}</h4>
                        <p className='mb-1'>{SingleData.departure.airport}</p>
                    </div>
                    <Lottie animationData={moveanimation} style={{ height: "130px" }} />
                    {/* <hr className='flex-fill' style={{borderStyle: 'dashed'}}/> */}
                    <div className='text-end'>
                        <p className='mb-1'>To</p>
                        <h4 className='mb-1'>{SingleData.arrival.city}</h4>
                        <p className='mb-1'>{SingleData.arrival.airport}</p>
                    </div>
                </div>
                </>
           
}
             </div>

{
              loading ? <h1>Loading...</h1> :<>
              <DetailSlider>
                { flights.map((flight) => {
                    return (
                      <DetailCard flight={flight} />
                    )}
                )}
                </DetailSlider>
                </>
}
  
</>
}

        </div>
        <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
          <FilterSection handleChanges ={handleChange} min_price={UserData.min_price} airline={UserData.airline} cabin_class={UserData.cabin_class} resetFilters={resetFilter}/>
        </div>
        <ChatBot handleChangesChatbot ={handleChangeChatbot} chatbotInput={chatbotInput} handleSend={getApiDataChatbot} chatbotMessage ={chatbotMessage}/>
    </div>
  )
}

export default Main