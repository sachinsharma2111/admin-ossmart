import { toast } from "react-toastify";
export default function Checkerror(error) {
  console.log(error)
  if (error.response.data.error.status=== 200) {
      toast.success(error.response.data.error.message)
  }
  if (error.response.data.error.status=== 400 ) {
        toast.error(error.response.data.error.message)
  }
  if (error.response.data.error.status !== 400 && error.response.data.error.status !== 200 ) {
    toast.error("Something went wrong please try again")
}
  return error.response.data;
}
