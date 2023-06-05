export default function Slide({children}: {children: React.ReactNode}) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-center">
            {/* style={{boxShadow: "0px 0px 45px -10px rgba(0, 163, 255, 0.5)"}} */}
            <div className="relative max-w-xl bg-gradient-to-b from-gray-800 to-gray-950 rounded-lg lg:rounded-[32px] overflow-hidden w-full px-6 sm:px-8 lg:px-12 py-8 sm:py-12" >
                {children}
            </div>
        </section>
    )
}