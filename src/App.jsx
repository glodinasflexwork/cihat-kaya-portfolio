import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Globe, Building, Users, TrendingUp, BarChart3, Shield, Lightbulb, Download, Star, Quote, ChevronRight, Award, Target, Users2, FileText } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  const testimonials = [
    {
      name: "Maria van der Berg",
      company: "TechStart Amsterdam",
      text: "Cihat's expertise in Dutch tax compliance saved our startup over €25,000 in the first year. His strategic approach to financial planning has been invaluable for our growth.",
      rating: 5
    },
    {
      name: "Jan Pietersen",
      company: "Retail Solutions B.V.",
      text: "The AI-driven bookkeeping solutions from Glodinas Finance transformed our operations. We reduced administrative time by 40% while improving accuracy.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "International Consulting",
      text: "Cihat's multilingual capabilities and deep understanding of Dutch business regulations made our market entry seamless. Highly recommended.",
      rating: 5
    }
  ]

  const caseStudies = [
    {
      title: "E-commerce Tax Optimization",
      client: "Growing Online Retailer",
      challenge: "Complex VAT compliance across EU markets with manual processes causing errors and delays",
      solution: "Implemented automated tax calculation system and restructured business operations for optimal compliance",
      results: [
        "€18,000 annual tax savings",
        "95% reduction in compliance errors", 
        "60% faster monthly reporting"
      ],
      image: "/dashboard1.webp"
    },
    {
      title: "Startup Financial Restructuring",
      client: "Tech Startup Amsterdam",
      challenge: "Inefficient financial processes and lack of strategic financial planning hindering growth",
      solution: "Complete financial process overhaul with AI-driven bookkeeping and strategic planning implementation",
      results: [
        "40% reduction in operational costs",
        "Secured €500K in additional funding",
        "Improved cash flow by 65%"
      ],
      image: "/dashboard2.webp"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Cihat Kaya</h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Expertise", "Case Studies", "Experience", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Cihat Kaya
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
                  Founder & Financial Strategist
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Transforming Financial Complexity into Strategic Growth
                </p>
                <div className="flex flex-col md:flex-row gap-4 text-lg mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>cihartkaya@glodinas.nl</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/cihatkaya</span>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  onClick={() => window.open("/cv-cihat-kaya.pdf", "_blank")}
                >
                  <Download className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                  Download CV
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl">
                  <img 
                    src="/cihat-headshot.webp" 
                    alt="Cihat Kaya Professional Headshot" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            About Me: Your Strategic Partner for Financial Clarity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">My Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600">
                  Helping Dutch businesses transform financial complexity into clarity, compliance, and strategic growth through innovative AI-driven solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Unique Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Combining deep financial knowledge and investment expertise</li>
                  <li>• Leveraging technology-driven efficiency and data analytics</li>
                  <li>• Providing personalized service focused on your business goals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Professional Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Transparency in all financial dealings</li>
                  <li>• Innovation through technology integration</li>
                  <li>• Long-term partnership mindset</li>
                  <li>• Continuous learning and adaptation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">My Professional Journey</h3>
            <p className="text-lg text-slate-600 mb-6">
              With over a decade of experience in financial services and strategic business development, I founded Glodinas Holding to create a comprehensive ecosystem of business services. My journey began in investment management, where I developed a deep understanding of market dynamics and risk management.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Recognizing the challenges faced by Dutch businesses in navigating complex financial regulations, I established Glodinas Finance B.V. to provide AI-enhanced bookkeeping and tax compliance services. This innovation has helped over 50 businesses reduce operational costs while maintaining full regulatory compliance.
            </p>
            <p className="text-lg text-slate-600">
              Today, I continue to expand the Glodinas ecosystem, always focusing on how technology can solve real business problems and drive sustainable growth for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Core Expertise: Driving Financial Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Dutch Tax Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Navigating complex regulations, ensuring full compliance, and maximizing legitimate deductions for businesses in the Netherlands.
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  50+ businesses guided • €500K+ in tax savings
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Business Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Identifying process inefficiencies, optimizing operations, and leveraging data for informed, strategic decision-making.
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  40% average cost reduction • 95% accuracy improvement
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Investment Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Strategic financial planning, wealth management, and ROI optimization to support sustainable growth.
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  45% market outperformance • 28% ROI on ventures
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Languages & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Nederlands (Native)", "English (Professional)", "Roemeens (Native)", "Portuguese (Elementary)", "Spanish (Elementary)", "Turkish (Elementary)"].map((lang) => (
                <Badge key={lang} variant="secondary" className="px-4 py-2 text-sm hover:scale-105 transition-transform duration-200">
                  {lang}
                </Badge>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2 transition-transform duration-300 hover:scale-110" />
                <div className="font-semibold text-blue-800">Certified Financial Analyst</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2 transition-transform duration-300 hover:scale-110" />
                <div className="font-semibold text-blue-800">Dutch Tax Specialist</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2 transition-transform duration-300 hover:scale-110" />
                <div className="font-semibold text-blue-800">AI Integration Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Success Stories: Real Results for Real Businesses
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl text-blue-800 mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600">{study.client}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Solution:</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Results:</h4>
                        <div className="space-y-2">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-center text-slate-600">
                              <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="rounded-lg shadow-lg max-h-64 w-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            My Experience: A Decade of Driving Financial Success
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Building className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Glodinas Holding B.V.</CardTitle>
                <CardDescription className="text-slate-600">Founder & CEO (2020 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    Spearheaded the establishment and growth of Glodinas Holding, a diversified business group focusing on financial services, technology, and consulting.
                  </li>
                  <li>
                    Developed and executed strategic business plans, leading to a 150% increase in client acquisition within the first two years.
                  </li>
                  <li>
                    Cultivated a culture of innovation, integrating AI-driven solutions into core business processes to enhance efficiency and client value.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-blue-800">Investment Management Firm</CardTitle>
                <CardDescription className="text-slate-600">Senior Financial Analyst (2015 - 2020)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    Conducted in-depth financial analysis and market research to identify lucrative investment opportunities, contributing to a 25% portfolio growth.
                  </li>
                  <li>
                    Managed a diverse portfolio of clients, providing tailored financial advice and developing personalized investment strategies.
                  </li>
                  <li>
                    Led a team of junior analysts, mentoring them in financial modeling, risk assessment, and market trend analysis.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            What My Clients Say: Trust and Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-slate-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800">
            Let's Connect: Your Financial Future Starts Here
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to transform your financial landscape? Reach out to discuss how my expertise can benefit your business.
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="default" 
              size="lg" 
              className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => window.location.href = 'mailto:cihartkaya@glodinas.nl'}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open('https://linkedin.com/in/cihatkaya', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cihat Kaya. All rights reserved.</p>
          <p className="mt-2">Designed and Developed with <span className="text-red-500">&hearts;</span> by Cihat Kaya</p>
        </div>
      </footer>
    </div>
  )
}
export default App