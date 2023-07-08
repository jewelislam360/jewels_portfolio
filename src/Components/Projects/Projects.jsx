import { useEffect, useState, } from "react";


const Projects = () => {
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])

    return (
        <div id="project">
        <div className="my-32">
                <h1 className="text-center font-bold text-white text-4xl ">MY PROJECTS</h1>
                <h2 className="text-center font-semibold text-sky-400 text-xl mt-8 ">Some Of My Distinguished Works</h2>
            </div>
        <div className="md:flex justify-around gap-16">
            {
                projects.map((project) => <p
                    key={project.id}>
                    <div className="card w-full bg-purple-950 shadow-2xl h-full text-white hover:bg-purple-700">
                        <figure className="">
                            <img  src={project.image} alt="project img" className="rounded" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{project.name}</h2>
                            <ul className="list-disc text-left">
                                <li>{project.description1}</li>
                                <li>{project.description2}</li>
                                <li>{project.description3}</li>
                            </ul>
                            <div className="card-actions ">
                                <button className="btn btn-info text-white"><a href={project.liveLink}>Live</a> </button>
                                <button className="btn btn-info text-white"><a href={project.clientSiteLink}>Clint git</a></button>
                                <button className="btn btn-info text-white hover:bg-sky-700"> <a href={project.serverSiteLink}>Server Git</a></button>
                            </div>
                        </div>
                    </div>

                </p>)
            }



        </div>
   
        </div>

);  
};

export default Projects;