import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"



const ProjectCard=(index,tags,image,source_code_link,description,name)=>{
  return(
    <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <Tilt
      options={{

        max:45,
        scale:1,
        speed:450,
      }}
      className="bg-black p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover
          rounded-2xl" 
          />
          <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
            <div 
            onClick={()=>(
              window.open(source_code_link,'_blank')
            )}
            className="black-gradient w-10 h-10  rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
              
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
        <h3 className="text-white  font-bold text-[24px]"> {name} </h3>
        <p className="mt-2 text-secondary text-[14px]" > {description} </p>

        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name}>

            </p>
          ))}


        </div>
      </Tilt>
    </motion.div>
  )

}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
    <p className={styles.sectionSubText}>My Works</p>
    <h2 className={styles.sectionHeadText}>Projects </h2>
   </motion.div>

   <div className="w-full flex">
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px] "
    
    
    >
        I have worked on AI/ML, Web Development, and Software Engineering projects, focusing on scalability, performance, and real-world impact. My projects range from intelligent machine learning models to full-stack web applications, incorporating modern technologies like React, Python, and TensorFlow. Each project is designed with a problem-solving approach, ensuring efficiency and usability. I continuously refine and optimize my work through data-driven insights, responsive design, and best coding practices to deliver high-quality solutions.

    </motion.p>

   </div>

   <div className="mt-20 flex flex-wrap gap-7">
    {projects.map((project,index)=>(
      <ProjectCard  key={`project-${index}`} 
      index={index}
      {...project}
      />
    )
  )}

   </div>
    
    </>
  )
}

export default SectionWrapper(Works,"")