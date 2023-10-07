import './Image.css'
import { useNavigate } from "react-router-dom"
export default function Image({url,id}) {
  const navigate=useNavigate()

  const redirectToPage = () => {
    navigate(`/${id}`)
  }
  return (
    <div className=" h-[400px] w-[400px] object-cover  hover:scale-105 ease-out duration-500 ">
      <img className=" img-box rounded-md " src={url} onClick={redirectToPage} />
    </div>
  );
}
