import usePolling from "./usePolling";
import { Info } from "../types/type";
import Loader from "./Loader";
import './details.css';

export default function Details({ id }: Props) {
  
  const [{ data, isLoading }] = usePolling(
    import.meta.env.VITE_USER_DATA_URL + `${id}.json`,
    {}
  )
  const info = data as Info

  return (
    <div className="details">
      {isLoading ? <Loader /> : 
      <>
        <div className="avatar">
          <span></span>
          <span></span>
          <span></span>
          <img src={info.avatar} alt="" className="img"/>
        </div>
        <div className="names info">{info.name}</div>
        <div className="info">City: {info.details?.city}</div>
        <div className="info">Company: {info.details?.company}</div>
        <div className="info">Position: {info.details?.position}</div> 
      </>}
    </div>
  )
}

type Props = {
  id: number | undefined
}
