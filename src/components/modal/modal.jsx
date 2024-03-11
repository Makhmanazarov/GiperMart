import React from 'react'
import { Dialog } from '@headlessui/react'

export const Modal = ({children, isOpen, setIsOpen}) => {
    return (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed bg-[#00000069] inset-0 flex w-screen items-center justify-center transition-all duration-300 ">
          <Dialog.Panel className="w-[900px] h-[500px] py-[20px] px-[25px] rounded-[15px] bg-white">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    )
}
