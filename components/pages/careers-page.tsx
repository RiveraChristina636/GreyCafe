export function CareersPage() {
  const openPositions = [
    {
      title: "Barista",
      location: "Downtown Location",
      type: "Full-time",
      description: "Join our team as a skilled barista, crafting exceptional coffee experiences for our customers.",
      requirements: [
        "Previous coffee shop experience preferred",
        "Excellent customer service skills",
        "Ability to work in fast-paced environment",
      ],
    },
    {
      title: "Shift Supervisor",
      location: "University District",
      type: "Full-time",
      description: "Lead a team of baristas while ensuring smooth operations and exceptional customer service.",
      requirements: ["2+ years supervisory experience", "Strong leadership skills", "Flexible schedule availability"],
    },
    {
      title: "Baker",
      location: "All Locations",
      type: "Part-time",
      description: "Create delicious pastries and baked goods that complement our coffee offerings.",
      requirements: ["Baking experience required", "Early morning availability", "Attention to detail"],
    },
  ]

  const benefits = [
    "Competitive wages",
    "Health insurance",
    "Paid time off",
    "Free coffee and meals",
    "Career development opportunities",
    "Flexible scheduling",
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Join Our Team</h1>
        <p className="text-muted-foreground text-lg text-pretty">Build your career with Grey Cafe</p>
      </div>

      {/* Why Work With Us */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Why Work With Us?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          At Grey Cafe, we believe our team members are the heart of our success. We're committed to creating a positive
          work environment where everyone can grow, learn, and thrive.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Open Positions</h2>
        <div className="grid gap-6">
          {openPositions.map((position, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{position.location}</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">{position.type}</span>
                  </div>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{position.description}</p>

              <div>
                <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Application Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Apply Online</h3>
            <p className="text-muted-foreground text-sm">Submit your application through our online portal</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Interview</h3>
            <p className="text-muted-foreground text-sm">Meet with our team to discuss your experience and goals</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Join the Team</h3>
            <p className="text-muted-foreground text-sm">Start your journey with comprehensive training and support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
