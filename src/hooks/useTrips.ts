import { useMemo, useState } from 'react';
import { DESTINATIONS } from '../data/travel';
import type { TravelPackage } from '../types/travel';

export interface BookedTrip {
  bookingCode: string;
  place: TravelPackage;
  guests: number;
  passengerName: string;
  date: string;
  totalPaid: number;
  paymentMethod: string;
  status: string;
}

export function useTrips(showToast: (message: string) => void) {
  const [bookedTrips, setBookedTrips] = useState<BookedTrip[]>([{
    bookingCode: 'TRV-8842',
    place: DESTINATIONS[0],
    guests: 2,
    passengerName: 'Clara Vance',
    date: '14 Des 2026',
    totalPaid: 37000000,
    paymentMethod: 'BCA Virtual Account',
    status: 'Terkonfirmasi'
  }]);
  const [latestBookedTrip, setLatestBookedTrip] = useState<BookedTrip | null>(null);
  const [explorerXP, setExplorerXP] = useState(1450);
  const [dailyStreak, setDailyStreak] = useState(4);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);
  const [viewedAdventureCount, setViewedAdventureCount] = useState(1);
  const [claimedMissionIds, setClaimedMissionIds] = useState<string[]>(['m1']);
  const [showGamificationModal, setShowGamificationModal] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Check-in Online Dibuka', desc: 'Penerbangan ke Santorini (TRV-8842) siap untuk pemilihan kursi.', time: '15 mnt lalu', unread: true },
    { id: 2, title: 'Promo Akhir Tahun 15%', desc: 'Nikmati potongan langsung untuk paket Petualangan Puncak Banff.', time: '2 jam lalu', unread: true },
    { id: 3, title: 'Pembayaran Terverifikasi', desc: 'E-Tiket ke Santorini untuk 2 peserta telah diterbitkan.', time: 'Kemarin', unread: false }
  ]);

  const explorerLevelInfo = useMemo(() => {
    if (explorerXP >= 3000) return {
      tier: 'Platinum Nomad', level: 4, nextThreshold: 5000,
      progress: Math.min(100, Math.round(((explorerXP - 3000) / 2000) * 100)),
      badgeColor: 'from-indigo-500 to-purple-600'
    };
    if (explorerXP >= 1500) return {
      tier: 'Gold Explorer', level: 3, nextThreshold: 3000,
      progress: Math.round(((explorerXP - 1500) / 1500) * 100),
      badgeColor: 'from-amber-400 to-orange-500'
    };
    return {
      tier: 'Silver Voyager', level: 2, nextThreshold: 1500,
      progress: Math.round((explorerXP / 1500) * 100),
      badgeColor: 'from-sky-400 to-blue-600'
    };
  }, [explorerXP]);

  const missionsList = useMemo(() => [
    { id: 'm1', title: 'Langkah Pertama', desc: 'Lakukan pemesanan paket wisata pertama Anda', xp: 500, completed: bookedTrips.length >= 1, progressText: `${Math.min(bookedTrips.length, 1)}/1 Trip` },
    { id: 'm2', title: 'Kolektor Impian', desc: 'Simpan minimal 3 destinasi ke daftar favorit', xp: 250, completed: false, progressText: '0/3 Disimpan' },
    { id: 'm3', title: 'Jiwa Petualang', desc: 'Jelajahi 2 destinasi kategori Petualangan', xp: 300, completed: viewedAdventureCount >= 2, progressText: `${Math.min(viewedAdventureCount, 2)}/2 Destinasi` },
    { id: 'm4', title: 'Penjelajah Setia', desc: 'Check-in harian untuk menjaga streak liburan', xp: 150, completed: hasCheckedInToday, progressText: hasCheckedInToday ? 'Selesai Hari Ini' : 'Belum Check-in' }
  ], [bookedTrips.length, viewedAdventureCount, hasCheckedInToday]);

  const unreadNotificationsCount = notifications.filter((item) => item.unread).length;

  const handleDailyCheckIn = () => {
    if (hasCheckedInToday) {
      setShowGamificationModal(true);
      return;
    }
    setHasCheckedInToday(true);
    setDailyStreak((streak) => streak + 1);
    setExplorerXP((xp) => xp + 150);
    showToast('Check-in Harian +150 XP! Streak +1 Hari 🔥');
  };

  const handleClaimMission = (mission: { id: string; completed: boolean; xp: number }) => {
    if (!mission.completed || claimedMissionIds.includes(mission.id)) return;
    setClaimedMissionIds((previous) => [...previous, mission.id]);
    setExplorerXP((xp) => xp + mission.xp);
    showToast(`Hadiah Misi Diklaim: +${mission.xp} XP! 🎉`);
  };

  const markAllNotificationsRead = () => {
    setNotifications((previous) => previous.map((item) => ({ ...item, unread: false })));
    showToast('Semua notifikasi ditandai sudah dibaca');
  };

  return {
    bookedTrips, setBookedTrips, latestBookedTrip, setLatestBookedTrip,
    explorerXP, setExplorerXP, dailyStreak, hasCheckedInToday,
    setHasCheckedInToday, setDailyStreak, viewedAdventureCount, setViewedAdventureCount,
    claimedMissionIds, setClaimedMissionIds, showGamificationModal, setShowGamificationModal,
    notifications, unreadNotificationsCount, explorerLevelInfo, missionsList,
    handleDailyCheckIn, handleClaimMission, markAllNotificationsRead
  };
}
