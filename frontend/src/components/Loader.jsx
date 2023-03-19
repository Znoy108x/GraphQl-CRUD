import React from 'react'

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_liyvhyqm.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop  autoplay></lottie-player>
        </div>
    )
}

export default Loader
