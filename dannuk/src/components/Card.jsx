// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useNavigate } from "react-router"


function Card({ imgLink, title, description, icon, buttonLabel, link }) {
    const [click, setClick] = useState(false)
    const navigate = useNavigate()

    return (
        <motion.div
            //className={click ? `flex border p-4 flex-1` : `flex border p-4`}
            className={click ? `relative h-15 w-full border rounded-2xl p-5 items-center text-center` : `relative h-15 w-full border rounded-2xl p-5 items-center text-center hover:cursor-pointer`}
            initial={{ scale: 0.9 }}
            animate={{ height: 'auto' }}
            whileTap={{ scale: 0.80 }}
            onClick={() => setClick(!click)}
        >
            {click && <motion.img
                className="flex w-34 mx-auto"
                src={imgLink}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
            />}
            <h1 className='text-4xl mt-2'>{icon}{title}</h1>
            {click && <p
                initial={{ opacity: 0 }}
                whileclick={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {description}
            </p>}
            {click && <button
                initial={{ opacity: 0 }}
                whileclick={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-2.5 border-1 p-2 rounded-xl z-10 hover:cursor-pointer"
                onClick={() => navigate(link)}
            >
                {buttonLabel}
            </button>}
        </motion.div >
    )
}

export default Card