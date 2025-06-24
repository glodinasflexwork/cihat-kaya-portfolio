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
      element.scrollIntoView({ behavior: 'smooth' })
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
      image: "/dashboard1.png"
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
      image: "/dashboard2.jpg"
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
              {['About', 'Expertise', 'Case Studies', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
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
                  className="flex items-center gap-2"
                  onClick={() => window.open('/cv-cihat-kaya.pdf', '_blank')}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl">
                  <img 
                    src="/cihat-headshot.jpg" 
                    alt="Cihat Kaya Professional Headshot" 
                    className="w-full h-full object-cover"
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">My Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600">
                  Helping Dutch businesses transform financial complexity into clarity, compliance, and strategic growth through innovative AI-driven solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
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

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4" />
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
            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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

            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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

            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
              {['Nederlands (Native)', 'English (Professional)', 'Roemeens (Native)', 'Portuguese (Elementary)', 'Spanish (Elementary)', 'Turkish (Elementary)'].map((lang) => (
                <Badge key={lang} variant="secondary" className="px-4 py-2 text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-blue-50 p-4 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Certified Financial Analyst</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Dutch Tax Specialist</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
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
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <ChevronRight className="w-5 h-5 text-green-600" />
                              <span className="text-slate-600 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src={study.image} 
                      alt={`${study.title} Dashboard`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
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
            Professional Experience
          </h2>
          
          {/* Glodinas Finance */}
          <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl text-blue-800">Glodinas Finance B.V.</CardTitle>
              </div>
              <CardDescription className="text-lg font-medium">Founder & AI Integration Leader</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Revolutionized traditional Dutch bookkeeping by integrating cutting-edge AI and machine learning technologies into core services.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">15%</h4>
                  <p className="text-sm text-slate-600">Reduction in client operational costs</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">50+</h4>
                  <p className="text-sm text-slate-600">Businesses guided through tax regulations</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">40%</h4>
                  <p className="text-sm text-slate-600">Reduction in administrative workload</p>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                  onClick={() => window.open('https://www.glodinasfinance.nl', '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Glodinas Holding */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl text-blue-800">Glodinas Holding</CardTitle>
                </div>
                <CardDescription>Founder & Executive Oversight</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Founded and lead a diversified business holding company strategically managing a portfolio of specialized subsidiaries.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Annual Revenue Growth</span>
                    <span className="font-semibold text-blue-800">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Capital Allocation Efficiency</span>
                    <span className="font-semibold text-blue-800">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">ROI on New Ventures</span>
                    <span className="font-semibold text-blue-800">28%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                    onClick={() => window.open('https://www.glodinasholding.nl', '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl text-blue-800">Glodinas Flex Work B.V.</CardTitle>
                </div>
                <CardDescription>Founder & Workforce Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Revolutionized flexible employment models for Dutch businesses.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Client Retention</span>
                    <span className="font-semibold text-blue-800">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cost Reduction</span>
                    <span className="font-semibold text-blue-800">22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Employee-Role Matching</span>
                    <span className="font-semibold text-blue-800">35%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                    onClick={() => window.open('http://glodinasflexwork.nl', '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Glodinas Makelaardij */}
          <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl text-blue-800">Glodinas Makelaardij B.V.</CardTitle>
              </div>
              <CardDescription className="text-lg font-medium">Founder & Real Estate Services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Providing comprehensive real estate services in the Netherlands, specializing in residential and commercial property transactions with strategic investment focus.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Expert</h4>
                  <p className="text-sm text-slate-600">Market Analysis & Valuation</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Full Service</h4>
                  <p className="text-sm text-slate-600">Residential & Commercial</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Strategic</h4>
                  <p className="text-sm text-slate-600">Investment Advisory</p>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                  onClick={() => window.open('http://glodinasmakelaardij.nl', '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Leadership Experience */}
          <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl text-blue-800">Strategic Leadership Experience</CardTitle>
              </div>
              <CardDescription className="text-lg font-medium">Investment & Financial Leadership</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Heg Capital - CIO</h3>
                  <p className="text-slate-600 mb-3">Investment Leadership in Cryptocurrency</p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• <strong>45%</strong> outperformed market benchmarks</li>
                    <li>• Protected capital during extreme volatility</li>
                    <li>• <strong>65%</strong> improved client retention</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            What Clients Say About Working With Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Achieve Your Financial Goals</h2>
          <p className="text-xl mb-8 text-blue-100">
            I am committed to delivering transparent, reliable financial leadership that transforms complexity into clarity, ensures compliance, and drives strategic advancement for your business.
          </p>
          <p className="text-lg mb-12 text-blue-100">
            Connect with me to discuss how my expertise can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex items-center gap-2 w-full sm:w-auto min-w-[140px] px-6 py-3"
              onClick={() => window.open('mailto:cihartkaya@glodinas.nl')}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex items-center gap-2 w-full sm:w-auto min-w-[140px] px-6 py-3 text-blue-800"
              onClick={() => window.open("https://www.linkedin.com/in/cihatkaya", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex items-center gap-2 w-full sm:w-auto min-w-[140px] px-6 py-3"
              onClick={() => window.open("https://www.glodinasfinance.nl", "_blank")}
            >
              <Globe className="w-5 h-5" />
              Website
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Cihat Kaya. All rights reserved. | Rijswijk, South Holland, Netherlands
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

