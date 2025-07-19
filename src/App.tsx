import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import VirtualStylingCanvas from './components/VirtualStylingCanvas'
import { 
  Sparkles, 
  Palette, 
  RotateCcw, 
  Heart, 
  Share2, 
  Menu,
  X,
  Star,
  Zap,
  Crown,
  Gem
} from 'lucide-react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">
                Styling Mirror
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentView('styling')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'styling' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Virtual Styling
              </button>
              <button 
                onClick={() => setCurrentView('lookbooks')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'lookbooks' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Lookbooks
              </button>
              <button 
                onClick={() => setCurrentView('gallery')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'gallery' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                My Gallery
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setCurrentView('styling')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Styling
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => { setCurrentView('home'); toggleMobileMenu(); }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Home
                </button>
                <button 
                  onClick={() => { setCurrentView('styling'); toggleMobileMenu(); }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Virtual Styling
                </button>
                <button 
                  onClick={() => { setCurrentView('lookbooks'); toggleMobileMenu(); }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Lookbooks
                </button>
                <button 
                  onClick={() => { setCurrentView('gallery'); toggleMobileMenu(); }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  My Gallery
                </button>
                <Button 
                  onClick={() => { setCurrentView('styling'); toggleMobileMenu(); }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  Start Styling
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {currentView === 'home' && <HomePage setCurrentView={setCurrentView} />}
      {currentView === 'styling' && <VirtualStylingCanvas />}
      {currentView === 'lookbooks' && <LookbooksPage />}
      {currentView === 'gallery' && <GalleryPage />}
    </div>
  )
}

// Homepage Component
function HomePage({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg ethnic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                ✨ Virtual Fashion Experience
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Imagine Your Look
                <span className="block text-primary">Before You Style</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Explore stunning Indian and Indo-Western outfits on customizable avatars. 
                Mix, match, and create your perfect look with our virtual styling platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={() => setCurrentView('styling')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Virtual Styling
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => setCurrentView('lookbooks')}
                  className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-3"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Browse Lookbooks
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Avatar Preview */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-primary/20 flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Crown className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Your Avatar</p>
                    <p className="text-xs text-muted-foreground mt-1">Ready for styling</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Gem className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Heart className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Everything You Need to Style
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From traditional sarees to modern Indo-Western fusion, create your perfect look with our comprehensive styling tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Mix & Match Canvas</h3>
                <p className="text-sm text-muted-foreground">
                  Layer clothing like sarees, lehengas, kurtis, and accessories to create unlimited combinations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">360° Mirror Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Rotate your avatar to see every angle of your outfit and ensure the perfect fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">AI Style Generator</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized outfit recommendations based on occasion, style preferences, and trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Avatar Customization</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from different body types, skin tones, and features to match your unique style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Save & Share</h3>
                <p className="text-sm text-muted-foreground">
                  Create your personal gallery and share your favorite looks with friends and family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Festival Lookbooks</h3>
                <p className="text-sm text-muted-foreground">
                  Discover curated outfit ideas for Diwali, weddings, festivals, and special occasions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of fashion enthusiasts who are already creating their perfect looks with Styling Mirror.
          </p>
          <Button 
            size="lg"
            onClick={() => setCurrentView('styling')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your Style Journey
          </Button>
        </div>
      </section>
    </div>
  )
}

// Placeholder components for other views

function LookbooksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Festival Lookbooks</h2>
        <p className="text-muted-foreground">Curated outfit collections for every occasion.</p>
      </div>
    </div>
  )
}

function GalleryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">My Style Gallery</h2>
        <p className="text-muted-foreground">Your saved looks and favorite outfits.</p>
      </div>
    </div>
  )
}

export default App