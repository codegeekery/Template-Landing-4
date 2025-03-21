'use client'
import React, {useRef} from 'react';
import { motion, useInView } from 'framer-motion';

function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <motion.div
                        className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 1 }}
                        ref={ref}

                    >
                        <h1 className="h2 mb-4">Explore the solutions</h1>
                        <p className="text-xl text-gray-600">
                            Our platform offers a wide range of tools that can help you simplify your workflow, improve productivity, and boost your business
                        </p>
                    </motion.div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <motion.div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                            transition={{ duration: 1 }}
                            ref={ref}
                        >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                                <p className="text-xl text-gray-600">
                                    Our suite of tools simplifies your workflow with powerful analytics and intuitive design features, boosting productivity and delivering outstanding results..
                                </p>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <motion.div
                                    className='flex items-center text-lg p-5 rounded bg-white mb-3'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    ref={ref}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                                        <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center text-lg p-5 rounded bg-white mb-3'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    ref={ref}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                                        <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                                        </svg>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center text-lg p-5 rounded bg-white mb-3'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    ref={ref}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                                        <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Tabs items */}
                        <motion.div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                            transition={{ duration: 1 }}
                            ref={ref}
                        >
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <div className="relative inline-flex flex-col">
                                    <img className="md:max-w-none mx-auto rounded" src="/features-bg.png" width="500" height="462" alt="Features bg" />
                                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/features-element.png" width="500" height="44" alt="Element" style={{ top: '30%' }} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
