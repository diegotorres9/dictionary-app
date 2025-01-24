'use client';


const error = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            😕 
            <p>No Definitions Found</p>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    )
}

export default error;