const Footer = ()=> {
    return (
        <footer style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'rgb(243,244,246)'}}>
            <img src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum-300x141.png" alt="logo" />
            <p style={{marginBottom:'3%', color:'grey', width:'400px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            
            <div style={{display:'flex', gap:'45px', marginBottom:'3%'}}>
              <a href="#" style={{color:'black'}}>About</a>
              <a href="#" style={{color:'black'}}>Careers</a>
              <a href="#" style={{color:'black'}}>History</a>
              <a href="#" style={{color:'black'}}>Services</a>
              <a href="#" style={{color:'black'}}>Projects</a>
              <a href="#" style={{color:'black'}}>Blog</a>
            </div>

            <div style={{display:'flex', gap:'20px', marginBottom:'5%'}}>
                <img src="https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2Vib29rJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="fb" style={{width:'50px', height:'50px', borderRadius:'10px'}} />
                <img src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="insta" style={{width:'50px', height:'50px', borderRadius:'10px'}} />
                <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZWJvb2slMjBpY29ufGVufDB8fDB8fHww" alt="twitter" style={{width:'50px', height:'50px', borderRadius:'10px'}} />
                <img src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpdGh1YiUyMGljb258ZW58MHx8MHx8fDA%3D" alt="wp" style={{width:'50px', height:'50px', borderRadius:'10px'}} />
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpdGh1YiUyMGljb258ZW58MHx8MHx8fDA%3D" alt="yt" style={{width:'50px', height:'50px', borderRadius:'10px'}} />
            </div>
        </footer>
    )
}

export default Footer;