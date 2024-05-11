import { useState } from "react"
import data from '../../data/data.js'

const Resturants = ()=> {

    const[searchQuery, setSearchQuerry] = useState("")


    return(
        <div style={{paddingLeft:'80px'}}>
            <input placeholder="Search Resturants..." value={searchQuery} onChange={(e) => setSearchQuerry(e.target.value)} style={{height:'5vh', marginTop:'5%', borderRadius:'10px'}} />

            <section>
                <ul style={{marginTop:'3%', display:'flex', flexWrap:'wrap', gap:'15px'}}>
                    {data.filter((items)=> items.name.toLocaleLowerCase().
                    includes(searchQuery))
                    .map(items => (
                        <div key={items._id.$oid} style={{width:'30vw', borderRadius:'10px', boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`}}>
                            <h3>{items.name}</h3>
                            <p style={{color:'red'}}>Rating: {items.rating}</p>
                            <p>{items.address}, {items["address line 2"]}</p>

                            <div style={{display:'flex', gap:'10px'}}>
                                <p>{items.outcode}</p>
                                <p>{items.postcode}</p>
                            </div>
                            <div style={{backgroundColor:'rgb(243,244,246)'}}>
                                <p style={{color:'green'}}>{items.type_of_food}</p>
                                <a href="#">Visit Menu</a>
                            </div>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Resturants;