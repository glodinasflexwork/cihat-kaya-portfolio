import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Globe, Building, Users, TrendingUp, BarChart3, Shield, Lightbulb } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Cihat Kaya</h1>
            <div className="hidden md:flex space-x-6">
              {['About', 'Expertise', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
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
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Cihat Kaya
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
              Founder & Financial Strategist
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transforming Financial Complexity into Strategic Growth
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>cihartkaya@glodinas.nl</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/cihatkaya</span>
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
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-blue-800">My Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600">
                  Helping Dutch businesses transform financial complexity into clarity, compliance, and strategic growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader>
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
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Dutch Tax Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Navigating complex regulations, ensuring full compliance, and maximizing legitimate deductions for businesses in the Netherlands.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Business Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Identifying process inefficiencies, optimizing operations, and leveraging data for informed, strategic decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Investment Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strategic financial planning, wealth management, and ROI optimization to support sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Nederlands (Native)', 'English (Professional)', 'Roemeens (Native)', 'Portuguese (Elementary)', 'Spanish (Elementary)', 'Turkish (Elementary)'].map((lang) => (
                <Badge key={lang} variant="secondary" className="px-4 py-2 text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Professional Experience
          </h2>
          
          {/* Glodinas Finance */}
          <Card className="mb-8 p-6">
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
              <div className="grid md:grid-cols-3 gap-4">
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
            </CardContent>
          </Card>

          {/* Glodinas Holding */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl text-blue-800">Glodinas Holding</CardTitle>
                </div>
                <CardDescription>Founder & Executive Oversight</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Founded and lead a diversified business holding company strategically managing a portfolio of specialized subsidiaries including Glodinas Finance B.V., Glodinas Makelaardij B.V., and Glodinas Flex Work B.V.
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

            <Card className="p-6">
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
          <Card className="mb-8 p-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl text-blue-800">Glodinas Makelaardij B.V.</CardTitle>
              </div>
              <CardDescription className="text-lg font-medium">Founder & Real Estate Services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Providing comprehensive real estate services in the Netherlands, specializing in residential and commercial property transactions with a focus on strategic investment opportunities and market analysis.
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
          <Card className="mb-8 p-6">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Achieve Your Financial Goals</h2>
          <p className="text-xl mb-8 text-blue-100">
            I am committed to delivering transparent, reliable financial leadership that transforms complexity into clarity, ensures compliance, and drives strategic advancement for your business.
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Connect with me to discuss how my expertise can help your business thrive.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex items-center gap-2"
              onClick={() => window.open('mailto:cihartkaya@glodinas.nl')}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-blue-800"
              onClick={() => window.open('https://www.linkedin.com/in/cihatkaya', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-blue-800"
              onClick={() => window.open('https://www.glodinasfinance.nl', '_blank')}
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

