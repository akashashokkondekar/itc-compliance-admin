export interface EmitValue {
  operationType: number,
  object: any
}

export interface DefaultUserObj {
  id: string,
  name: string,
  email: string,
  role: number,
  password: string
}

export interface UserList {
  user: DefaultUserObj
}