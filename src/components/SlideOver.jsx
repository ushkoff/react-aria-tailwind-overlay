import React from 'react';
import {FocusScope} from '@react-aria/focus'
import {OverlayContainer, useModal, useOverlay} from "@react-aria/overlays";
import {useDialog} from "@react-aria/dialog";
import { motion, AnimatePresence } from "framer-motion"

const SlideOverContent = (props) => {
    const { onClose, children, title } = props

    const ref = React.useRef();
    const {overlayProps} = useOverlay(props, ref);
    const {modalProps} = useModal(props, ref);
    const {dialogProps, titleProps} = useDialog(props, ref);

    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            >
            </motion.div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ ease: 'easeInOut', duration: 0.5 }}
                        className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
                    >

                        <div className="pointer-events-auto relative w-screen max-w-md">

                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                <button onClick={onClose} type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <FocusScope contain restoreFocus autoFocus>
                            <div
                                ref={ref}
                                {...overlayProps}
                                {...dialogProps}
                                {...modalProps}
                                className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                            >
                                <div className="px-4 sm:px-6">
                                    <h2
                                        className="text-lg font-medium text-gray-900" id="slide-over-title"
                                        {...titleProps}
                                    >{title}</h2>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    {children}
                                </div>
                            </div>
                            </FocusScope>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const SlideOver = ({ isOpen, onClose, title, children }) => {
    return (
        <OverlayContainer>
            <AnimatePresence>
            {isOpen && (
                <SlideOverContent
                    title={title}
                    onClose={onClose}
                    isOpen={isOpen}
                    isDismissable
                >
                    {children}
                </SlideOverContent>
            )}
            </AnimatePresence>
        </OverlayContainer>
    );
}

export default SlideOver;