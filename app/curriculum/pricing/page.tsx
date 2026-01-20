export default function PricingStrategies() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Module 3: Pricing Strategies & Competitive Positioning
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Moving from "Cost-Plus" to "Value-Based" Pricing
            </h2>
            <p className="text-gray-700 mb-4">
              Pricing should be "Offensive" (value-driven) rather than "Defensive" (reactionary). 
              This module teaches consultants to help owners implement tiered pricing models 
              that capture the true cost of care while maximizing revenue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              The "Good-Better-Best" Pricing Architecture
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Tier</th>
                    <th className="border border-gray-300 px-4 py-2">Profile</th>
                    <th className="border border-gray-300 px-4 py-2">Suggested Daily Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Boutique Suite</td>
                    <td className="border border-gray-300 px-4 py-2">Private room, shared bath, Level 1 care</td>
                    <td className="border border-gray-300 px-4 py-2">$230 - $260</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Executive Suite</td>
                    <td className="border border-gray-300 px-4 py-2">Private room, private bath, Level 2-3 care</td>
                    <td className="border border-gray-300 px-4 py-2">$280 - $350</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Premium Care</td>
                    <td className="border border-gray-300 px-4 py-2">High Acuity, 1:1 feeding, Hospice, RN on site</td>
                    <td className="border border-gray-300 px-4 py-2">$400+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Daily Rate Strategy
            </h2>
            <p className="text-gray-700 mb-4">
              Current AFH owners recommend a daily rate to ensure payment for every day of care provided, 
              including the 31st day of the month.
            </p>
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Daily Rate Formula:</h3>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm mb-4">
                Daily Rate = (Monthly Rate × 12) ÷ 365
              </div>
              <p className="text-gray-600 text-sm">
                Example: $8,500/month = $279.45/day
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Strategic Pricing Choices
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Penetration Pricing</h3>
                <p className="text-gray-700 text-sm">
                  Lower entry price to fill beds fast. Use with caution—can attract price-sensitive 
                  families who may not value premium services.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Psychological Pricing</h3>
                <p className="text-gray-700 text-sm">
                  Charging $6,950 instead of $7,000 creates a perception of value while maintaining 
                  high margins.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Offensive Pricing</h3>
                <p className="text-gray-700 text-sm">
                  Setting the price 10% higher than competitors signals "Premium Quality" and 
                  "Superior Staffing." Families often associate higher costs with better safety.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-xl font-semibold text-yellow-900 mb-3">
              Consultant's Key Takeaway
            </h2>
            <p className="text-yellow-800">
              The goal is to move owners from "flat-rate" pricing to "level-of-care" pricing. 
              By implementing tiered rates and add-on fees, owners can capture $15,000-$30,000 
              in additional annual revenue per resident.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

