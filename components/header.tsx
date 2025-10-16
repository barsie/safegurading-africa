import React from 'react'
import { Button } from './ui/button'
import { Icon } from '@iconify/react'

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Icon icon="fa7-solid:zap" className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-secondary">Safeguarding Africa</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium justify-center">
              <a
                href="#features"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Projects
              </a>
              <a
                href="#pricing"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Testimonials
              </a>
            </nav>
            <div className="flex items-center space-x-2 flex-1 justify-end text-muted">
              <Button size="sm">Partner With Us</Button>
            </div>
          </div>
        </div>
</header>
  )
}


//     <div className="container mx-auto px-4 lg:px-6">
//       <div className="text-center space-y-4 mb-16">
//         <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
//           Our Work and Who we work with
//         </h2>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           Pay little and Negociate bulk trainings
//         </p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <Card className="relative border-2 bg-gradient-to-br to-secondary/5 shadow-lg from-primary/5">
//           <CardContent>
//             <div className="space-y-1">
//               <h3 className="font-semibold text-xl text-left text-secondary">Starter</h3>
//               <p className="text-muted text-left">Perfect for small teams</p>
//             </div>
//             <div className="flex items-baseline gap-2 mt-6">
//               <div className="text-4xl font-bold text-left text-accent">$9</div>
//               <div className="text-popover-foreground text-left">per user</div>
//             </div>
//             <div className="mt-8 mb-6">
//               <Button variant="outline" className="w-full">
//                 Get Started
//               </Button>
//             </div>
//             <Separator className="mb-6" />
//             <div className="space-y-4 text-secondary">
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>2 hours monthly training training</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span> Monthly Follow up</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Amazing results</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Basic analytics</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="relative border-2 border-primary shadow-xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//           <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
//             <Icon icon="ic:baseline-star" />
//             Popular
//           </Badge>
//           <CardContent>
//             <div className="space-y-1">
//               <h3 className="font-semibold text-xl text-left text-secondary">Professional</h3>
//               <p className="text-muted text-left">Ideal for growing businesses</p>
//             </div>
//             <div className="flex items-baseline gap-2 mt-6">
//               <div className="text-4xl font-bold text-left text-accent">$19</div>
//               <div className="text-muted-foreground text-left">per user</div>
//             </div>
//             <div className="mt-8 mb-6">
//               <Button className="w-full">Get Started</Button>
//             </div>
//             <Separator className="mb-6" />
//             <div className="space-y-4 text-secondary">
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Up to 10 hours monthly training</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Weekly Follow up</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Priority support</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Advanced analytics</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Inperson and online trainings</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="relative border-2 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//           <CardContent>
//             <div className="space-y-1">
//               <h3 className="font-semibold text-xl text-left text-secondary">Enterprise</h3>
//               <p className="text-muted-foreground text-left">For large organizations</p>
//             </div>
//             <div className="flex items-baseline gap-2 mt-6">
//               <div className="text-4xl font-bold text-left text-muted">$299</div>
//               <div className="text-muted-foreground text-left">for 20</div>
//             </div>
//             <div className="mt-8 mb-6">
//               <Button variant="outline" className="w-full">
//                 Contact Sales
//               </Button>
//             </div>
//             <Separator className="mb-6" />
//             <div className="space-y-4 text-secondary">
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Global program</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Up to 50 hours monthly training</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>In person and Online</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Custom analytics & reporting</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon icon="lucide:check" className="w-5 h-5 text-primary" />
//                 <span>Customized capacity building programs</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   </section>
//   <section id="testimonials" className="py-20 bg-muted/50 md:py-32 bg-secondary">
//     <div className="container mx-auto px-4 lg:px-6">
//       <div className="text-center space-y-4 mb-16">
//         <h2 className="font-heading text-3xl md:text-4xl font-bold">Impact</h2>
//         <p className="text-xl text-foreground mx-auto">
//           Some of our people we work with
//         </p>
//       </div>
//       <div className="grid gap-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//             <CardContent>
//               <div className="flex items-center space-x-1 mb-4">
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//               </div>
//               <p className="text-muted-foreground mb-6">
//                 We have saved over 40 hours per week on manual data entry tasks. The ROI wasevident within the first month of implementation.
//               </p>
//               <div className="flex items-center space-x-3">
//                 <Avatar>
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
//                     className="object-cover"
//                   />
//                   <AvatarFallback>EM</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="font-semibold">Emily Rodriguez</div>
//                   <div className="text-sm text-foreground">Finance Director, GrowthCo</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//             <CardContent>
//               <div className="flex items-center space-x-1 mb-4">
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//               </div>
//               <p className="text-muted-foreground mb-6">
//                 Safeguarding Africa integration capabilities are outstanding. We connected all our tools
//                 seamlessly and now have a unified workflow across departments.
//               </p>
//               <div className="flex items-center space-x-3 text-foreground">
//                 <Avatar>
//                   <AvatarImage
//                     src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
//                     className="object-cover"
//                   />
//                   <AvatarFallback>MK</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="font-semibold">Michael Kim</div>
//                   <div className="text-sm text-foreground">CTO, InnovateLab</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//             <CardContent>
//               <div className="flex items-center space-x-1 mb-4">
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//               </div>
//               <p className="text-muted-foreground mb-6">
//                 The AI-powered insights have transformed how we make business decisions. We are now proactive instead of reactive in our approach.
//               </p>
//               <div className="flex items-center space-x-3">
//                 <Avatar>
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
//                     className="object-cover"
//                   />
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
//                     className="object-cover"
//                   />
//                 </Avatar>
//                 <div>
//                   <div className="font-semibold">Sarah Lee</div>
//                   <div className="text-sm text-muted-foreground">
//                     VP of Strategy, DataDriven Inc
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="gap-8 grid md:grid-cols-2">
//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//             <CardContent>
//               <div className="flex items-center space-x-1 mb-4">
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//               </div>
//               <p className="text-muted-foreground mb-6">
//                 Implementation was smooth and the support team is exceptional. FlowAI has
//                 become an essential part of our daily operations.
//               </p>
//               <div className="flex items-center space-x-3">
//                 <Avatar>
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     className="object-cover"
//                   />
//                   <AvatarFallback>RT</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="font-semibold">Robert Thompson</div>
//                   <div className="text-sm text-muted-foreground">Operations Manager</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
//             <CardContent>
//               <div className="flex items-center space-x-1 mb-4">
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//                 <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
//               </div>
//               <p className="text-muted-foreground mb-6">
//                 This platform has revolutionized our workflow efficiency. The seamless integration and intuitive design make complex tasks feel effortless.
//               </p>
//               <div className="flex items-center space-x-3">
//                 <Avatar>
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
//                     className="object-cover"
//                   />
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
//                     className="object-cover"
//                   />
//                 </Avatar>
//                 <div>
//                   <div className="font-semibold">Sarah Lee</div>
//                   <div className="text-sm text-muted-foreground">
//                     VP of Strategy, DataDriven Inc
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid lg:grid-cols-3 gap-8" />
//       </div>
//     </div>
//   </section>