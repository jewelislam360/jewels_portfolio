
import { TypeAnimation } from 'react-type-animation';
import { Player } from '@lottiefiles/react-lottie-player';
import cv from '../../assets/img/Resume of Jewel Islam.pdf';
const Banner = () => {
    return (
        <>
            <div className='md:flex justify-between gap-5 my-8 items-center'>
                <div className='md:w-[50%]  text-white '>
                    <h1 className='text-xl'>Welcome to my portfolio! </h1>
                    <h1 className='text-4xl'>Hello,<br/> I am Jewel Islam</h1>

                    <div className=' text-4xl text-sky-400'>
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
                        style={{  display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    </div>
                    <h1 className='my-5'> I am Jewel Islam, a front-end developer from Dhaka, Bangladesh. With a diploma in Computer Technology and a degree in Computer Science and Engineering, I am skilled in HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React.js, MongoDb, Express.js, Node.js, and git. I have completed projects such as an e-commerce website redesign, Photography School website, Toy cars, Chief Recipes and my personal portfolio website. I am passionate about creating visually appealing and user-friendly web experiences. Lets connect and collaborate to make the web more engaging and accessible.</h1>
                    <button className="btn btn-info text-white mr-5"><a href={cv}>My Resume</a></button>
                    <button className="btn btn-info text-white"><a href="#contact">Hired Me</a></button>
                    

                </div>
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_iorpbol0.json"
                        style={{ height: '500px', width: '500px' }}
                    >
                    </Player>

                </div>
            </div>

        </>
    );
};

export default Banner;