import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import headshot from '../assets/headshot.jpg';

export default function AboutPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {question: "Who am I?",answer: "I'm David Nguyen, a passionate software engineer and Computer Science student at the University of Central Florida. I discovered my love for coding through web development in 2022 and have been diving deep into the world of software engineering ever since."},
        {question: "How did I get into programming?",answer: "I picked up Web Development back in 2022 as a way to learn more about coding. From there I fully delved into the rabbit hole of the world of software engineering. I discovered my passion for learning and creation, which led me to pursue a career in this field."},
        {question: "What am I currently doing?",answer: "I am currently a student at the University of Central Florida, where I am studying Computer Science. I'm constantly working on personal projects, learning new technologies, and building my skills in full-stack development."},
        {question: "What do I do outside of coding?",answer: "Outside of school and work, you can find me working on personal projects, enjoying games, at the gym, or spending time with my friends and family. I believe in maintaining a healthy work-life balance while pursuing my passion for technology."},
        {question: "What technologies do I work with?",answer: "I work with a variety of modern technologies including React, Node.js, MongoDB, Express.js, Next.js, Tailwind CSS, Python, and Git. I'm always eager to learn new technologies and stay up-to-date with industry trends."},
        {question: "What drives me?",answer: "I am always looking for new opportunities to learn and grow. I'm passionate about creating innovative solutions and building applications that make a positive impact. If you have any questions or would like to connect, feel free to reach out!"},
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="h-[50vh]">
            <div className="flex flex-col justify-center items-center">
                <p className="mt-[10vh] text-[40px] text-[var(--text-primary)]">About</p>
                <div className="flex flex-row items-start justify-center mt-[5vh] gap-[8vw]">
                    
                    {/* FAQ Section - Left Side */}
                    <motion.div 
                        className="w-[28vw]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-3">
                            {faqData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className={`bg-[var(--secondary)] border border-[var(--border)] rounded-lg overflow-hidden transition-all duration-300 ${
                                            openIndex === index ? 'shadow-xl border-[var(--accent)]' : 'shadow-lg hover:shadow-xl'
                                        }`}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        {/* Question Header */}
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-[var(--tertiary)] transition-colors duration-200"
                                        >
                                            <h3 className="text-md font-semibold text-[var(--text-primary)]">
                                                {item.question}
                                            </h3>
                                            <motion.div
                                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[var(--accent)] text-lg font-bold"
                                            >
                                                ▼
                                            </motion.div>
                                        </button>

                                        {/* Answer Content */}
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-4 pb-3 border-t border-[var(--border)]">
                                                        <motion.p
                                                            initial={{ y: -10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.1, duration: 0.3 }}
                                                            className="text-[var(--text-secondary)] leading-relaxed pt-3 text-sm"
                                                        >
                                                            {item.answer}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Headshot Section - Right Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-lg opacity-30"></div>
                            <img 
                                src={headshot} 
                                alt="David Nguyen Headshot" 
                                className="relative w-[24rem] h-[24rem] rounded-full object-cover border-4 border-[var(--accent)] shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}