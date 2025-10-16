import { Icon } from "@iconify/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/sfafrica.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Image src={logo} alt="" width={48} height={48}/>
              {/* <Icon icon="fa7-solid:zap" className="h-8 w-8 text-primary" /> */}
              <span className="font-bold text-2xl text-secondary">Safeguarding Africa</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-md font-medium justify-center">
              <Link href="#features" className="text-muted hover:text-secondary font-bold transition-colors">Our work</Link>
              <Link href="#about-us" className="text-muted hover:text-secondary font-bold transition-colors">About Us</Link>
              <Link href="#testimonials" className="text-muted hover:text-secondary font-bold transition-colors" >Testimonials</Link>
            </nav>
            <Link href="mailto:safeguardingafrica.org" className="flex items-center space-x-2 flex-1 justify-end text-muted">
              <Button size="sm" className="font-semibold">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t to-transparent blur-3xl rounded-t-full from-primary/50 translate-y-1/2 w-[80%] h-96" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight max-w-4xl text-secondary">
              Protecting Africa's Future, One Child at a Time
            </h1>
            <p className="text-xl text-accent max-w-2xl leading-relaxed">
              Safeguarding Africa equips communities to prevent harm, protect children, and help
              them thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="outline" className="px-8 bg-secondary">
                Watch Demo
                <Icon icon="lucide:play" className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="px-8">
                <Link href={""}> 
                  Partner With Us <Icon icon="lucide:arrow-right" className="w-6 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <p className="text-sm text-accent">Trusted by 100+ businesses worldwide</p>
              <div className="flex items-center space-x-8 opacity-60 flex-wrap justify-center gap-y-4 gap-x-[10px] mt-4">
                <div className="text-lg font-semibold text-muted">Duara Education</div>
                <div className="text-lg font-semibold text-muted">Sutherland High School</div>
                <div className="text-lg font-semibold text-muted">KwaBhekilanga Secondary School</div>
                <div className="text-lg font-semibold text-muted">Safe Study</div>
                <div className="text-lg font-semibold text-muted">Africa Careers Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="border-t py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We envision an africa that does the following for every child
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:px-20 gap-6">
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="lucide:brain" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3">Safeguarding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                  Safeguarding is like putting a safety net around people, especially children, to ensure they're protected from harm and can grow up in a secure environment.
                  Consider it createin a circle of care and precaution to ensure everyone, especially the vulnerable, is safe and supported in their daily lives.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="lucide:brain" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Child Protection</h3>
                <p className="text-muted-foreground">
                  Child protection is like being a guardian for kids, ensureing they are shielded from anything that might hurt them physically, emotionally, or mentally.
                  It's about actively lookin out for children, stepping in if they face difficulties, and ensuring they can enjoy their childhood without fear or ham. It's like being a superhero for kids' well-being.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="container mx-auto px-4 md:py-8 lg:px-6">
            <div className="text-center mt-8 space-y-4 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We envision an africa that does the following for every child
             </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 lg:px-20 gap-6">
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Proactivity</h4>
                <p>Preventingy harm befor it happens.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Dignity</h4>
                <p>Respecting every young person's worth.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Empowerment</h4>
                <p>Empowering communities through knowledge and tools</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Integrity</h4>
                <p>Acting with honesty and accountability</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Collaboration</h4>
                <p>Working together to keep young people safe</p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>
      <section id="about-us" className="py-20 md:py-32">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Our work
            </h2>
            <p className="text-xl opacity-90 leading-relaxed text-accent">
              The easiest way to laverage meaningful result and impact.
            </p>
        </div>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 lg:px-20 gap-6">
            <Card className="shadow-lg bg-secondary md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">System Development</h4>
                <p>Policy, process and precedure creation</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-secondary md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Safegurading Training</h4>
                <p>Empowering you and your teams with the lastest information on youth support</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-secondary md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Assessment</h4>
                <p>Identifying risks and strengthening systems</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-secondary md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Youth Engagement</h4>
                <p>Equiping young people to protect themselves and their peers.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-secondary md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2">Community Awareness</h4>
                <p>Campaigns and conversations to shift and strenghten culture</p>
              </CardContent>
            </Card>
        </div>
      </section>
      <section className="py-20 text-primary-foreground md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Ready to Transform Child Development in Your Community?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed text-accent">
              Join thousands of businesses that have already enhanced their community childhood health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="default" className="px-8">
                <Link href={"mailto:mandisa@sefeguardingafrica.org"}>
                  <span className="text-lg">Conctact Us</span>
                  <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
                </Link>

              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-secondary"
              >
                <span className="text-lg">Schedule Demo</span> 
                <Icon icon="lucide:calendar" className="w-4 h-4 ml-2"/>
              </Button>
            </div>
            <p className="text-sm opacity-75 text-secondary">
              All Demos a Free • With Zero Commitment • At your peace
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t to-transparent blur-3xl rounded-t-full from-primary/50 w-210 translate-y-1/2 h-64" />
      </section>
      <footer className="py-16 border-t">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon icon="lucide:zap" className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl text-sidebar-primary">SafeGuarding Africa</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Choose to give a better childhood. Let's build a better world together.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="secondary">
                  <Icon icon="lucide:twitter" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon icon="lucide:linkedin" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon icon="lucide:github" className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Services</h3>
              <div className="space-y-3 text-sm text-card">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safeguarding
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Child Protection
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Resources</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Parnerships</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sponsors
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 SafeGuarding Africa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
