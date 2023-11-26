import './Loading.css'
import image from "../../Images/download.jfif"
import { BallTriangle } from 'react-loader-spinner'
const Loading=()=>{
  return(
    <div id="loader-container">
      <BallTriangle
      id="loader"
        height={160}
        width={150}
        radius={5}
        color="#308efe"
        wrapperClass={{}}
        wrapperStyle=""
        />
    </div>
  )
}
export default Loading;