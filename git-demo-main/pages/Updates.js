import React, { useState, useEffect } from 'react'

export default function Updates(props) {
    const [height, setHeight] = useState('')
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const [item, setitem] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault();
        setitem([...item, {id:id, name:name,height: height, weight: weight, type: type }])
        setId('')
        setName('')
        setHeight('')
        setWeight('')
        setType('')
        console.log(item)
    };

    useEffect(() => {

        const data = localStorage.getItem('data')
        if (data) {
            setitem(JSON.parse(data))
        }
        console.log(item)

    }, [])

    useEffect(() => {

        localStorage.setItem('data', JSON.stringify(item))

    })

    return (
        <form className=" text-4xl mb-8 text-center" onSubmit={handleSubmit}>

            <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>
            <label>ID :
              <input className="form-control mt-10 " type="text" name="height" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <br></br>
            <label>Name :
              <input className="form-control mt-10 " type="text" name="height" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br></br>
            <label>Height :
              <input className="form-control mt-10 " type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br></br>
            <label>Weight :
               <input className="form-control mt-10 " type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br></br>
            <label>Type :
              <input className="form-control mt-10 " type="text" name="price" value={type} onChange={(e) => setType(e.target.value)} />
            </label>
            <br></br>
            <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"  >SUBMIT</button>
            <div>
            <br></br>
            </div>
            <p className="mt-10 text-center">
                <Link href="/">
                    <a className="text-2xl underline">Home</a>
                </Link>
            </p>
        </form>
        

    )
}
