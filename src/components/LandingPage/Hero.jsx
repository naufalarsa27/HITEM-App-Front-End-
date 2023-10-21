export default function Hero() {

    return(
    <div className="mx-6 sm:mx-10 lg:mx-8">
        <div className="items-center text-center bg-cover overflow-hidden rounded-[40px] sm:rounded-[60px] lg:rounded-[40px] h-screen text-white bg-[url('/src/assets/backgroundherosection.png')]">
            <div className="lg:hidden text-7xl pt-8 sm:mt-2 md:mt-4 sm:text-5xl md:text-9xl lg:text-7xl lg:mt-10 font-semibold"><h1>Lost & <br />Found.</h1></div>
            <div className="hidden lg:block text-7xl pt-8 sm:mt-2 md:mt-4 sm:text-5xl md:text-6xl lg:text-7xl lg:mt-10 font-semibold"><h1>Lost & Found.</h1></div>
            <div className="mt-6 leading-6 lg:leading-10 lg:mt-16 sm:mt-10 md:mt-24 text-xs px-8 sm:text-[14px] md:leading-relaxed md:text-3xl lg:text-2xl sm:px-12 md:px-28 lg:px-40" ><h5>Membantu kamu untuk menemukan barang yang hilang dan
                melaporkan barang temuan dengan mudah dan efisien</h5></div>
            <div className="flex justify-center">
                <div className="text-[8px] sm:text-[12px] md:text-2xl lg:text-lg lg:mt-20 mt-10 sm:mt-12 md:mt-28 shadow-md transition ease-in-out duration-700 hover:scale-110 py-3 px-4 sm:py-4 sm:px-6 bg-[#6930c3] rounded-3xl">
                    <a href="#">Lihat/Tulis Laporan Kehilangan</a>
                </div>
            </div>
        </div>
    </div> 
    );
}