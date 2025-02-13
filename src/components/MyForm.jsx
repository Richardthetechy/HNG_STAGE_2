import { useForm } from "react-hook-form"
import { useState, useCallback, useEffect } from "react"
import EmailIcon from '@mui/icons-material/Email';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useDropzone } from "react-dropzone";
import CircularProgress from '@mui/material/CircularProgress';
const Form = ({
    data,
    setData,
    handleNextStep,
    handlePrevStep,
    setImageUrl,
    imageUrl
}) => {
    const [image, setImage] = useState("")
        const [isLoading, setIsLoading] = useState(false);
        const handleFileUpload = async (file) => {
            if(!file) return
            setIsLoading(true);
            const preset_key="hng_img"
            const cloud_name="dtsarx6cc"        
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', preset_key)
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: formData
            })
            const upLoadedImage = await res.json()
            setImage(upLoadedImage)
            setImageUrl(upLoadedImage.url)
            setIsLoading(false);
            
        }
        const onDrop = useCallback((acceptedFiles) => {
            if (acceptedFiles.length) {
                handleFileUpload(acceptedFiles[0]);
            }
        }, []);
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
            accept: 'image/*'
        });
    const {register, handleSubmit,watch, formState : {errors}} = useForm({
        defaultValues: data
    }
    )
    const username = watch("username");
    const email = watch("email");
    const TextArea = watch("TextArea");
    useEffect(() => {
        setData({ username, email, TextArea });
      }, [username, email, TextArea, setData]);
    const onSubmit = (data) => {
        if (!imageUrl) {
            // Triggers an error when no image is uploaded
            alert("Please upload an image before submitting.");
            return;
          }
         handleNextStep() 
    }
    const inputClass = errors.username
    ? 'p-3 rounded-[16px] bg-[#052228] border border-red-500'
    : 'p-3 rounded-[16px] bg-[#052228] border border-[#07373F]'
    const emailClass = errors.email
    ? 'p-3  bg-[#052228] border border-red-500'
    : 'p-3 rounded-[16px] bg-[#052228] border border-[#07373F]'
    return (

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4 mt-8 bg-[#052228] rounded-[16px] border border-[#0E464F]">
            <div className="px-6  pb-12 max-w-[500px my-auto] bg-[#052228] border border-[#07373F] rounded-[16px] mt-8">
            <h2 className="text-[16px] items-start font-roboto text-gray-98 p-2">Upload Profile Photo</h2>
            <div className="flex justify-center flex-col items-center px-6 pt-6 pb-12 mt-2">
                <div 
                    {...getRootProps()} 
                    className="p-6 w-[240px] h-[240px] flex flex-col gap-3 justify-center items-center bg-border-color border-4 border-[#24A0B5] rounded-3xl cursor-pointer"
                >
                    <input {...getInputProps()}  />
                        <>
                        {isLoading ? (
                            <CircularProgress />
                        ) : imageUrl ? (
                            <img src={imageUrl} alt="profile" className="w-30 h-30 rounded-md" />
                        ) : 
                        (
                            <>
                                <CloudDownloadIcon fontSize="large" className="text-white" />
                                <p className="text-center">Drag & drop or click to upload</p>
                            </>
                        )}
                        </>
                    
                </div>
            </div>
        </div>
        <div className='mt-10 mb-5 h-1 bg-[#07373F]'></div>
                    <div className='flex flex-col gap-10 font-roboto text-gray-98 text-[16px]'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='name'>Enter your name</label>
                            <input type='text' id='name' name='username' 
                            {...register("username",
                                {
                                required: "User name is required",
                                }
                            )}
                            className={inputClass} />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='email'>Enter your email*</label>
                            <div className={`${emailClass} flex items-center w-full gap-2`}>
                                <label htmlFor="email">
                                    <EmailIcon className="text-white" fontSize="large" />
                                </label>
                                <input type='email' id='email' name='email' placeholder="hello@avioflagos.io"
                                {...register("email",
                                    {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                    }
                                )}
                                className={`p-3 bg-[#052228] w-full`} />
                            </div>
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='phone'>About the Project</label>
                            <textarea id='text' name='TextArea'  placeholder="Textarea"
                            {...register("TextArea")}
                            className='p-6 min-h-[200px] rounded-[16px] bg-[#052228] border border-[#07373F]' />
                        </div>
                    </div>
                    <div className="mt-3 md:flex md:gap-4">
                        <button type="submit"  
                            className="bg-[#197686] text-white w-full py-4 mt-4 rounded-md font-[JejuMyeongjo]">Get My Free Ticket</button>
                        <button onClick={handlePrevStep} className="bg-[#052228] border border-[#197686] text-[#197686] w-full py-4 mt-4 rounded-md font-JejuMyeongjo">Back</button>
                    </div>
        </form>
  )
}

export default Form