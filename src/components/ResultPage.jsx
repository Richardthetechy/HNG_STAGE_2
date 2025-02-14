import LinearProgressBar from "./LinearProgressBar"
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BarCode from '../assets/image/bar-code-svgrepo-com.svg'
import { useState, useEffect } from 'react';
import Barcode from 'react-barcode';
const ResultPage = ({step, setStep}) => {
  const [storedData, setStoredData] = useState(() => JSON.parse(localStorage.getItem('data') || '{}'));
  const [storedImageUrl, setStoredImageUrl] = useState(() => localStorage.getItem('imageUrl') || '');
  const [storedTicketCount, setStoredTicketCount] = useState(() => localStorage.getItem('ticketCount') || '');
  const [storedSelectedTicket, setStoredSelectedTicket] = useState(() =>
    JSON.parse(localStorage.getItem('selectedTicket') || '{}')
  );


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data') || '{}');
    setStoredData(data);
    setStoredImageUrl(localStorage.getItem('imageUrl') || '');
    setStoredTicketCount(localStorage.getItem('ticketCount') || '');
    setStoredSelectedTicket(JSON.parse(localStorage.getItem('selectedTicket') || '{}'));
  }, []);
  
  const handleCancel = () => {
    setStep(1);
    localStorage.clear();
    window.location.reload();
  }; 
  return (
    <div className="mt-10 m-auto  
    sm:max-w-[540px]   md:max-w-[720px]    flex flex-col items-center
    lg:max-w-[820px] bg-[#041E23] p-6 border border-border-color
    rounded-[16px] text-gray-98 font-robot">
        <div className="max-w-[400px] flex flex-col items-center">
            <header className="mb-12">
                        <div className='flex items-center justify-between md:flex-row  mb-3'>
                            <h2 className='font-[JejuMyeongjo] text-[24px] md:text-[32px]'>Attendee Details</h2>
                            <p>Step {step}/3</p>
                        </div>
                        <LinearProgressBar step={step} />
                        <div className="flex flex-col gap-3 items-center">
                        <h2 className="font-bold font-roboto text-[24px] mt-6">Your Ticket is Booked!</h2>
                        <p className="text-center font-roboto ">You can download or Check your email for a copy</p>
                        </div>
            </header>
            <div className="relative flex flex-col items-center max-w-[400px] border-2 border-[#24A0B5] p-4 rounded-3xl overflow-hidden">
                    <div className="flex flex-col items-center border-2 border-[#24A0B5] p-4 rounded-3xl overflow-hidden">        
                        

                        <div className="flex flex-col justify-center items-center text-gray-98 font-roboto">
                            <div className='flex flex-col justify-center items-center gap-2  p-3'>
                                <h3 className="font-Road-Rage text-[34px]">Techember Fest "25</h3>
                                <div className='flex items-center gap-2'>
                                    <LocationOnOutlinedIcon sx={{ color: "red", fontSize: 10 }} />
                                    <p className="text-[12px]">Dubai, United Arab Emirates</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <EventIcon sx={{ fontSize: 10 }} /> 
                                        <time>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                        <time>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="flex justify-center overflow-hidden mt-6">
                            <img src={storedImageUrl} alt="avatar" className="w-[140px] h-[140px] border-4 border-[#24A0B5] rounded-[16px] contain-content"/>
                        </div>

                        <div className="flex flex-col mt-6 p-3 bg-[#133D44] border-[1px] max-w-[300px] border-[#12464E] rounded-[16px]">
                            <div className="flex items-center">
                                <div className="border-b-[1px] border-[#12464E] p-3 max-w-[150px]">
                                    <p className="text-[10px]">Enter your name</p>
                                    <p className="text-[12px]  font-bold">{storedData.username}</p>
                                </div>
                                <div className="border-l-[1px] border-b-[1px] border-[#12464E] p-3 max-w-[150px]">
                                    <p className="text-[10px]">Enter your email*</p>
                                    <p className="text-[10px] text-nowrap font-bold">{storedData.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="border-b-[1px] border-[#12464E] p-2 max-w-[150px]">
                                    <p className="text-[10px]">Ticket Type</p>
                                    <p className="text-[12px]  font-bold">{storedSelectedTicket.class}</p>
                                </div>
                                <div className="border-l-[1px] border-b-[1px] border-[#12464E] p-2 max-w-[150px]">
                                    <p className="text-[10px]">Ticket Count</p>
                                    <p className="text-[12px] font-bold">{storedTicketCount}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] py-3">Special request?</p>
                                <p className="text-[12px] max-w-[140px] font-bold">{storedData.TextArea ? storedData.TextArea : "Nil"}</p>
                            </div>
                    </div>
                </div>
                <div className="flex justify-center mt-3 w-full border-t-4 border-dashed border-[#12464E] p-3">
                    <Barcode value="1234455" width={2} height={40} 
                    lineColor="#ffffff" 
                    background="transparent"/>
                </div>
            </div>


        </div>
        <div className="w-full md:flex md:gap-5 mt-4">
            <button className="bg-[#197686] text-white w-full py-4 mt-4 rounded-md font-[JejuMyeongjo]">Download Ticket</button>
            <button className="bg-[#052228] border border-[#197686] text-[#197686] w-full py-4 mt-4 rounded-md font-JejuMyeongjo"
            onClick={handleCancel}>Book Another Ticket</button>
        </div>
       </div>
  )
}

export default ResultPage