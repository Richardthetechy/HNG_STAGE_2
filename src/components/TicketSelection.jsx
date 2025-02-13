
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Tickets } from '../constants';
import LinearProgressBar from './LinearProgressBar';
const TicketSelection = ({
    selectedTicket,
    setSelectedTicket,
    handleNextStep,
    ticketCount,
    setTicketCount,
    step

}) => {

return (
    <div className="mt-10 m-auto max-w-[375px] 
    sm:max-w-[540px]   md:max-w-[720px]    
    lg:max-w-[780px] bg-content-bg p-6 border border-border-color
    rounded-[16px] text-white">
            <header>
                    <div className='flex items-center justify-between md:flex-row flex-col mb-3'>
                    <h2 className='font-[JejuMyeongjo] text-[24px] md:text-[32px]'>Ticket Selection</h2>
                    <p>Step {step}/3</p>
                    </div>
                    <LinearProgressBar step={step} />
            </header>
            <div className='flex flex-col justify-center items-center gap-2 mt-6 p-6 bg-content-bg border border-[#07373F]  rounded-[16px]'
            style={{
                background:"radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%) , rgba(10, 12, 17, 0.1)"
            }}>
                    
                    <h3 className="font-Road-Rage 
                    text-[48px] 
                    sm:text-[52px] 
                    md:text-[56px] 
                    lg:text-[62px]
                    ">Techember Fest "25</h3>
                    <p className='text-[14px] leading-6 max-w-[240px] font-roboto text-grey-98
                    sm:max-w-[280px] md:max-w-[300px] text-wrap text-center
                    '>
                    Join us for an unforgettable experience at [Event Name]! Secure your spot now.
                    </p>
                    <div className='md:flex md:gap-5'>
                        <div className='flex items-center gap-2'>
                                <LocationOnOutlinedIcon  sx={
                                    {
                                        color: "red",
                                        fontSize: 20
                                    }
                                }/>
                                <p>[Event Location]</p>
                        </div>
                        <span className='hidden md:block'> || </span>
                        <div>
                                <div className="flex items-center gap-2">
                                        <time>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                        <time>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                                </div>
                        </div>
                    </div>
            </div>
            <div className='mt-10 mb-5 h-1 bg-[#07373F]'></div>
            <p className='font-rboto text-[16px] mb-3'>Select Card Type: </p>
            <div className='flex flex-col p-4 mb-6 justify-center gap-2 md:flex-row rounded-[16px] bg-[#052228] border border-[#07373F]'>
                {Tickets.map((ticket) => (
                    <div className={`flex flex-col p-4 m-2 justify-center gap-2 rounded-[16px] cursor-pointer min-w-[200px] ${ticket.price === selectedTicket.price ? 'bg-[#12464E]':'bg-[#052228]'} border-2 border-[#197686]`}
                    onClick={() => setSelectedTicket(ticket)} key={ticket.class}>
                        <p className='font-roboto font-semibold text-[24px]'>{ticket.price}</p>
                        <p className='font-roboto'>{ticket.class}</p>
                        <p className={`font-roboto text-[14px] ${selectedTicket === ticket ? 'text-teal-500' : 'text-[#D9D9D9]'}`}></p>
                        <p className='font-roboto text-[14px] text-[#D9D9D9]'>{ticket.num}</p>
                    </div>
                ))}
            </div>
            <div>
                <p className="font-roboto mb-2">Number of Tickets</p>
                <select 
                    value={ticketCount}
                    onChange={(e) => setTicketCount(Number(e.target.value))}
                    className="bg-[#052228] text-white border border-[#197686] rounded-md p-2 w-full"
                >
                    {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                    ))}
                </select>
                <div className='md:flex md:gap-3 mt-4'>
                    <button onClick={handleNextStep}
                    className="bg-[#197686] text-white w-full py-4 mt-4 rounded-md font-[JejuMyeongjo]">Next</button>
                    <button className="bg-[#052228] border border-[#197686] text-[#197686] w-full py-4 mt-4 rounded-md font-JejuMyeongjo">Cancel</button>
                </div>
            </div>
    </div>
)
}

export default TicketSelection