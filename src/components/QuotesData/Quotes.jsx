import QuotesList from "./QuotesList";


const Quotes = ()=> {

    const quoteData = [
        {
            id:'1',
            quote : `'It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.'`,
            arthor : 'Adam Scott'
        },
        {
            id:'2',
            quote : `Eat breakfast like a king, lunch like a prince, and dinner like a pauper.`,
            arthor : 'Adelle Davis'
        },
        {
            id:'3',
            quote : `We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.`,
            arthor : 'Adelle Davis'
        },
        {
            id:'4',
            quote : `Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.`,
            arthor : 'Albert Einstein'
        },
        
    ];


    return(
        <div>
          <QuotesList qData={quoteData} />
        </div>
    )
}

export default Quotes;