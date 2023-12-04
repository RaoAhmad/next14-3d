import { Inter } from 'next/font/google'
import {motion} from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <motion.div style={{textAlign: 'center', paddingTop:'30px' }}
    initial={{ scale: 1 }}
    animate={{ rotate: 360, scale: 5 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
      
    }}
  >Button</motion.div>
  </>)
}
