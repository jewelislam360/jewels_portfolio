import html from "../../../public/icon/html.png";
import css from "../../../public/icon/css-3.png";
import Tailwind from "../../../public/icon/icons8-tailwindcss-48.png";
import Bootstrap from "../../../public/icon/bootstrap.png";
import JavaScript from "../../../public/icon/javascript.png";
import react from "../../../public/icon/physics.png";
import firebase from "../../../public/icon/firebase.png";
import nodeJs from "../../../public/icon/nodejs.png";
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
    return (
        <div id="skills">
            <div className="mt-32">
                <h1 className="text-center font-bold text-white text-4xl ">MY SKILLS</h1>
                <h2 className="text-center font-semibold text-sky-400 mt-8 text-xl ">Lets Work Together</h2>
            </div>
            <div className="flex justify-around my-32">
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img className=" " src={html} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin	"><img  src={css} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={Tailwind} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={Bootstrap} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={JavaScript} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={react} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={firebase} alt="" /></div>
                <div className="w-20 h-20 animate-pulse hover:animate-spin"><img src={nodeJs} alt="" /></div>
                 
            </div>

            <div className="md:flex justify-center text-white gap-10">
                <div className="md:w-[50%]">
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">HTML</h2>
                        
                        <ProgressBar completed={85} maxCompleted={100} />

                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">CSS</h2>
                        <ProgressBar completed={80} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Bootstrap</h2>
                        <ProgressBar completed={75} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Tailwind</h2>
                        <ProgressBar completed={80} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">JavaScript</h2>
                        <ProgressBar completed={70} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">React.Js</h2>
                        <ProgressBar completed={80} maxCompleted={100} />
                    </div>
                </div>
                <div className="md:w-[50%]">
                    
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Express.Js</h2>
                        <ProgressBar completed={75} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Node.Js</h2>
                        <ProgressBar completed={60} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">MongoDb</h2>
                        <ProgressBar completed={75} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Firebase</h2>
                        <ProgressBar completed={80} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Github</h2>
                        <ProgressBar completed={85} maxCompleted={100} />
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl">Figma</h2>
                        <ProgressBar completed={85} maxCompleted={100} />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Skills;