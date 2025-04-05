export interface EmitValue {
  operationType: number,
  object: any
}

export interface UserObj {
  id: string,
  name: string,
  email: string,
  role: number,
  password: string
}

export interface Intro {
  header: string,
  desc: string
}

export interface Info {
  msg: string,
  type: number
}

export type UserList = UserObj[];
