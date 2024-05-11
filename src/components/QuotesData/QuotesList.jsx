import PropTypes from 'prop-types';

const QuotesList = ({qData})=> {
    return(
        <div>
            {qData.map(qdt=> (
                <div key={qdt.id}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'25px', padding:'35px', border:'2px solid grey', borderRadius:'10px'}}>
                        <h3>{qdt.quote}</h3>
                        <h6 style={{marginTop:'2%', color:'grey'}}>{qdt.arthor}</h6>
                    </div>
                </div>
            ))
            }
        </div>

    )
}

QuotesList.propTypes = {
    qData: PropTypes.array

}

export default QuotesList;