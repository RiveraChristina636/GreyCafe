export function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">About Grey Cafe</h1>
        <p className="text-muted-foreground text-lg text-pretty">Our story of passion, quality, and community</p>
      </div>

      {/* Story Section */}
      <div className="bg-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Founded in 2014, Grey Cafe began as a small neighborhood coffee shop with a simple mission: to serve
          exceptional coffee and create a warm, welcoming space for our community.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, we continue to honor that mission by sourcing the finest beans, crafting each drink with care, and
          providing a cozy atmosphere where friends gather and ideas flourish.
        </p>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
          <p className="text-muted-foreground leading-relaxed">
            We source premium beans from sustainable farms and use traditional brewing methods to ensure every cup meets
            our high standards.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Community Focus</h3>
          <p className="text-muted-foreground leading-relaxed">
            More than just a cafe, we're a gathering place where neighbors become friends and everyone feels at home.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
          <p className="text-muted-foreground leading-relaxed">
            We're committed to environmental responsibility through ethical sourcing, minimal waste practices, and
            eco-friendly packaging.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
          <p className="text-muted-foreground leading-relaxed">
            While respecting tradition, we continuously explore new flavors and techniques to surprise and delight our
            customers.
          </p>
        </div>
      </div>
    </div>
  )
}
