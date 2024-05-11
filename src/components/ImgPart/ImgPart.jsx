const ImgPart = ()=> {
    return(

    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")', height:'91.4vh', backgroundSize: 'cover',backgroundPosition: 'center'}}>

        <div style={{display:'flex', flexDirection:'column', paddingLeft:'15%', paddingTop:'10%'}}>
            <h1 style={{display:'inline-block', width:'350px', fontSize:'44px', lineHeight:'105%'}}>Let us find your <span style={{color:'rgb(190,18,60)'}}>Forever Food.</span></h1>
            <p style={{display:'inline-block', width:'450px', paddingRight:'5px', marginTop:'2%', fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div style={{display:'flex', gap:'20px', marginTop:'3%'}}>
            <button style={{height:'40px', width:'120px',backgroundColor:'rgb(190,18,60)',borderRadius:'5px', border:'none',color:'white',cursor:'pointer'}}>Search Now</button>
            <button  style={{height:'40px', width:'140px', borderRadius:'5px', border:'none',color:'rgb(190,18,60)',cursor:'pointer'}}>Know More</button>
            </div>
            
        </div>


    </div>
    )
}

export default ImgPart;