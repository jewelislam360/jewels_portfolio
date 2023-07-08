// import jewel_pic from "../../assets/img/jewel.JPG";
const Aboutme = () => {
    return (
        <div id="about">
        <div>
            <h1 className="text-center font-bold text-white text-4xl ">ABOUT ME</h1>
            <h2 className="text-center font-semibold text-sky-400 text-xl mt-8 ">Hi, Im Here To Help Your Next Project</h2>
        </div>
        <div className=" md:flex justify-between text-white items-center">
            
            <div>
                <img className="p-8 rounded-full" src="https://i.ibb.co/PCrh453/jewel.png" alt="" />
            </div>

            <div className="md:w-[50%]">Welcome to my portfolio! I am Jewel Islam, a front-end developer from Dhaka, Bangladesh. With a diploma in Computer Technology and a degree in Computer Science and Engineering, I am skilled in HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React.js, MongoDb, Express.js, Node.js, and git. I have completed projects such as an e-commerce website redesign, Photography School website, Toy cars, Chief Recipes and my personal portfolio website. I am passionate about creating visually appealing and user-friendly web experiences. Lets connect and collaborate to make the web more engaging and accessible.

            <div>
                Email: jewelislam.it001@gmail.com
            </div>
            
            </div>
        </div>
            
        </div>
    );
};

export default Aboutme;