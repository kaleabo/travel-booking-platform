'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserIcon, PackageIcon, CreditCardIcon } from 'lucide-react'
import toast from 'react-hot-toast'

export function BookingForm() {
  const [passengerName, setPassengerName] = useState('')
  const [baggage, setBaggage] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', { passengerName, baggage, paymentMethod })
    toast.success('Booking submitted successfully!')
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Trip</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="passengerName" className="block text-sm font-medium">
              Passenger Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                id="passengerName"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                className="pl-10"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="baggage" className="block text-sm font-medium">
              Baggage Option
            </label>
            <div className="relative">
              <PackageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Select value={baggage} onValueChange={setBaggage}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select baggage option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carry-on">Carry-on only</SelectItem>
                  <SelectItem value="checked">Checked baggage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="paymentMethod" className="block text-sm font-medium">
              Payment Method
            </label>
            <div className="relative">
              <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full">Book Now</Button>
        </form>
      </CardContent>
    </Card>
  )
}