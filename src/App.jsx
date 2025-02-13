import { useState, useEffect } from 'react'
import Header from './components/Header'
import TicketSelection from './components/TicketSelection'
import { Tickets } from './constants'
import AttendeeDetail from './components/AttendeeDetail'
import  ResultPage from './components/ResultPage'

function App() {
  const [step, setStep] = useState(() => {
    const storedStep = localStorage.getItem('step');
    return storedStep ? parseInt(storedStep, 10) : 1;
  });

  const [selectedTicket, setSelectedTicket] = useState(() => {
    const storedTicket = localStorage.getItem('selectedTicket');
    return storedTicket ? JSON.parse(storedTicket) : Tickets[0];
  });

  const [ticketCount, setTicketCount] = useState(() => {
    const storedTicketCount = localStorage.getItem('ticketCount');
    return storedTicketCount ? parseInt(storedTicketCount, 10) : 1;
  });

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('data')
    return storedData ? JSON.parse(storedData) : {}
  })
  const [imageUrl, setImageUrl] = useState(() => {
    const storedImageUrl = localStorage.getItem('imageUrl');
    return storedImageUrl ? storedImageUrl : '';
  });
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem('step', step.toString());
  }, [step]);

  useEffect(() => {
    localStorage.setItem('selectedTicket', JSON.stringify(selectedTicket));
  }, [selectedTicket]);

  useEffect(() => {
    localStorage.setItem('ticketCount', ticketCount.toString());
  }, [ticketCount]);

  useEffect(() => {
    localStorage.setItem('imageUrl', imageUrl);
  }, [imageUrl]);

  const handleNextStep = () => {
    if(step < 4) {
      setStep(step + 1)
    }
  }
  const handlePrevStep = () => {
    if(step > 1) {
      setStep(step - 1)
    }
  }
  return (
    <>
 
      <Header />
      {
        step === 1 && (
          <TicketSelection 
      selectedTicket={selectedTicket}
      setSelectedTicket={setSelectedTicket}
      handleNextStep={handleNextStep}
      ticketCount={ticketCount}
      setTicketCount={setTicketCount}
      step={step}
      />
        )
      }
      {
        step === 2 && (
          <AttendeeDetail 
          step={step} 
          handleNextStep={handleNextStep} 
          handlePrevStep={handlePrevStep}
          setData={setData}
          data={data}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
           />
        )
      }
      {
        step === 3 && (
          <ResultPage step={step} setStep={setStep}/>
        )
      }
    </>
  )
}

export default App
