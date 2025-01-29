
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[url(/herobg.png)] ">
      <div className={`${styles.paddingX} absolute  
        inset-0 top-[60px] max-w-7xl mx-auto flex 
        flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
              <div  className='w-5 h-5 rounded-full bg-[#915eff]'/>
              <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}text-white`}>Hi, I am 
              <span className='text-[#915eff]'> Vignesh</span>
              </h1>
              <p className={`${styles.heroSubText}text-white`}>
                I develop ML Models and <br className='sm:block hidden' />  Web Applications

              </p>
          </div>
         
      </div>
      <ComputersCanvas />

      
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0,24,0]

              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-amber-50 mb-1'
            
            
            />

          </div>

        </a>
      </div>
    </section>
  )
}

export default Hero