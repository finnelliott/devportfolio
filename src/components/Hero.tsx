export default function Hero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-center">
            <div className="relative max-w-xl aspect-square bg-gradient-to-b from-gray-800 to-black rounded-lg lg:rounded-[32px] overflow-hidden w-full h-full">
                <div className="absolute bottom-8 x-auto w-full text-center">
                    <h1 className="text-4xl font-bold text-white">Finn Elliott</h1>
                    <h2 className="text-2xl font-medium text-gray-400 capitalize mt-2">Full-stack web developer</h2>
                </div>
            </div>
        </section>
    )
}