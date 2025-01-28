'use client';

const error = ({error, reset}) => {
        return (
        <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[64px]">😕</p> 
            <p className="mt-[44px] mb-6 font-bold">No Definitions Found</p>
            <p className="text-dark-gray">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            <button onClick={reset} className="bg-violet rounded-md p-3 mt-4 text-white shadow-lg">Search Again</button>
        </div>
    )
}

export default error;