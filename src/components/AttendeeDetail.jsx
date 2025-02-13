import Form from "./MyForm"
import LinearProgressBar from "./LinearProgressBar"

const AttendeeDetail = ({
    step,
    data,
    setData,
    handleNextStep,
    handlePrevStep,
    imageUrl,
    setImageUrl
}) => {
    
  return (
    <div className="mt-10 m-auto max-w-[375px] 
    sm:max-w-[540px]   md:max-w-[720px]    
    lg:max-w-[820px] bg-[#041E23] p-6 border border-border-color
    rounded-[16px] text-white font-roboto">
        <header>
                    <div className='flex  items-center justify-between md:flex-row  mb-3'>
                        <h2 className='font-[JejuMyeongjo] text-[24px] md:text-[32px]'>Attendee Details</h2>
                        <p>Step {step}/3</p>
                    </div>
                    <LinearProgressBar step={step} />
        </header>
       <Form setData={setData}
        data={data}
         handleNextStep={handleNextStep} 
         handlePrevStep={handlePrevStep}
         imageUrl={imageUrl}
         setImageUrl={setImageUrl}
        />
    </div>
  )
}

export default AttendeeDetail