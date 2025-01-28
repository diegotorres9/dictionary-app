'use client';

const error = ({error}) => {
        return (
        <div className="flex flex-col items-center justify-center text-center">
            😕 
            <p className="mt-[44px] mb-6">No Definitions Found</p>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    )
}

export default error;