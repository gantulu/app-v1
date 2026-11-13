import { useState } from 'react';
import type { TravelPackage } from '../types/travel';

export function useBooking() {
  const [checkoutPlace, setCheckoutPlace] = useState<TravelPackage | null>(null);
  const [guestsCount, setGuestsCount] = useState(2);
  const [passengerName, setPassengerName] = useState('Clara Vance');
  const [passengerEmail, setPassengerEmail] = useState('clara.vance@email.id');
  const [passengerPhone, setPassengerPhone] = useState('+62 812-4488-9021');
  const [specialRequest, setSpecialRequest] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [useXPDiscount, setUseXPDiscount] = useState(false);

  return {
    checkoutPlace, setCheckoutPlace, guestsCount, setGuestsCount,
    passengerName, setPassengerName, passengerEmail, setPassengerEmail,
    passengerPhone, setPassengerPhone, specialRequest, setSpecialRequest,
    bookingSuccess, setBookingSuccess, useXPDiscount, setUseXPDiscount
  };
}
