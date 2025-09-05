import { ProcessSection as ProcessSectionType } from "@/data/countries"
import { Lightbulb, Pen, Factory, Truck, Wrench, Target } from "lucide-react"

interface ProcessSectionProps {
  data: ProcessSectionType
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  // Map emoji icons to professional Lucide React icons
  const getIcon = (emojiIcon: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      '💡': Lightbulb,  // Brief/Ideas
      '✏️': Pen,       // 3D Visuals/Design
      '🏭': Factory,    // Production/Manufacturing
      '🚚': Truck,     // Logistics/Transportation
      '🔧': Wrench,    // Installation/Assembly
      '🎯': Target,    // Show Support/Goals
    }
    return iconMap[emojiIcon] || Lightbulb
  }
  
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {data.title}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.steps.map((step, index) => {
            const IconComponent = getIcon(step.icon)
            return (
              <div key={step.id || index} className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-[#A5CD39] rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-slate-800 mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}