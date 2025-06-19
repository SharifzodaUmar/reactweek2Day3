import { use, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function App() {
function deleteUser(id) {
  users=users.filter((e)=>e.id!=id)
  setUsers(users)
}
function AddNewUser() {
  let newUser={
    name:inpName,
    age:inpAge,
    image:inpImage,
    email:inpEmail,
    contact:inpContact,
    country:inpCountry,
    id:users.length+1
  }
  setUsers([...users,newUser])
  setInpAge("")
setInpName('')
setInpImage("")
setInpEmail("")
setInpCountry("")
setInpContact("")
}
function openEditDialog(e) {
  setEditAddUser(!EditaddUser)
  setEditInpName(e.name)
  setEditInpAge(e.age)
  setEditInpContact(e.contact)
  setEditInpCountry(e.country)
  setEditInpEmail(e.email)
  setEditInpImage(e.image)
  setIdx(e.id)
}
function openInfo(e) {
  setInfoUser(!EditaddUser)
  setInfoName(e.name)
  setInfoAge(e.age)
  setInfoContact(e.contact)
  setInfoCountry(e.country)
  setInfoEmail(e.email)
  setInfoImage(e.image)
  
}

function editUser() {
  users=users.map((e)=>{
    if(e.id==idx){
      return {
        ...e,
        name:EditinpName,
        age:EditinpAge,
        image:EditinpImage,
        email:EditinpEmail,
        country:EditinpCountry,
        contact:EditinpContact
      }
    }
    return e
  })
  setUsers(users)
  setEditAddUser(false)
}

  let [users,setUsers]=useState([
    {
      name:'Ada Vada',
      email:'adavada@gmail.com',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOOmT6JyoCTgdDV-Z1Tk7EWJNUPbXCXjkUg&s',
      contact:"+122112121212",
      age:'32',
      country:'Pakistan',
      status:false,
      id:1
    },
    {
      name:'Putin',
      email:'slavaPutin@gmail.com',
      image:'data:image/jpeg;base64,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',
      contact:"+122112121212",
      age:'42',
      country:'Russia',
      status:true,
      id:2
    }
  ])

let [addUser,setAddUser]=useState(false)
let [inpName,setInpName]=useState("")
let [inpAge,setInpAge]=useState("")
let [inpImage,setInpImage]=useState("")
let [inpEmail,setInpEmail]=useState("")
let [inpCountry,setInpCountry]=useState("")
let [inpContact,setInpContact]=useState("")

let [infoUser,setInfoUser]=useState(false)
let [infoName,setInfoName]=useState("")
let [infoAge,setInfoAge]=useState("")
let [infoImage,setInfoImage]=useState("")
let [infoEmail,setInfoEmail]=useState("")
let [infoCountry,setInfoCountry]=useState("")
let [infoContact,setInfoContact]=useState("")

let [EditaddUser,setEditAddUser]=useState(false)
let [EditinpName,setEditInpName]=useState("")
let [EditinpAge,setEditInpAge]=useState("")
let [EditinpImage,setEditInpImage]=useState("")
let [EditinpEmail,setEditInpEmail]=useState("")
let [EditinpCountry,setEditInpCountry]=useState("")
let [EditinpContact,setEditInpContact]=useState("")
let [idx,setIdx]=useState(null)
let [search,setSearch]=useState("")


  return (
    <div className='border w-[1300px] m-auto p-[20px] bg-gray-200 '>
      <section className='flex justify-between'> 
      <div className='flex items-center justify-between w-[220px] border-gray-500 border p-[5px] rounded-xl ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
<input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  className='outline-none' placeholder='search...'  /></div>
<Button variant="contained" onClick={()=>setAddUser(!addUser)}>Add new User</Button>  </section>

{/* add user⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ */}
{addUser &&(
  <article className=' w-[700px] rounded-xl my-[20px] border-gray-800 p-[10px] border-2 flex flex-wrap gap-[20px] items-start '>
  <div className='flex justify-between w-[100%]'><p className='text-green-700 font-[700] text-[24px]'>New User</p> <button onClick={()=>setAddUser(false)}>❌</button></div>
  <input type="text" value={inpName} onChange={(e)=>setInpName(e.target.value)} placeholder='name...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={inpEmail} onChange={(e)=>setInpEmail(e.target.value)} placeholder='email...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={inpImage} onChange={(e)=>setInpImage(e.target.value)} placeholder='Image Url...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={inpContact} onChange={(e)=>setInpContact(e.target.value)} placeholder='Contact...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={inpAge} onChange={(e=>setInpAge(e.target.value))} placeholder='Age...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={inpCountry} onChange={(e)=>setInpCountry(e.target.value)} placeholder='Country...' className='border p-[5px] rounded-xl w-[300px]' />
   <Button onClick={()=>AddNewUser()} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
  </article>
)}
{/* edit user⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ */}
{EditaddUser &&(
  <article className=' w-[700px] rounded-xl my-[20px] border-gray-800 p-[10px] border-2 flex flex-wrap gap-[20px] items-start '>
  <div className='flex justify-between w-[100%]'><p className='text-[gray]'>Edit This User</p> <button onClick={()=>setEditAddUser(false)}>❌</button></div>
  <input type="text" value={EditinpName} onChange={(e)=>setEditInpName(e.target.value)} placeholder='name...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={EditinpEmail} onChange={(e)=>setEditInpEmail(e.target.value)} placeholder='email...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={EditinpImage} onChange={(e)=>setEditInpImage(e.target.value)} placeholder='Image Url...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={EditinpContact} onChange={(e)=>setEditInpContact(e.target.value)} placeholder='Contact...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={EditinpAge} onChange={(e=>setEditInpAge(e.target.value))} placeholder='Age...' className='border p-[5px] rounded-xl w-[300px]' />
  <input type="text" value={EditinpCountry} onChange={(e)=>setEditInpCountry(e.target.value)} placeholder='Country...' className='border p-[5px] rounded-xl w-[300px]' />
    <Button onClick={()=>editUser()} variant="contained" color="success">
      Update 
      </Button>
  </article>
)}


<table className='w-[100%] mt-[100px] border-collapse border bg-white'>
  <thead>
    <tr>
      <th className='border border-gray-800 p-[10px]'>User Name</th>
      <th className='border border-gray-800 p-[10px]'>Contact</th>
      <th className='border border-gray-800 p-[10px]'>Age</th>
      <th className='border border-gray-800 p-[10px]'>Country</th>
      <th className='border border-gray-800 p-[10px]'>Status</th>
      <th className='border border-gray-800 p-[10px]'>Actions</th>
    </tr>
  </thead>


{/* TBODY ⬇️⬇️⬇️⬇️⬇️⬇️⬇️ */}
  <tbody>
{users.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase())).map((e)=>{
  return (
      <tr>
        <td className='flex gap-[10px]'><img src={e.image} alt="" />
        <div>
          <p>{e.name}</p>
          <p>{e.email}</p>
        </div>
        </td>
        <td>{e.contact}</td>
        <td>{e.age}</td>
        <td>{e.country}</td>
        <td>{e.status?"Verified":"Rejected"}</td>
        <td className='flex justify-around  h-[72px]'>
          <button onClick={()=>openInfo(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</button>
<button onClick={()=>openEditDialog(e)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</button>
<button onClick={()=>deleteUser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
</td>
      </tr>
       
  )
})}
  </tbody>
</table>
{infoUser &&(
  <article className=' m-auto w-[250px] rounded-xl my-[20px] border-gray-800 p-[10px] border-2 flex flex-wrap gap-[20px] items-center '>
  <div className='flex justify-between w-[100%]'><p className='text-[green] text-[24px] fon-[600]'>Info of User</p> <button onClick={()=>setInfoUser(false)}>❌</button></div>
  <div className='flex flex-col items-center justify-center gap-[10px] m-auto shadow-2xl shadow-cyan-600 rounded-xl p-[10px]'>   
 <img src={infoImage} alt="" />
  <p className='text-[30px] font-[700]'>{infoName}</p>
  <p className='font-[600]'>{infoAge}</p>
  <p  className='font-[600]'>{infoEmail}</p>
  <p  className='font-[600]'>{infoContact}</p>
  <p  className='font-[600]'>{infoCountry}</p>
    <Button onClick={()=>setInfoUser(false)} variant="contained" color="success">
      Close
      </Button></div>
  </article>
)}

    </div>
  )
}

export default App
