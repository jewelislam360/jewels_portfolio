import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const ContactMe = () => {
    return (
        <div id="contact" className="mb-32">
            <div className="my-32">
                <h1 className="text-center font-bold text-white text-4xl ">CONTACT ME</h1>
                <h2 className="text-center font-semibold text-sky-400 mt-8 text-xl ">Lets Work Together</h2>
            </div>
            <div className="md:flex gap-5 justify-center items-center">
                <div className="text-white md:w-[50%] text-xl ">
                    <p className="my-8">Hi, Im Here To Help Your Next Project</p>
                    <p>Dhaka, Bangladesh</p>
                    <p>jewelislam.it001@gmail.com</p>
                    <p>+8801796372620</p>

                    <div className="flex gap-8 text-white py-8">
                        <p className=""><FaGithub></FaGithub></p>
                        <p><FaLinkedin></FaLinkedin></p>
                        <p><FaInstagram></FaInstagram></p>
                        <p><FaYoutube></FaYoutube></p>
                        <p><FaFacebook></FaFacebook></p>
                    </div>

                </div>
                <div className="md:w-[50%]">
                    <div>
                        <label className="label">
                            <span className="label-text text-white font-bold text-xl">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your Name" className="input input-bordered input-accent w-full " />
                    </div>
                    <div className="my-5">
                        <label className="label">
                            <span className="label-text text-white font-bold text-xl">Email</span>
                        </label>
                        <input type="text" placeholder="Enter your Email" className="input input-bordered input-accent w-full  " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-white font-bold text-xl">Messages</span>
                        </label>
                        <textarea className="textarea textarea-accent w-full " placeholder="Messages"></textarea>
                    </div>
                    <input className="btn btn-info text-white" type="submit" value="submit" />

                </div>
            </div>

        </div>
    );
};

export default ContactMe;