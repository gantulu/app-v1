import { useState } from 'react';

export function usePayment(showToast: (message: string) => void) {
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromoDiscount, setAppliedPromoDiscount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('BCA Virtual Account');

  const handleApplyPromo = () => {
    const code = promoCodeInput.trim().toUpperCase();
    if (!code) return;
    if (code === 'LIBURANHEMAT' || code === 'EXPLORE15') {
      setAppliedPromoDiscount(1500000);
      showToast('Kode promo berhasil! Hemat Rp 1.500.000');
    } else {
      setAppliedPromoDiscount(0);
      showToast('Kode promo tidak valid (Coba: LIBURANHEMAT)');
    }
  };

  return {
    promoCodeInput, setPromoCodeInput, appliedPromoDiscount, setAppliedPromoDiscount,
    selectedPaymentMethod, setSelectedPaymentMethod, handleApplyPromo
  };
}
