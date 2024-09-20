'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldIcon, ArrowUpIcon, CarIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { getAncillaries, Ancillary } from '@/lib/api'
import Loading from '../components/Loading'

export function AncillariesList() {
  const [ancillaries, setAncillaries] = useState<Ancillary[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAncillaries = async () => {
      setIsLoading(true)
      try {
        const data = await getAncillaries()
        setAncillaries(data)
      } catch (error) {
        console.error('Error fetching ancillaries:', error)
        toast.error('Failed to load ancillaries. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAncillaries()
  }, [])

  const handleAddToBooking = (ancillary: Ancillary) => {
    toast.success(`Added "${ancillary.name}" to your booking!`)
  }

  if (isLoading) {
    return <Loading />;
  }
  const getIcon = (name: string) => {
    switch (name) {
      case 'Travel Insurance':
        return ShieldIcon
      case 'Seat Upgrade':
        return ArrowUpIcon
      case 'Airport Transfer':
        return CarIcon
      default:
        return ShieldIcon
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ancillaries.map((ancillary) => {
        const Icon = getIcon(ancillary.name)
        return (
          <Card key={ancillary.id} className="overflow-hidden border-0 transition-shadow duration-200 hover:shadow-lg">
            <CardHeader className="bg-blue-100 dark:bg-gray-800">
              <CardTitle className="flex items-center">
                <Icon className="mr-2" />
                {ancillary.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">{ancillary.description}</p>
              <p className="text-2xl font-bold mb-4">${ancillary.price}</p>
              <Button onClick={() => handleAddToBooking(ancillary)} className="w-full">
                Add to Booking
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}