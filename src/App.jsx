import { useState } from 'react'
import Header from './components/Header'
import ExampleForm from './components/ExampleForm'
import TicketSelection from './components/TicketSelection'
import { Tickets } from './constants'

function App() {
  const [step, setStep] = useState(1)
  const [selectedTicket, setSelectedTicket] = useState(Tickets[0])
  const [ticketCount, setTicketCount] = useState(1)
  const handleNextStep = () => {
    setStep(step + 1)
  }
  console.log('selectedTicket', selectedTicket, ticketCount)
  return (
    <>
      <Header />
      <TicketSelection 
      selectedTicket={selectedTicket}
      setSelectedTicket={setSelectedTicket}
      handleNextStep={handleNextStep}
      ticketCount={ticketCount}
      setTicketCount={setTicketCount}
      />
    </>
      
  )
}

export default App
