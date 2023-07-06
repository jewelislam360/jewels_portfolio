
import { TypeAnimation } from 'react-type-animation';
import { Player } from '@lottiefiles/react-lottie-player';
const Banner = () => {
    return (
        <>
            <div className='md:flex justify-between'>
                <div>
                    <h1>Hello, I am Jewel Islam</h1>

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am a Web Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I am a Front end Developer',
                            1000,
                            'I am a MERN Stack Developer',
                            1000,
                            'I am a Full Stack Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />



                </div>
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_iorpbol0.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>

                </div>
            </div>

        </>
    );
};

export default Banner;