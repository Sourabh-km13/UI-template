import React from 'react';
import userIcon from '..//images/useri-icon.svg'

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Users</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our users experience.</h2>
                    </div>

                <div className="px-16 py-8 my-4" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex flex-row gap-16">
                        <div style={clientImage} className=
                         "overflow-hidden p-3 flex gap-4 justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6 hover:cursor-pointer">
                            <img src={userIcon} alt="client" />          
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus illo laboriosam exercitationem placeat molestiae nulla excepturi! Adipisci odit, aspernatur asperiores quas ratione reiciendis laboriosam?
                                </div>                 
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex gap-4 justify-center transition-all ease-in-out opacity-50 hover:opacity-100 hover:cursor-pointer">
                            <img src={userIcon} alt="client" />             
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus illo laboriosam exercitationem placeat molestiae nulla excepturi! Adipisci odit, aspernatur asperiores quas ratione reiciendis laboriosam?</div>               
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex gap-4 justify-center transition-all ease-in-out opacity-50 hover:opacity-100 hover:cursor-pointer">
                            <img src={userIcon} alt="client" />  
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus illo laboriosam exercitationem placeat molestiae nulla excepturi! Adipisci odit, aspernatur asperiores quas ratione reiciendis laboriosam?</div>                          
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;