
const Skills = () => {
    return (
        <>
            <div>
                <h1 className="text-center font-bold text-white text-4xl ">MY SKILLS</h1>
            </div>

            <div className="md:flex justify-center gap-10">
                <div className="w-[50%]">
                    <div>
                        <h2>HTML</h2>
                        <progress className="progress progress-info " value="85" max="100"></progress>
                    </div>
                    <div>
                        <h2>CSS</h2>
                        <progress className="progress progress-info " value="40" max="100"></progress>
                    </div>
                    <div>
                        <h2>Bootstrap</h2>
                        <progress className="progress progress-info" value="40" max="100"></progress>
                    </div>
                    <div>
                        <h2>Tailwind</h2>
                        <progress className="progress progress-info " value="40" max="100"></progress>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div>
                        <h2>HTML</h2>
                        <progress className="progress progress-info w-85" value="40" max="100"></progress>
                    </div>
                    <div>
                        <h2>CSS</h2>
                        <progress className="progress progress-info w-85" value="40" max="100"></progress>
                    </div>
                    <div>
                        <h2>Bootstrap</h2>
                        <progress className="progress progress-info w-85" value="40" max="100"></progress>
                    </div>
                    <div>
                        <h2>Tailwind</h2>
                        <progress className="progress progress-info w-85" value="40" max="100"></progress>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Skills;