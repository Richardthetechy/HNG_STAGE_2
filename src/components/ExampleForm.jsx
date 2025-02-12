import { useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"
const ExampleForm = () => {
    const form = useForm()
    const {register, control, handleSubmit, formState} = form
    const {errors} = formState
    const onSubmit = (data) => {
        console.log(data);
        
    }
  return (
    <div className="max-w-[1200px] mx-auto mt-7 bg-custom-bg border-nav-border-color border font-[JejuMyeongjo] rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4 ">
                <label className="block text-sm font-medium text-white">Name</label>
                <input type="text" {...register("username",
                    {required: "User name is required",}
                )} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Email</label>
                <input type="email" {...register("email",
                    {required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"}
                    }
                )} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Message</label>
                <input type="text" {...register("lastName",
                    {required: "Last name is required",}
                )} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}  
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
            </button>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default ExampleForm