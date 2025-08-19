import { doubleDeckStatementData } from "../../data/double-decker-stands"

export default function StatementSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          {doubleDeckStatementData.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          <span className="text-gray-900">WITH </span>
          <span style={{ color: "#A5CD39" }}>
            {doubleDeckStatementData.subtitle}
          </span>
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          {doubleDeckStatementData.description}
        </p>
      </div>
    </section>
  )
}
