import './App.css';
import {usePreventScroll, OverlayProvider} from '@react-aria/overlays';
import SlideOver from "./components/SlideOver";
import Button from "./components/Button";
import {useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => setIsOpen(false);

    usePreventScroll({ isDisabled: !isOpen });

  return (
      <OverlayProvider>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative text-center py-3 max-w-full lg:max-w-xl lg:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 shadow-lg transform -skew-y-3 lg:skew-y-0 lg:-rotate-3 lg:rounded-3xl"></div>
              <div className="relative p-20 bg-white shadow-lg lg:rounded-3xl">
                  <div className="max-w-md mx-auto lg:max-w-2xl">
                      <Button onClick={() => setIsOpen(true)}>Click</Button>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi atque cum deserunt
                          distinctio ducimus earum et exercitationem magni natus nihil odio praesentium, provident rem
                          repellendus sit. Exercitationem, placeat.</p>
                      <SlideOver title="Item Details" isOpen={isOpen} onClose={handleOnClose}>
                          <div className="flex flex-col">
                              <input type="text" className="bg-slate-100 p-3 rounded-md"/>
                              <Button className="mt-4" onClick={() => setIsOpen(false)}>Ok</Button>
                          </div>
                      </SlideOver>
                  </div>
              </div>
          </div>
      </div>
      </OverlayProvider>
  )
}

export default App;
