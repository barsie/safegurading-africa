import { Icon } from "@iconify/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Icon icon="fa7-solid:zap" className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-secondary">Safeguarding Africa</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium justify-center">
              <Link href="#features" className="text-foreground/60 hover:text-foreground transition-colors text-muted">Projects</Link>
              <Link href="#pricing" className="text-foreground/60 hover:text-foreground transition-colors text-muted">Pricing</Link>
              <Link href="#testimonials" className="text-foreground/60 hover:text-muted transition-colors text-secondary" >Testimonials</Link>
            </nav>
            <Link href="mailto:safeguardingafrica.org" className="flex items-center space-x-2 flex-1 justify-end text-muted">
              <Button size="sm">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t to-transparent blur-3xl rounded-t-full from-primary/50 translate-y-1/2 w-[80%] h-96" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight max-w-4xl text-secondary">
              Protecting Africa is Future One Child at a Time
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
                Partner With Us <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <p className="text-sm text-accent">Trusted by 100+ businesses worldwide</p>
              <div className="flex items-center space-x-8 opacity-60 flex-wrap justify-center gap-y-4 gap-x-[10px] mt-4">
                <div className="text-lg font-semibold text-muted">US EMBASSY</div>
                <div className="text-lg font-semibold text-muted">GREENLIVES</div>
                <div className="text-lg font-semibold text-muted">MedPack Tanzania</div>
                <div className="text-lg font-semibold text-muted">Lolavo</div>
                <div className="text-lg font-semibold text-muted">Ghreen Research</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="border-t bg-muted/50 py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate and scale your business workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between shadow-secondary border-card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="lucide:brain" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3">Deep Safeguarding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                   Safeguarding Africa empowers communities to keep young people
                  safe. We work with schools, nonprofits, and families to prevent harm, recognize risks, and respond
                  effectively. Our approach is research-based and community-driven
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Training Communities in Phoenix</h3>
                <p className="text-muted-foreground">
                  We trained more that 800 people in phoenix in safeguarding and goblal child proteccion procedures.
                  Achiving big impacts in communitaria events and globald development.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:puzzle" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Maning small area</h3>
                <p className="text-muted-foreground text-sm">
                 1100 people have reported for benefiting form Mannings training and enhaced their child protection capabilites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Simple Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pay little and Negociate bulk trainings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative border-2 bg-gradient-to-br to-secondary/5 shadow-lg from-primary/5">
              <CardContent>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl text-left text-secondary">Starter</h3>
                  <p className="text-muted text-left">Perfect for small teams</p>
                </div>
                <div className="flex items-baseline gap-2 mt-6">
                  <div className="text-4xl font-bold text-left text-accent">$9</div>
                  <div className="text-popover-foreground text-left">per user</div>
                </div>
                <div className="mt-8 mb-6">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-4 text-secondary">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>2 hours monthly training training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span> Monthly Follow up</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Amazing results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Basic analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-primary shadow-xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                <Icon icon="ic:baseline-star" />
                Popular
              </Badge>
              <CardContent>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl text-left text-secondary">Professional</h3>
                  <p className="text-muted text-left">Ideal for growing businesses</p>
                </div>
                <div className="flex items-baseline gap-2 mt-6">
                  <div className="text-4xl font-bold text-left text-accent">$19</div>
                  <div className="text-muted-foreground text-left">per user</div>
                </div>
                <div className="mt-8 mb-6">
                  <Button className="w-full">Get Started</Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-4 text-secondary">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Up to 10 hours monthly training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Weekly Follow up</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Inperson and online trainings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border-2 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
              <CardContent>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl text-left text-secondary">Enterprise</h3>
                  <p className="text-muted-foreground text-left">For large organizations</p>
                </div>
                <div className="flex items-baseline gap-2 mt-6">
                  <div className="text-4xl font-bold text-left text-muted">$299</div>
                  <div className="text-muted-foreground text-left">for 20</div>
                </div>
                <div className="mt-8 mb-6">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-4 text-secondary">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Global program</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Up to 50 hours monthly training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>In person and Online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Custom analytics & reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
                    <span>Customized capacity building programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-muted/50 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-xl text-foreground mx-auto">
              Join thousands of satisfied customers who have transformed their Organization with
              Safeguarding Africa
            </p>
          </div>
          <div className="grid gap-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We have saved over 40 hours per week on manual data entry tasks. The ROI wasevident within the first month of implementation.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                        className="object-cover"
                      />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-foreground">Finance Director, GrowthCo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Safeguarding Africa integration capabilities are outstanding. We connected all our tools
                    seamlessly and now have a unified workflow across departments.
                  </p>
                  <div className="flex items-center space-x-3 text-foreground">
                    <Avatar>
                      <AvatarImage
                        src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Michael Kim</div>
                      <div className="text-sm text-foreground">CTO, InnovateLab</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    The AI-powered insights have transformed how we make business decisions. We are now proactive instead of reactive in our approach.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                        className="object-cover"
                      />
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Lee</div>
                      <div className="text-sm text-muted-foreground">
                        VP of Strategy, DataDriven Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="gap-8 grid md:grid-cols-2">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Implementation was smooth and the support team is exceptional. FlowAI has
                    become an essential part of our daily operations.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        className="object-cover"
                      />
                      <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Robert Thompson</div>
                      <div className="text-sm text-muted-foreground">Operations Manager</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    This platform has revolutionized our workflow efficiency. The seamless integration and intuitive design make complex tasks feel effortless.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                        className="object-cover"
                      />
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Lee</div>
                      <div className="text-sm text-muted-foreground">
                        VP of Strategy, DataDriven Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid lg:grid-cols-3 gap-8" />
          </div>
        </div>
      </section>
      <section className="py-20 text-primary-foreground md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed text-accent">
              Join thousands of businesses that have already automated their workflows and boosted
              productivity by up to 300%. Start your free trial today and see the difference AI can
              make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="default" className="px-8">
                Start Free Trial
                <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-secondary"
              >
                Schedule Demo
                <Icon icon="lucide:calendar" className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm opacity-75 text-secondary">
              No credit card required • 14-day free trial • Cancel anytime
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
                Automate your business workflows with AI intelligence. Transform your operations and
                scale faster than ever before.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:twitter" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:linkedin" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:github" className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Product</h3>
              <div className="space-y-3 text-sm text-card">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  API
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Company</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
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
              <h3 className="font-semibold mb-4 text-secondary">Support</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Status
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
