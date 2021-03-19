import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hook/useLocalStorage';
import Link from 'next/Link';
import { useRouter } from 'next/router'


export default function Localstorage() {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('')
  const [item, setitem] = useState([])



  const router = useRouter()
  const { pid } = router.query


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item)
    const updateData = item.map((val)=>{
      if(val.id===pid){
        val.id = pid
        val.name = name
        val.height = height
        val.weight = weight
        val.type = type
      }return val ;
    })
    console.log(updateData)
    localStorage.setItem('data',JSON.stringify(updateData))
    

  };


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if(data)
      localStorage.setItem('data',JSON.stringify(data))
      setitem(data)

  }, [])

  return (

    <form className=" text-4xl mb-8 text-center" onSubmit={handleSubmit}>

      <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>

      { item.map((loc) => {
        return (loc.id === pid ? <div>
          <label>ID :
               <input className="form-control mt-10 " type="text" name="id"    value={pid}  onChange={(e) => setId(e.target.value)} />
          </label>
          <br></br>
          <label>Name :
               <input className="form-control mt-10 " type="text" name="name"  placeholder={loc.name}  value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br></br>
          <label>Height :
               <input className="form-control mt-10 " type="number" name="height" placeholder={loc.height} value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <br></br>
          <label>Weight :
                <input className="form-control mt-10 " type="number" name="weight"  placeholder={loc.weight} value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <br></br>
          <label>Type :
               <input className="form-control mt-10 " type="text" name="type"  placeholder={loc.type} value={type} onChange={(e) => setType(e.target.value)} />
          </label>
          <br></br>
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"  >SUBMIT</button>
        </div>
          : null
        )
      })}


      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
    </form>


  )
}