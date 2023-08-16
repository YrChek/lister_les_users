export interface UsersData {
  id: number,
  name: string
}

type Details = {
  city: string,
  company: string,
  position: string
}

export type Info = {
  id?: number,
  name?: string,
  avatar?: string,
  details?: Details
}

