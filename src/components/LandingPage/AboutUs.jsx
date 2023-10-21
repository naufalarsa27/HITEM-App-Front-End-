import illus from '/src/assets/abstract-someone-searching-for-something.gif'

export default function AboutUs() {
    
    return (
    <div className="mx-6 bg-black-600 h-[50vh] lg:mx-8">
        <div className="p-4 md:grid md:grid-cols-2 md:gap-4">
            <div className="md:hidden grid">
                <img className="sm:place-self-center" src={illus} />
            </div>
            <div className="grid">
                <div className="font-serif ">
                    <h5>Kenapa <br />
                        <span className="text-3xl mt-2">HITEM?</span>
                    </h5>
                </div>
                <div className="text-justify leading-loose  grid mt-4 lg:mt-0">
                    HITEM membantu kamu untuk menemukan barang yang hilang dan melaporkan barang temuan dengan mudah dan efisien. 
                                            Kemampuan untuk yang dimiliki HITEM adalah kunci dalam mengurangi kecemasan, 
                                            ketidaknyamanan, dan kerugian finansial
                                            </div>
            </div>
            <div className="hidden md:grid">
                <img className="md:place-self-center" src={illus} />
            </div>
        </div>
        <div className="p-4 md:grid md:grid-cols-2 md:gap-4">
            <div className="grid">
                <img className="sm:place-self-center" src={illus} />
            </div>
            <div className="grid">
                <div className="font-serif ">
                    <h5>Kenapa <br />
                        <span className="text-3xl mt-2">HITEM?</span>
                    </h5>
                </div>
                <div className="text-justify leading-loose  grid mt-4 lg:mt-0">
                    HITEM membantu kamu untuk menemukan barang yang hilang dan melaporkan barang temuan dengan mudah dan efisien. 
                                            Kemampuan untuk yang dimiliki HITEM adalah kunci dalam mengurangi kecemasan, 
                                            ketidaknyamanan, dan kerugian finansial
                                            </div>
            </div>
        </div>
    </div>
    );
}