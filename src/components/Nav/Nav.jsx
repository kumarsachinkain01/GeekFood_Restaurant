import PropTypes from 'prop-types'


const Nav = ({ onQuoteClick, onResturantsClick})=> {

    return (
        <nav style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', height:'60px', borderBottom:'1px solid grey'}}>

            <section style={{display:'flex', alignItems:'center', gap:'15px'}}>
            <a href="#"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo" /></a>
            <h3><a href="#" style={{display:'inline-block' ,width:'200px', color:'black', fontWeight:'600'}}>GeekFoods</a></h3>
            </section>


            <div style={{display:'flex', justifyContent:'space-around', gap:'35px'}}>
                <span style={{fontWeight:'600'}}>Home</span>
                <span style={{color:'black',fontWeight:'600' }} onClick={onQuoteClick}>Quote</span>
                <span style={{color:'black',fontWeight:'600'}} onClick={onResturantsClick}>Resturants</span>
                <span style={{color:'black',fontWeight:'600'}} >Foods</span>
                <span style={{color:'black',fontWeight:'600'}} >Contact</span>
            </div>

            <button style={{borderRadius:'5px', height:'40px', width:'120px', backgroundColor:'rgb(29,78,216)', color:'white', border:'none',cursor:'pointer'}}>Get Started</button>
            
        </nav>
    )
}


Nav.propTypes ={
    onQuoteClick : PropTypes.func,
    onResturantsClick : PropTypes.func
}

export default Nav;