"use client"

import * as React from "react"
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    caseType: "dwi",
    details: "",
    inJail: false,
  })

  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please fill out all required fields (*).")
      return
    }

    setIsSubmitting(true)
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Case Evaluation</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Contact our office.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Schedule a free confidential consultation to discuss your criminal defense case. Our jail release line remains open 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-start">
          
          {/* Lead Generation Form (Left Column) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <Card className="border border-border bg-background shadow-level-3 p-lg rounded-md text-left">
                <CardHeader className="p-none mb-sm">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-sm">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                    Consultation requested.
                  </CardTitle>
                  <CardDescription className="font-sans text-sm text-muted-foreground mt-xxs">
                    Thank you for reaching out. We have received your case details and will contact you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-none pt-sm text-sm text-muted-foreground leading-relaxed flex flex-col gap-sm">
                  <p>
                    Jessica Bernstein or a representative from our firm will review your submission and call you at <strong>{formData.phone}</strong>. 
                  </p>
                  {formData.inJail && (
                    <div className="bg-destructive/5 border border-destructive/20 p-md rounded-md flex items-start gap-xs text-destructive">
                      <AlertTriangle className="h-4.5 w-4.5 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-destructive font-serif block">Urgent Action:</strong> Since the individual is currently in jail, please call our direct emergency line at <strong>(512) 887-2028</strong> for immediate bond processing rather than waiting for an email reply.
                      </p>
                    </div>
                  )}
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline" 
                    className="self-start mt-sm rounded-pill border-border"
                  >
                    Submit another inquiry
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border border-border bg-background shadow-level-3 rounded-md">
                <CardHeader className="p-lg pb-none text-left">
                  <CardTitle className="font-serif text-xl font-semibold tracking-tight text-foreground">
                    Free Case Evaluation Form
                  </CardTitle>
                  <CardDescription className="font-sans text-xs text-muted-foreground mt-xxs">
                    Your submission is completely confidential and protected under attorney-client privilege guidelines.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-lg">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-md text-left">
                    {error && (
                      <div className="p-sm bg-destructive/10 text-destructive text-xs rounded-sm border border-destructive/20 font-sans">
                        {error}
                      </div>
                    )}
                    
                    {/* Name */}
                    <div className="flex flex-col gap-xxs">
                      <Label htmlFor="name" className="text-xs font-semibold text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="First and last name"
                        className="rounded-sm border-border"
                      />
                    </div>

                    {/* Phone & Email (Responsive Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                      <div className="flex flex-col gap-xxs">
                        <Label htmlFor="phone" className="text-xs font-semibold text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(512) 555-0199"
                          className="rounded-sm border-border"
                        />
                      </div>
                      <div className="flex flex-col gap-xxs">
                        <Label htmlFor="email" className="text-xs font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="name@example.com"
                          className="rounded-sm border-border"
                        />
                      </div>
                    </div>

                    {/* Case Type Select */}
                    <div className="flex flex-col gap-xxs relative">
                      <Label htmlFor="caseType" className="text-xs font-semibold text-foreground">
                        Type of Charge
                      </Label>
                      <div className="relative">
                        <select
                          id="caseType"
                          name="caseType"
                          value={formData.caseType}
                          onChange={handleChange}
                          className="w-full h-10 px-md py-xs rounded-sm border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer appearance-none"
                        >
                          <option value="dwi">DWI / DUI Defense</option>
                          <option value="traffic">Traffic Citation</option>
                          <option value="felony">Felony Defense</option>
                          <option value="misdemeanor">Misdemeanor Defense</option>
                          <option value="jail-release">24-Hour Jail Release</option>
                          <option value="other">Other Legal Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    {/* Case Details */}
                    <div className="flex flex-col gap-xxs">
                      <Label htmlFor="details" className="text-xs font-semibold text-foreground">
                        Brief Case Description
                      </Label>
                      <Textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Please share arrest dates, county, and charge specifics if known."
                        rows={4}
                        className="rounded-sm border-border resize-none"
                      />
                    </div>

                    {/* Urgent jail release checkbox */}
                    <div className="flex items-start gap-xs bg-muted/50 p-sm border border-border rounded-sm">
                      <input
                        type="checkbox"
                        id="inJail"
                        name="inJail"
                        checked={formData.inJail}
                        onChange={handleCheckboxChange}
                        className="h-4.5 w-4.5 rounded-sm border-border bg-background text-primary focus:ring-ring cursor-pointer mt-0.5"
                      />
                      <div className="flex flex-col gap-xxs">
                        <Label htmlFor="inJail" className="text-xs font-semibold text-destructive cursor-pointer font-serif">
                          Urgent: Is the individual currently in jail?
                        </Label>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">
                          Checking this flags your inquiry for immediate attorney bond review.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-xs rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cursor-pointer shadow-level-2"
                      id="contact-form-submit"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Submit Consultation Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Details Column (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-md text-left">
            {/* Quick Contact Info */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md flex flex-col gap-sm">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
                Office Information
              </h3>
              
              <ul className="flex flex-col gap-md text-sm text-muted-foreground">
                <li className="flex items-start gap-xs">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Physical Address:</strong>
                    820 W 10th St.<br />Austin, TX 78701
                  </div>
                </li>
                <li className="flex items-start gap-xs">
                  <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Phone Contact:</strong>
                    <a href="tel:5128872028" className="hover:text-foreground hover:underline transition-colors block">
                      (512) 887-2028 (Office & 24/7 Jail Line)
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-xs">
                  <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Email Inquiry:</strong>
                    <a href="mailto:jessica@atxcrimdefense.com" className="hover:text-foreground hover:underline transition-colors block">
                      jessica@atxcrimdefense.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-xs">
                  <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Office Hours:</strong>
                    Monday - Friday: 9am - 5pm<br />
                    Saturday & Sunday: Closed<br />
                    <span className="text-destructive font-medium">(Jail Release Line is open 24/7)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location Map Placeholder */}
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden border border-border shadow-level-2">
              {/* Google Map Mock representation */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-md text-center">
                <MapPin className="h-8 w-8 text-destructive animate-bounce mb-sm" />
                <span className="font-serif font-semibold text-sm text-foreground block">Downtown Austin Location</span>
                <span className="text-xs text-muted-foreground mt-xxs">820 W 10th St. near Lamar & 15th St.</span>
                <a 
                  href="https://maps.google.com/?q=820+W+10th+St.+Austin,+TX+78701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline mt-sm inline-flex items-center gap-1 border border-border px-sm py-xxs rounded-md bg-background"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
