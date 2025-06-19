
import React, { useState } from 'react';
import { ChevronDown, Heart, Users, BookOpen, Lightbulb, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
// Add EmailJS import
import emailjs from '@emailjs/browser';

const Index = () => {
  
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration
    try {
      await emailjs.send(
        'service_mq65q4g', // replace with your EmailJS service ID
        'template_ugk3179', // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        '01fD0sVKws5ThkOZD' // replace with your EmailJS public key (user ID)
      );

      toast({
  title: "✅ Message Sent Successfully!",
  description: "Thank you for contacting us. We'll get back to you within 24 hours.",
  variant: "default",
  style: {
    backgroundColor: "#4CAF50", // Green for success
    color: "#fff",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    fontSize: "16px",
  },
  duration: 5000, // Auto-dismiss after 5 seconds
  }); 
    setFormData({ name: '', phone: '', email: '', message: '' });
}
    catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "❌ Error Sending Message",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive",
        style: {
          backgroundColor: "#F44336", // Red for error
          color: "#fff",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          fontSize: "16px",
        },
        duration: 5000, // Auto-dismiss after 5 seconds
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    { name: "Bhavana Kondraganti", title: "Founder", bio: "I created Project Harmony because: It's my childhood dream; I want to give those in need a second chance at life, demonstrating that love, purpose and respect belong to everyone on this earth, regardless of social status. Hometown: Dallas, Texas", image: "./lovable-uploads/bhavanaK.jpg" },
    { name: "Samyuktha Vidala", title: "Co-Founder", bio: "I created Project Harmony because: It’s meaningful to me to help those in need, and it deeply connects me to my roots in India. It embodies everything I stand for, ensuring that everyone receives the support they deserve. Hometown: Philadelphia, Pennsylvania",image: "./lovable-uploads/samyuV.jpg" },
    { name: "Vennela Kondraganti", title: "Co-Marketing Chair", bio: "I joined Project Harmony because: I want to create a meaningful impact for those who are under represented and in need even from thousands of miles away.Hometown: Dallas, Texas",image: "./lovable-uploads/venniK.jpg"  },
    { name: "Ria Agarwal", title: "Technology Operations Chair", bio: "I joined Project Harmony because: I want to give back to my community in India and help those in need. I also want to learn more about how technology can be used to help others and I believe Project Harmony is a great way to do both. Hometown: Philadelphia, Pennsylvania",image: "./lovable-uploads/riaA.jpg"  },
    { name: "Shubham Railkar", title: "Finance Chair", bio: "I joined Project Harmony because: I want to make an everlasting impact on many lives. Giving back to my homeland and other communities has been a core belief of mine for many years.",image: "./lovable-uploads/shubhamR.jpg"   },
    { name: "Lakshya Vannala", title: "Co-Marketing Chair", bio: "I joined Project Harmony because: It's an ongoing goal of mine to support and give my best to a cause which contributes to the welfare of people. To me, this organization represents not only a service or resource but a hope to those who need it.Hometown: Dallas, Texas",image: "./lovable-uploads/lakshyaV.jpg"  },
    { name: "Sravya Kakarlapudi", title: "Social Media Manager", bio: "I joined Project Harmony because: I believe simple acts of kindness go a long way and Project Harmony is supporting causes I deeply care about.Hometown: Middletown, Delaware",image: "./lovable-uploads/sravyaK.jpg" },
    { name: "Meghaa Gobi", title: "Research & Development Chair", bio: "I joined Project Harmony because: I want to get more involved both with my community here in the USA and back home in India. Hearing about Project Harmony’s mission and goal encouraged me to join as it allows me to play a role in shaping impactful programs in India from the ground up. Hometown: Philadelphia, Pennsylvania" ,image: "./lovable-uploads/lakshyaV.jpg"},
    { name: "Purva Vakharia", title: "Marketing Strategy Chair", bio: "I joined Project Harmony because: I want to contribute towards my country and its communities in need. By participating in these initiatives, it would make me feel closer to my home, my country. Hometown: Bensalem, Pennsylvania" ,image: "./lovable-uploads/purvaV.jpg"},
    { name: "Hetvi Shah", title: "Public Relations and Outreach Chair", bio: "I joined Project Harmony because: It's mission of assisting underprivileged people in India really resonated to a lifelong goal of mine. The Indian community is one of the most vibrant, close-knit, and inviting community I've witnessed and to be able to give back, more than just financially is amazing! Hometown: Bensalem, Pennsylvania" ,image: "./lovable-uploads/hetviS.jpg"  },
    { name: "Nitya Patel", title: "Co-Fundraising Chair", bio: "I joined Project Harmony because: I wanted to work with like-minded individuals to help the elderly, women, kids, and pets in India. Project Harmony is a community working towards that goal, and I am happy to be part of the team! Hometown: Newark, Delaware" ,image: "./lovable-uploads/nityaP.jpg" },
    { name: "Vidhi Patel", title: "Finance Manager", bio: "I joined Project Harmony because: it will give me an opportunity to help people in India.Hometown: Anand, Gujarat",image: "./lovable-uploads/vidhiP.jpg" },
    { name: "Sonali Singh", title: "N/A", bio: "I joined Project Harmony because: I wanted to make volunteering a more intentional part of my college experience. I've always felt a strong desire to give back—especially to underprivileged communities in India. While I hope to make a greater impact in the future, being part of this organization is a meaningful way to begin that journey now.Hometown: Chester Springs, Pennsylvania",image: "./lovable-uploads/sonaliS.jpg" },
    { name: "Mihika Patel", title: "Event Management Chair", bio: "I joined Project Harmony because: I was excited to contribute to a local student-led initiative making an impact in India. Helping both people and animals in need is meaningful to me, and this project allows me to be part of real, positive change!Hometown: Garnet Valley, Pennsylvania" ,image: "./lovable-uploads/mihikaP.jpg" },
    { name: "Ananya Muppirala", title: "Research Analyst", bio: "I joined Project Harmony because: I wanted to give to my community and make the world a better place one step at a time! Hometown: Downingtown, Pennsylvania",image: "./lovable-uploads/ananyaM.png" },
    { name: "Adip Guduru", title: "Operations Chair", bio: "I joined Project Harmony because: I am excited to contribute to Project Harmony's mission of fostering sustainable growth and improving lives in underserved communities. My academic background in Computer Science Engineering has instilled in me a desire to leverage my skills for meaningful change in areas like education, healthcare, and basic necessities.Hometown: Hyderabad, Telangana",image: "./lovable-uploads/adipG.png" },
  ];

  const blogPosts = [
    {
      title: "Empowering Youth Through Technology",
      excerpt: "How our coding bootcamp is changing lives in the community...",
      date: "March 15, 2024"
    },
    {
      title: "Community Partnership Success Story",
      excerpt: "Local business collaboration creates new opportunities...",
      date: "March 10, 2024"
    },
    {
      title: "Graduate Spotlight: From Student to Teacher",
      excerpt: "Meet Alex, who completed our program and now mentors others...",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img 
                  src="./lovable-uploads/83cce7d4-12ef-4d89-9eea-2642d50e501a.png" 
                  alt="Project Harmony Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bridge-text-gradient">Project Harmony</span>
            </div>
            <div className="hidden md:flex space-x-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'home' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'about' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'services' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'team' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'blog' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium border ${
                  activeSection === 'contact' 
                    ? 'bg-bridge-green text-white border-bridge-green shadow-md' 
                    : 'text-foreground hover:text-bridge-blue hover:bg-bridge-light-blue/20 border-transparent hover:border-bridge-blue/20'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Community Bridge Theme with Banner */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Banner Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80')`
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-bridge-blue/80 via-bridge-blue/60 to-bridge-green/70"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-bridge-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-36 h-36 bg-bridge-light-green/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="text-white drop-shadow-2xl">Project Harmony</span>
              </h1>             
              <p className="text-2xl md:text-3xl text-white/95 mb-4 font-medium drop-shadow-lg">
                Building Bridges to Opportunity
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Connecting communities through education, technology, and empowerment. 
                Together, we create pathways to a brighter, more connected future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('about')}
                  className="text-lg px-10 py-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50 group shadow-xl"
                >
                  Discover Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-10 py-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50 group shadow-xl"
                >
                  Support Our Cause
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 mx-auto text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Bridge Theme */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
                       <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Building Community Bridges</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Project Harmony, our mission is to empower and support communities in India by providing essential resources to those in need. While we may be physically distant, we are committed to facilitating meaningful change by connecting individuals in the United States with opportunities to fund critical projects and initiatives. By channeling financial resources into local efforts, we aim to break down barriers for the elderly, parents, children, and animals, ultimately fostering sustainable growth and improving lives in underserved areas of India. Together, we can create a lasting impact— funding one initiative at a time.

            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-bridge-light-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-bridge-blue" />
                </div>
                <CardTitle className="text-xl text-bridge-blue">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To bridge the digital divide and create pathways to economic opportunity through 
                  comprehensive education and community support programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-bridge-light-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-10 w-10 text-bridge-green" />
                </div>
                <CardTitle className="text-xl text-bridge-green">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where every individual has access to the tools, knowledge, and support 
                  needed to thrive in the digital economy and contribute to their community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-bridge-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-10 w-10 text-bridge-gold" />
                </div>
                <CardTitle className="text-xl" style={{ color: 'hsl(var(--bridge-gold))' }}>Our Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To graduate 1,000 students from our programs, create 500 new job opportunities, 
                  and build lasting partnerships with 50 community organizations by 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-bridge-light-blue/30 to-bridge-light-green/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Connecting Communities</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs designed to bridge gaps and create lasting connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-bridge-light-blue rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-bridge-blue" />
                </div>
                <CardTitle className="text-xl">Community Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Building stronger communities through collaborative projects, neighborhood improvement 
                  programs, and civic engagement that connect people across all backgrounds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-bridge-light-green rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-bridge-green" />
                </div>
                <CardTitle className="text-xl">Skills Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional development workshops and certification programs that bridge the gap 
                  between current skills and future opportunities in the evolving job market.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-bridge-gold/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-bridge-gold" />
                </div>
                <CardTitle className="text-xl">Digital Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Technology education and coding programs that bridge the digital divide, 
                  preparing youth and adults for careers in our connected world.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Bridge Builders</h2>
            <p className="text-xl text-muted-foreground">
              Meet the dedicated professionals working to connect and empower our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 bridge-gradient rounded-full flex items-center justify-center shadow-lg">
                    {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full"
            />
          ) : (
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                     )}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-bridge-blue">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-bridge-light-green/30 to-bridge-light-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bridge Stories</h2>
            <p className="text-xl text-muted-foreground">
              Read about our impact, success stories, and the bridges we're building together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 bg-gradient-to-br from-bridge-light-blue to-bridge-light-green rounded-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-bridge-blue" />
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="border-bridge-blue text-bridge-blue hover:bg-bridge-blue hover:text-white">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Connect With Us</h2>
            <p className="text-xl text-muted-foreground">
              Ready to build bridges together? Reach out to learn more about our programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-bridge-blue">Send us a message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 focus:ring-bridge-blue"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-2 focus:ring-bridge-blue"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 focus:ring-bridge-blue"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-32 focus:ring-bridge-blue"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-bridge-blue hover:bg-bridge-blue/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-bridge-green">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-bridge-light-blue/20">
                  <Mail className="h-6 w-6 text-bridge-blue mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@projectharmony.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-bridge-light-green/20">
                  <Phone className="h-6 w-6 text-bridge-green mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-bridge-gold/20">
                  <MapPin className="h-6 w-6 text-bridge-gold mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">
                      123 Community Bridge Street<br />
                      Harmony District, ST 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bridge-gradient text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl font-bold">Project Harmony</span>
            </div>
            <p className="text-white/90 mb-4">
              Building bridges to opportunity • Connecting communities through purpose
            </p>
            <div className="flex justify-center space-x-2 mb-4">                         
            </div>
            <p className="text-sm text-white/70">
              © 2025 Project Harmony. All rights reserved. Building bridges since 2025.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
