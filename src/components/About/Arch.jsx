import { Landmark, History } from "lucide-react"

const Arch = () => {
  return (
    <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 cinzel-decorative mb-4">
            Architectural Marvel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed to align with the Great Pyramids, the museum's architecture is a modern tribute to ancient geometry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Landmark className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2 cinzel-decorative">480,000</div>
            <div className="text-sm text-yellow-500 uppercase tracking-widest">Square Meters</div>
          </div>
          <div className="p-6 border-l border-r border-gray-800">
            <History className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2 cinzel-decorative">100,000+</div>
            <div className="text-sm text-yellow-500 uppercase tracking-widest">Artifacts</div>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-yellow-500 font-bold text-2xl border-2 border-yellow-500 rounded-full">
              20
            </div>
            <div className="text-4xl font-bold text-white mb-2 cinzel-decorative">2025</div>
            <div className="text-sm text-yellow-500 uppercase tracking-widest">Grand Opening</div>
          </div>
        </div>
      </section>
  )
}

export default Arch