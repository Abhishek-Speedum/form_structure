import React,{useState} from 'react'

const Input = () => {
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(false)

    const get_data=(val)=>{
        console.log(val.target.value);
        setData(val.target.value)
        setPrint(false)
    }
  return (
    <div>
      {
        print?<h1>{data}</h1> :null
      }
        <input type="text" onChange={get_data} className="spd_infield" />
        {/* <button className='' onClick={()=>setPrint(true)}>Submit</button> */}
    </div>
  )
}

export default Input