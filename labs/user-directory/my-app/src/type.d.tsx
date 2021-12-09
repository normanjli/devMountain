export interface Iuser {
  id:number,
  name:{first:string,last:string},
  city: string,
  country: string,
  employer: string|null,
  title: string|null,
  favoriteMovies:string[],
}
export type UserContext = {
  usersData:Iuser[],
  newUser:(user:Iuser)=>void,
  editUser:(user:Iuser)=>void,
  deleteUser:({id}:Iuser)=>void
}
export type ViewCon ={
  view: number,
  changeView:(type:'next'|'prev'|'home')=>void
  usersData:Iuser[],
}
