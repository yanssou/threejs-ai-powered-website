import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import CustomButton from '../components/CustomButton';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>LET'S<br className='xl:block hidden' /> DO IT.</h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>Créez votre propre t-shirt avec ce tout nouvel outil de personnalisation 3D. <strong>Faites parler votre imagination</strong>{" "} et définissez votre propre style.</p>
                            
                            <CustomButton 
                                type='filled'
                                title='Customiser-moi !'
                                handleClick={() => state.intro = false}
                                customSytles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home