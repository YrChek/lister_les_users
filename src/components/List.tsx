import { UsersData } from "../types/type";
import './list.css'

export default function List({ list, handler }: Props) {

  return (
    <div className="list">
      {list.map((user) => <div className="userItem" key={user.id} onClick={() => handler(user.id)}>{user.name}</div>)}
    </div>
  )
}

type Props = {
  list: UsersData[],
  handler: (id: number) => void
}
