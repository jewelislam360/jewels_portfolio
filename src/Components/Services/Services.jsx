import { Player } from "@lottiefiles/react-lottie-player";


const Services = () => {
    return (
        <>
            <div>
                <h1 className="text-center font-bold text-white text-4xl my-8 ">SERVICES</h1>
            </div>
            <div className="md:flex justify-around my-16">
                <div className=" border-2 rounded-xl border-sky-400 hover:bg-purple-600 p-4">
                    
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_WMwjZpLAMp.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>

                    <h1 className="text-center font-semi-bold text-white text-xl ">Website Development</h1>
                </div>
                <div className=" border-2 rounded-xl border-sky-400 hover:bg-purple-600 p-4">
                <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_ti4y5deu.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                    <h1 className="text-center font-semi-bold text-white text-xl ">Responsive Web Design</h1>
                </div>
                <div className=" border-2 rounded-xl border-sky-400 hover:bg-purple-600 p-4">
                <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                    <h1 className="text-center font-semi-bold text-white text-xl ">Database Integration</h1>
                </div>
            </div>


        </>
    );
};

export default Services;