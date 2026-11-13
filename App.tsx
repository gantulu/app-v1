import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  X,
  Compass,
  Sparkles,
  Calendar,
  Wifi,
  Battery,
  Signal,
  Home,
  Briefcase,
  User,
  Plane,
  Hotel,
  Utensils,
  ShieldCheck,
  Bell,
  Share2,
  CreditCard,
  QrCode,
  Check,
  Wallet,
  Building2,
  Armchair,
  FileText,
  Sparkle
} from 'lucide-react';

// Helper format mata uang Rupiah (IDR)
const formatIDR = (amount) => {
  return 'Rp ' + amount.toLocaleString('id-ID');
};

const formatShortIDR = (amount) => {
  const juta = amount / 1000000;
  return `Rp ${Number.isInteger(juta) ? juta : juta.toFixed(1).replace('.', ',')} Jt`;
};

// --- Data Destinasi Wisata (Bahasa Indonesia & IDR) ---
const DESTINATIONS = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Yunani',
    category: 'Populer',
    rating: 4.8,
    reviewsCount: 342,
    price: 18500000,
    duration: '5 Hari',
    membersCount: 14,
    nextDeparture: '14 Des 2026',
    flightInfo: 'Langsung • 4j 15m',
    hotelName: 'Canaves Oia Suites',
    includes: ['Hotel Tebing Butik', 'Kapal Sunset Kaldera', 'Sarapan Harian', 'Antar-Jemput Bandara'],
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Yunani terkenal dengan keindahan pantainya, mulai dari pasir hitam vulkanik Santorini hingga resor tepi tebing Oia yang ikonik...',
    fullDesc:
      'Yunani terkenal dengan keindahan pantainya, mulai dari pasir hitam vulkanik Santorini hingga resor tepi tebing Oia yang ikonik. Nikmati matahari terbenam yang tak terlupakan, berendam di pemandian air panas alami, serta berlayar menggunakan katamaran pribadi mengelilingi kaldera.',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    ]
  },
  {
    id: 'krabi',
    name: 'Krabi',
    country: 'Thailand',
    category: 'Populer',
    rating: 4.7,
    reviewsCount: 289,
    price: 13900000,
    duration: '6 Hari',
    membersCount: 19,
    nextDeparture: '20 Des 2026',
    flightInfo: '1 Transit • 5j 40m',
    hotelName: 'Rayavadee Resort',
    includes: ['Vila Tepi Pantai', 'Tur Speedboat 4 Pulau', 'Kelas Memasak Thai', 'Asuransi Penuh'],
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Krabi di pesisir barat Thailand selatan memukau dengan tebing kapur menjulang tinggi, hutan bakau lebat, dan air laut jernih...',
    fullDesc:
      'Krabi di pesisir barat Thailand selatan memukau dengan tebing kapur menjulang tinggi, hutan bakau lebat, dan lebih dari seratus pulau eksotis. Kunjungi Kepulauan Phi Phi dan Pantai Railay menggunakan perahu tradisional Thailand.',
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    ]
  },
  {
    id: 'banff',
    name: 'Puncak Banff',
    country: 'Kanada',
    category: 'Petualangan',
    rating: 4.9,
    reviewsCount: 418,
    price: 21500000,
    duration: '7 Hari',
    membersCount: 11,
    nextDeparture: '08 Jan 2027',
    flightInfo: 'Langsung • 6j 20m',
    hotelName: 'Fairmont Banff Springs',
    includes: ['Penginapan Pondok Alpen', 'Gondola Danau Louise', 'Mendaki Gletser', 'Tiket Taman Nasional'],
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Danau glasial berwarna biru pirus, puncak Pegunungan Rocky bersalju, dan jalur pendakian alpen menanti di Taman Nasional Banff...',
    fullDesc:
      'Danau glasial berwarna biru pirus, puncak Pegunungan Rocky bersalju, dan jalur pendakian alpen menanti di Taman Nasional Banff. Mendayung kano di Danau Moraine saat matahari terbit dan nikmati pemandian air panas pegunungan.',
    avatars: [
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80'
    ]
  },
  {
    id: 'patagonia',
    name: 'Torres Del Paine',
    country: 'Chili',
    category: 'Petualangan',
    rating: 4.9,
    reviewsCount: 195,
    price: 26800000,
    duration: '8 Hari',
    membersCount: 9,
    nextDeparture: '19 Jan 2027',
    flightInfo: '1 Transit • 9j 10m',
    hotelName: 'EcoCamp Patagonia',
    includes: ['Suite Kubah Geodesik', 'Trekking Gletser Grey', 'Makan Lengkap', 'Pemandu Bersertifikat'],
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Menara granit menjulang tinggi, gletser biru jernih, dan padang rumput keemasan menjadi mahkota alam liar di Patagonia Chili...',
    fullDesc:
      'Menara granit menjulang tinggi, gletser biru jernih, dan padang rumput keemasan menjadi mahkota alam liar di Patagonia Chili. Rasakan petualangan berjalan di atas Gletser Grey dan berkemah di bawah langit bintang belahan bumi selatan.',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80'
    ]
  }
];

const RECOMMENDED_TOURS = [
  {
    id: 'mauritius',
    name: 'Tur Eksotis Mauritius',
    country: 'Mauritius',
    category: 'Populer',
    dates: '12 Des - 18 Des 2026',
    nextDeparture: '12 Des 2026',
    flightInfo: 'Langsung • 7j 05m',
    hotelName: 'LUX* Le Morne Resort',
    includes: ['Suite Tepi Laut', 'Tur Katamaran Lumba-lumba', 'Sarapan & Makan Malam', 'Sopir Pribadi'],
    rating: 4.6,
    reviewsCount: 214,
    price: 20500000,
    duration: '6 Hari',
    membersCount: 16,
    image:
      'https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Jelajahi pegunungan vulkanik dramatis yang bertemu laguna kristal di Le Morne Brabant, dikelilingi terumbu karang indah...',
    fullDesc:
      'Jelajahi pegunungan vulkanik dramatis yang bertemu laguna kristal di Le Morne Brabant, dikelilingi terumbu karang indah dan hutan tropis hijau. Sudah termasuk pelayaran katamaran, trekking air terjun, dan makan malam tepi pantai.',
    avatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    ]
  },
  {
    id: 'amazon',
    name: 'Petualangan Hutan Amazon',
    country: 'Brasil',
    category: 'Petualangan',
    dates: '04 Jan - 09 Jan 2027',
    nextDeparture: '04 Jan 2027',
    flightInfo: '1 Transit • 8j 30m',
    hotelName: 'Anavilhanas Jungle Lodge',
    includes: ['Rumah Pohon Kanopi', 'Perahu Safari Malam', 'Makan Organik Lengkap', 'Pemandu Alam Liar'],
    rating: 4.8,
    reviewsCount: 176,
    price: 24200000,
    duration: '5 Hari',
    membersCount: 12,
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85',
    shortDesc:
      'Susuri anak sungai zamrud yang berkelok di jantung lembah Amazon bersama pemandu alam ahli dan penginapan ramah lingkungan...',
    fullDesc:
      'Susuri anak sungai zamrud yang berkelok di jantung lembah Amazon bersama pemandu alam ahli dan penginapan ramah lingkungan. Lihat lumba-lumba sungai merah muda, burung tukan, serta budaya suku asli Amazon.',
    avatars: [
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80'
    ]
  }
];

export default function App() {
  // Navigation & App Views
  const [activeScreen, setActiveScreen] = useState('onboarding'); // 'onboarding' | 'main' | 'detail' | 'checkout'
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'saved' | 'trips' | 'profile'

  // Interactive User State
  const [selectedCategory, setSelectedCategory] = useState('Populer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(DESTINATIONS[0]);
  const [bookmarkedIds, setBookmarkedIds] = useState(['santorini', 'banff']);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [selectedDateSlot, setSelectedDateSlot] = useState(0);

  // Filter & Checkout State
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [maxBudget, setMaxBudget] = useState(30000000);
  const [checkoutPlace, setCheckoutPlace] = useState(null);
  const [guestsCount, setGuestsCount] = useState(2);
  const [passengerName, setPassengerName] = useState('Clara Vance');
  const [passengerEmail, setPassengerEmail] = useState('clara.vance@email.id');
  const [passengerPhone, setPassengerPhone] = useState('+62 812-4488-9021');
  const [specialRequest, setSpecialRequest] = useState('');
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromoDiscount, setAppliedPromoDiscount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('BCA Virtual Account');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [latestBookedTrip, setLatestBookedTrip] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Modal Tambahan untuk Halaman Lengkap (Notifikasi, E-Tiket QR, Detail Profil, Semua Destinasi)
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [activeTicketModal, setActiveTicketModal] = useState(null);
  const [activeProfileSheet, setActiveProfileSheet] = useState(null); // 'payment' | 'insurance' | 'flight'
  const [showAllPlacesModal, setShowAllPlacesModal] = useState(false);
  const [seatPreference, setSeatPreference] = useState('Kursi Jendela (Window)');
  const [mealPreference, setMealPreference] = useState('Halal Standar');

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Check-in Online Dibuka',
      desc: 'Penerbangan ke Santorini (TRV-8842) siap untuk pemilihan kursi.',
      time: '15 mnt lalu',
      unread: true
    },
    {
      id: 2,
      title: 'Promo Akhir Tahun 15%',
      desc: 'Nikmati potongan langsung untuk paket Petualangan Puncak Banff.',
      time: '2 jam lalu',
      unread: true
    },
    {
      id: 3,
      title: 'Pembayaran Terverifikasi',
      desc: 'E-Tiket ke Santorini untuk 2 peserta telah diterbitkan.',
      time: 'Kemarin',
      unread: false
    }
  ]);

  // Pre-populated realistic booked trips
  const [bookedTrips, setBookedTrips] = useState([
    {
      bookingCode: 'TRV-8842',
      place: DESTINATIONS[0],
      guests: 2,
      date: '14 Des 2026',
      totalPaid: 37000000,
      paymentMethod: 'BCA Virtual Account',
      status: 'Terkonfirmasi'
    }
  ]);

  const unreadNotificationsCount = notifications.filter((n) => n.unread).length;

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('Semua notifikasi ditandai sudah dibaca');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2400);
  };

  // Filtered destinations
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((place) => {
      const matchesCategory =
        selectedCategory === 'Semua' || place.category === selectedCategory;
      const matchesSearch =
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBudget = place.price <= maxBudget;
      return matchesCategory && matchesSearch && matchesBudget;
    });
  }, [selectedCategory, searchQuery, maxBudget]);

  const filteredRecommended = useMemo(() => {
    return RECOMMENDED_TOURS.filter((tour) => {
      const matchesSearch =
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBudget = tour.price <= maxBudget;
      return matchesSearch && matchesBudget;
    });
  }, [searchQuery, maxBudget]);

  const allPlaces = useMemo(() => [...DESTINATIONS, ...RECOMMENDED_TOURS], []);

  const savedPlaces = useMemo(
    () => allPlaces.filter((p) => bookmarkedIds.includes(p.id)),
    [allPlaces, bookmarkedIds]
  );

  const toggleBookmark = (e, id) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      showToast(exists ? 'Dihapus dari Tersimpan' : 'Disimpan ke Favorit');
      return exists ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const openPlaceDetail = (place) => {
    setSelectedPlace(place);
    setIsDescExpanded(false);
    setSelectedDateSlot(0);
    setActiveScreen('detail');
  };

  const triggerBooking = (place) => {
    setCheckoutPlace(place);
    setGuestsCount(2);
    setPromoCodeInput('');
    setAppliedPromoDiscount(0);
    setBookingSuccess(false);
    setActiveScreen('checkout');
  };

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

  const confirmReservation = () => {
    if (!checkoutPlace) return;
    if (!passengerName.trim()) {
      showToast('Mohon isi nama lengkap pemesan');
      return;
    }
    const dateOptions = [
      checkoutPlace.nextDeparture,
      '28 Des 2026',
      '15 Jan 2027'
    ];
    const subtotal = checkoutPlace.price * guestsCount;
    const serviceFee = 250000;
    const finalTotal = Math.max(0, subtotal + serviceFee - appliedPromoDiscount);

    const newTrip = {
      bookingCode: `TRV-${Math.floor(1000 + Math.random() * 9000)}`,
      place: checkoutPlace,
      guests: guestsCount,
      passengerName: passengerName.trim(),
      date: dateOptions[selectedDateSlot] || checkoutPlace.nextDeparture,
      totalPaid: finalTotal,
      paymentMethod: selectedPaymentMethod,
      status: 'Terkonfirmasi'
    };
    setBookedTrips((prev) => [newTrip, ...prev]);
    setLatestBookedTrip(newTrip);
    setBookingSuccess(true);
  };

  // --- iOS Realistic Status Bar & Dynamic Island ---
  const renderStatusBar = (lightText = false) => (
    <div
      className={`relative z-30 flex items-center justify-between px-7 pt-3.5 pb-2 select-none ${
        lightText ? 'text-white drop-shadow-sm' : 'text-gray-900'
      }`}
    >
      <span className="text-[13px] font-bold tracking-tight">18:18</span>

      {/* Realistic iPhone Dynamic Island */}
      <div className="w-[96px] h-[25px] bg-black rounded-full flex items-center justify-end px-2.5 shadow-inner">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1a233a] ring-1 ring-gray-800" />
      </div>

      <div className="flex items-center gap-1.5">
        <Signal className="w-3.5 h-3.5 stroke-[2.4]" />
        <Wifi className="w-3.5 h-3.5 stroke-[2.4]" />
        <Battery className="w-4 h-4 stroke-[2.4]" />
      </div>
    </div>
  );

  // --- Bottom Home Indicator Bar ---
  const renderHomeIndicator = () => (
    <div className="w-full flex justify-center pb-2 pt-1 bg-transparent pointer-events-none">
      <div className="w-32 h-1 rounded-full bg-gray-900/20" />
    </div>
  );

  // --- SCREEN 1: ONBOARDING ---
  const renderOnboardingScreen = () => (
    <div className="relative w-full h-full bg-white flex flex-col justify-between overflow-hidden">
      {/* Top Status Bar Overlaid on Image */}
      <div className="absolute top-0 inset-x-0 z-30">
        {renderStatusBar(true)}
      </div>

      {/* Top Hero Image with Curved Bottom Mask */}
      <div className="relative w-full h-[64%] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85"
          alt="Wisatawan menikmati danau pegunungan"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15" />

        {/* Signature Asymmetric S-Curve Bottom Cutout */}
        <svg
          viewBox="0 0 360 95"
          preserveAspectRatio="none"
          className="absolute -bottom-[1px] left-0 w-full h-[84px] text-white fill-current pointer-events-none"
        >
          <path d="M0,95 L0,68 C0,32 32,22 86,22 L272,22 C322,22 352,6 360,-10 L360,95 Z" />
        </svg>
      </div>

      {/* Bottom Typography & CTA */}
      <div className="relative z-10 flex-1 bg-white px-7 pt-0 pb-4 flex flex-col items-center justify-between text-center">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0EA5E9] text-[11px] font-semibold mb-2">
            <Sparkles className="w-3 h-3" /> Liburan Eksklusif Terpilih
          </span>
          <h1
            className="text-[28px] leading-[1.2] font-extrabold text-[#111315] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Jelajahi Destinasi
            <br />
            Impian Anda
          </h1>
          <p className="text-[12px] text-gray-400 mt-2 max-w-[250px] mx-auto leading-relaxed">
            Temukan perjalanan terkurasi, hotel butik terbaik, dan paket penerbangan lengkap.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-3">
          <button
            onClick={() => {
              setActiveScreen('main');
              setActiveTab('explore');
            }}
            className="group w-full max-w-[240px] inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-[15px] tracking-wide bg-gradient-to-r from-[#22B0FF] to-[#0095F6] shadow-[0_14px_28px_-6px_rgba(14,165,233,0.52)] hover:shadow-[0_18px_32px_-6px_rgba(14,165,233,0.65)] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Mulai Jelajah</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
          </button>
          {renderHomeIndicator()}
        </div>
      </div>
    </div>
  );

  // --- TAB 1: EXPLORE HOME CONTENT ---
  const renderExploreTab = () => (
    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-2 pb-24">
      {/* Top Header: Profile Avatar, Location & Notification */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab('profile')}
            className="w-10 h-10 rounded-2xl overflow-hidden bg-indigo-100 ring-2 ring-white shadow-sm cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=85"
              alt="Clara Vance"
              className="w-full h-full object-cover"
            />
          </button>
          <div>
            <p className="text-[10.5px] text-gray-400 font-medium">Lokasi Saat Ini</p>
            <div className="flex items-center gap-1 text-gray-800">
              <MapPin className="w-3 h-3 text-[#0EA5E9] fill-[#0EA5E9]" />
              <span className="text-[12px] font-bold">Makassar, ID</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowNotificationsModal(true)}
          className="relative w-10 h-10 rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
        >
          <Bell className="w-4 h-4" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#0EA5E9] ring-2 ring-white" />
          )}
        </button>
      </div>

      {/* Search Bar & Filter Button */}
      <div className="flex items-center gap-2.5 mt-4">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-2xl px-3.5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari destinasi, negara..."
            className="w-full bg-transparent text-[12.5px] text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilterModal(true)}
          aria-label="Filter destinasi"
          className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#20AFFF] to-[#0092F4] text-white flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(14,165,233,0.45)] hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Travel Places Section */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <h2
            className="text-[19px] font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Destinasi Wisata
          </h2>
          <button
            onClick={() => setShowAllPlacesModal(true)}
            className="text-[11.5px] font-medium text-gray-400 hover:text-[#0EA5E9] transition-colors cursor-pointer"
          >
            Lihat Semua
          </button>
        </div>

        {/* Vertical Left Tabs + Horizontal Cards Carousel */}
        <div className="relative flex items-center -ml-6">
          <div className="flex flex-col items-center justify-between h-[216px] w-11 shrink-0 py-2">
            {['Populer', 'Petualangan', 'Semua'].map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="relative flex items-center justify-center w-full h-14 cursor-pointer group"
                >
                  {isActive && (
                    <span className="absolute left-0 w-[3.5px] h-7 rounded-r-full bg-[#0EA5E9] transition-all" />
                  )}
                  <span
                    className={`-rotate-90 text-[11px] tracking-wide whitespace-nowrap transition-colors ${
                      isActive
                        ? 'font-bold text-[#0EA5E9]'
                        : 'font-medium text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {category}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex-1 flex gap-3 overflow-x-auto pb-2 pr-6 no-scrollbar">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((place) => {
                const isBookmarked = bookmarkedIds.includes(place.id);
                return (
                  <div
                    key={place.id}
                    onClick={() => openPlaceDetail(place)}
                    className="w-[164px] shrink-0 bg-white rounded-[24px] p-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer group"
                  >
                    <div className="relative w-full h-[156px] rounded-[18px] overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg bg-black/55 backdrop-blur-xs text-white text-[10px] font-bold">
                        {formatShortIDR(place.price)}
                      </div>
                      <button
                        onClick={(e) => toggleBookmark(e, place.id)}
                        aria-label={`Simpan ${place.name}`}
                        className="absolute top-2 right-2 w-7 h-7 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                      >
                        <Bookmark
                          className={`w-3.5 h-3.5 ${
                            isBookmarked
                              ? 'fill-[#0EA5E9] text-[#0EA5E9]'
                              : 'text-[#0EA5E9]'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="pt-2 px-1 pb-0.5">
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-[13.5px] font-bold text-gray-900 truncate"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif"
                          }}
                        >
                          {place.name}
                        </h3>
                        <span className="flex items-center gap-0.5 text-[10.5px] font-bold text-gray-700">
                          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          {place.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5 text-gray-400">
                        <MapPin className="w-3 h-3 text-[#0EA5E9] fill-[#0EA5E9]/20 shrink-0" />
                        <span className="text-[10.5px] font-medium truncate">
                          {place.country}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-[210px] bg-white rounded-3xl flex flex-col items-center justify-center text-center p-4 border border-dashed border-gray-200">
                <Compass className="w-7 h-7 text-sky-400 mb-1.5" />
                <p className="text-xs font-semibold text-gray-700">
                  Destinasi tidak ditemukan
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Semua');
                    setMaxBudget(30000000);
                  }}
                  className="mt-2 text-[11px] font-semibold text-[#0EA5E9] underline cursor-pointer"
                >
                  Atur ulang filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <h2
            className="text-[18px] font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Rekomendasi Tur
          </h2>
          <button
            onClick={() => setShowAllPlacesModal(true)}
            className="text-[11.5px] font-medium text-gray-400 hover:text-[#0EA5E9] transition-colors cursor-pointer"
          >
            Lihat Semua
          </button>
        </div>

        <div className="space-y-2.5">
          {filteredRecommended.map((tour) => (
            <div
              key={tour.id}
              onClick={() => openPlaceDetail(tour)}
              className="flex items-center gap-3 bg-white p-2.5 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h4
                  className="text-[13px] font-bold text-gray-900 truncate"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {tour.name}
                </h4>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10.5px] text-gray-400 font-medium truncate">
                    {tour.dates}
                  </span>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-bold text-gray-800">
                      {tour.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- TAB 2: SAVED WISHLIST ---
  const renderSavedTab = () => (
    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-24">
      <h2
        className="text-[22px] font-bold text-gray-900"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Destinasi Tersimpan
      </h2>
      <p className="text-xs text-gray-400 mt-0.5">
        {savedPlaces.length} destinasi impian disimpan
      </p>

      {savedPlaces.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center px-6">
          <div className="w-14 h-14 rounded-full bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-3">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-gray-800">Belum ada destinasi tersimpan</h3>
          <p className="text-xs text-gray-400 mt-1">
            Ketuk ikon marka buku pada kartu wisata untuk menyimpannya di sini.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {savedPlaces.map((place) => (
            <div
              key={place.id}
              onClick={() => openPlaceDetail(place)}
              className="bg-white rounded-3xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center gap-3.5 cursor-pointer group"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-20 h-20 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h3
                    className="text-[15px] font-bold text-gray-900 truncate"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {place.name}
                  </h3>
                  <button
                    onClick={(e) => toggleBookmark(e, place.id)}
                    className="p-1 text-[#0EA5E9] cursor-pointer"
                  >
                    <Bookmark className="w-4 h-4 fill-[#0EA5E9]" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#0EA5E9]" />
                  {place.country} • {place.duration}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-extrabold text-gray-900">
                    {formatShortIDR(place.price)}
                    <span className="text-[10px] font-normal text-gray-400"> /orang</span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#0EA5E9]">
                    Detail →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // --- TAB 3: MY BOOKED TRIPS ---
  const renderTripsTab = () => (
    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-24">
      <h2
        className="text-[22px] font-bold text-gray-900"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Perjalanan Saya
      </h2>
      <p className="text-xs text-gray-400 mt-0.5">
        Jadwal keberangkatan & e-tiket aktif
      </p>

      <div className="mt-4 space-y-4">
        {bookedTrips.map((trip) => (
          <div
            key={trip.bookingCode}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="relative h-32">
              <img
                src={trip.place.image}
                alt={trip.place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                {trip.status}
              </span>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-[10px] uppercase tracking-wider text-sky-200 font-semibold">
                  Kode: {trip.bookingCode}
                </p>
                <h3
                  className="text-lg font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {trip.place.name}, {trip.place.country}
                </h3>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-2xl p-2.5">
                <div>
                  <p className="text-[10px] text-gray-400">Berangkat</p>
                  <p className="text-[11px] font-bold text-gray-800 mt-0.5">{trip.date}</p>
                </div>
                <div className="border-x border-gray-200">
                  <p className="text-[10px] text-gray-400">Peserta</p>
                  <p className="text-[11px] font-bold text-gray-800 mt-0.5">{trip.guests} Orang</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">Total Bayar</p>
                  <p className="text-[11px] font-bold text-[#0EA5E9] mt-0.5">
                    {formatShortIDR(trip.totalPaid)}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setActiveTicketModal(trip)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#22B0FF] to-[#0095F6] text-white text-xs font-bold shadow-xs hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  Buka E-Tiket
                </button>
                <button
                  onClick={() => openPlaceDetail(trip.place)}
                  className="px-3.5 py-2.5 rounded-xl bg-sky-50 text-[#0EA5E9] text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- TAB 4: PROFILE ---
  const renderProfileTab = () => (
    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-24">
      <div className="flex flex-col items-center text-center mt-2">
        <div className="w-20 h-20 rounded-3xl overflow-hidden ring-4 ring-white shadow-md">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85"
            alt="Clara Vance"
            className="w-full h-full object-cover"
          />
        </div>
        <h2
          className="text-xl font-bold text-gray-900 mt-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Clara Vance
        </h2>
        <p className="text-xs text-gray-400">Anggota Gold Explorer • Jakarta & Makassar</p>

        <div className="grid grid-cols-3 gap-3 w-full mt-5">
          <div className="bg-white p-3 rounded-2xl shadow-xs">
            <p className="text-base font-extrabold text-gray-900">{bookedTrips.length}</p>
            <p className="text-[10px] text-gray-400">Perjalanan</p>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-xs">
            <p className="text-base font-extrabold text-[#0EA5E9]">{savedPlaces.length}</p>
            <p className="text-[10px] text-gray-400">Tersimpan</p>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-xs">
            <p className="text-base font-extrabold text-gray-900">14</p>
            <p className="text-[10px] text-gray-400">Negara</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        {[
          {
            key: 'payment',
            icon: CreditCard,
            label: 'Metode Pembayaran',
            sub: `${selectedPaymentMethod} • Terhubung`
          },
          {
            key: 'insurance',
            icon: ShieldCheck,
            label: 'Asuransi Perjalanan',
            sub: 'Allianz Global Platinum Aktif'
          },
          {
            key: 'flight',
            icon: Plane,
            label: 'Preferensi Penerbangan',
            sub: `${seatPreference.split(' ')[0]} ${seatPreference.split(' ')[1]} • ${mealPreference}`
          }
        ].map((item) => (
          <div
            key={item.key}
            onClick={() => setActiveProfileSheet(item.key)}
            className="flex items-center justify-between bg-white p-3.5 rounded-2xl shadow-xs cursor-pointer hover:bg-gray-50 active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">{item.label}</p>
                <p className="text-[10.5px] text-gray-400">{item.sub}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}

        <button
          onClick={() => setActiveScreen('onboarding')}
          className="mt-4 w-full py-3 rounded-2xl bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Kembali ke Halaman Awal
        </button>
      </div>
    </div>
  );

  // --- MAIN TABBED CONTAINER (SCREEN 2) ---
  const renderMainTabbedScreen = () => (
    <div className="relative w-full h-full bg-[#FAFAFB] flex flex-col justify-between overflow-hidden">
      {renderStatusBar(false)}

      {activeTab === 'explore' && renderExploreTab()}
      {activeTab === 'saved' && renderSavedTab()}
      {activeTab === 'trips' && renderTripsTab()}
      {activeTab === 'profile' && renderProfileTab()}

      {/* Realistic Floating Bottom Navigation Bar */}
      <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 pt-2.5 pb-1 z-30">
        <div className="flex items-center justify-between">
          {[
            { id: 'explore', icon: Home, label: 'Jelajah' },
            { id: 'saved', icon: Bookmark, label: 'Tersimpan' },
            { id: 'trips', icon: Briefcase, label: 'Trip Saya' },
            { id: 'profile', icon: User, label: 'Profil' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                  isActive ? 'text-[#0EA5E9]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <tab.icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[2]'
                  }`}
                />
                <span className="text-[10px] font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>
        {renderHomeIndicator()}
      </div>
    </div>
  );

  // --- SCREEN 3: REALISTIC DESTINATION DETAIL SCREEN ---
  const renderDetailScreen = () => {
    const place = selectedPlace || DESTINATIONS[0];
    const isBookmarked = bookmarkedIds.includes(place.id);
    const dateOptions = [place.nextDeparture, '28 Des 2026', '15 Jan 2027'];

    return (
      <div className="relative w-full h-full bg-white flex flex-col justify-between overflow-hidden">
        {/* Top Status Bar Overlaid */}
        <div className="absolute top-0 inset-x-0 z-30">
          {renderStatusBar(true)}
        </div>

        {/* Top Hero Image */}
        <div className="relative w-full h-[46%] overflow-hidden shrink-0">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/15" />

          {/* Floating Back, Share & Bookmark Buttons */}
          <div className="absolute top-12 inset-x-6 flex items-center justify-between z-20">
            <button
              onClick={() => setActiveScreen('main')}
              aria-label="Kembali"
              className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-800 hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast('Tautan wisata berhasil disalin!')}
                aria-label="Bagikan destinasi"
                className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-800 hover:bg-white active:scale-95 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => toggleBookmark(e, place.id)}
                aria-label="Simpan destinasi"
                className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-[#0EA5E9] hover:bg-white active:scale-95 transition-all cursor-pointer"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    isBookmarked ? 'fill-[#0EA5E9] text-[#0EA5E9]' : 'text-[#0EA5E9]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Signature Curved Cutout Transition */}
          <svg
            viewBox="0 0 360 64"
            preserveAspectRatio="none"
            className="absolute -bottom-[1px] left-0 w-full h-[52px] text-white fill-current pointer-events-none"
          >
            <path d="M0,64 L0,18 C24,38 52,40 92,40 L298,40 C332,40 352,50 360,64 Z" />
          </svg>
        </div>

        {/* Scrollable Details Section */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar bg-white px-6 pb-4">
          <div className="flex items-center justify-between">
            <h1
              className="text-[24px] font-extrabold text-gray-900 tracking-tight truncate pr-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {place.name}
            </h1>
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2.5 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-[12.5px] font-bold text-gray-800">
                {place.rating}
              </span>
              <span className="text-[10.5px] text-gray-400">
                ({place.reviewsCount})
              </span>
            </div>
          </div>

          {/* Country & Flight Info */}
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0EA5E9] fill-[#0EA5E9]" />
              <span className="text-[12.5px] font-medium text-gray-500">
                {place.country}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
              <Plane className="w-3 h-3 text-[#0EA5E9]" />
              {place.flightInfo}
            </span>
          </div>

          {/* Select Departure Date Pills */}
          <div className="mt-3.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Pilih Tanggal Keberangkatan
            </span>
            <div className="flex gap-2 mt-1.5">
              {dateOptions.map((dt, idx) => (
                <button
                  key={dt}
                  onClick={() => setSelectedDateSlot(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                    selectedDateSlot === idx
                      ? 'bg-sky-50 border-[#0EA5E9] text-[#0EA5E9]'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {dt}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3.5">
            <h3
              className="text-[14px] font-bold text-[#0EA5E9]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Deskripsi
            </h3>
            <p className="mt-1 text-[12px] leading-[1.6] text-gray-500">
              {isDescExpanded ? place.fullDesc : place.shortDesc}{' '}
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="font-bold text-gray-800 hover:text-[#0EA5E9] cursor-pointer"
              >
                {isDescExpanded ? 'Tutup' : 'Selengkapnya'}
              </button>
            </p>
          </div>

          {/* Package Highlights */}
          <div className="mt-3.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Fasilitas Termasuk
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              {place.includes.map((inc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-xl text-[11px] font-medium text-gray-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span className="truncate">{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Members & Duration */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {place.avatars.map((avatarUrl, idx) => (
                  <img
                    key={idx}
                    src={avatarUrl}
                    alt="Peserta tur"
                    className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
                <div className="w-6 h-6 rounded-full bg-gray-900 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-white">
                  +{place.membersCount}
                </div>
              </div>
              <span className="text-[11px] font-medium text-gray-400">
                Peserta Tur
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-800">
              <Clock className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span className="text-[12px] font-bold">{place.duration}</span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Price & Book Now Bar */}
        <div className="bg-white border-t border-gray-100 px-6 pt-3 pb-1">
          <div className="flex items-center justify-between">
            <div>
              <div
                className="text-[19px] font-extrabold text-gray-900 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {formatShortIDR(place.price)}
              </div>
              <span className="text-[10px] font-medium text-gray-400">
                Per Orang • Termasuk Pajak
              </span>
            </div>

            <button
              onClick={() => triggerBooking(place)}
              className="px-7 py-3.5 rounded-full text-white font-semibold text-[13.5px] bg-gradient-to-r from-[#22B0FF] to-[#0095F6] shadow-[0_14px_28px_-6px_rgba(14,165,233,0.52)] hover:shadow-[0_18px_32px_-6px_rgba(14,165,233,0.65)] active:scale-95 transition-all cursor-pointer"
            >
              Pesan Sekarang
            </button>
          </div>
          {renderHomeIndicator()}
        </div>
      </div>
    );
  };

  // --- SCREEN 4: HALAMAN CHECKOUT LENGKAP (CheckoutPage) ---
  const renderCheckoutPage = () => {
    const place = checkoutPlace || selectedPlace || DESTINATIONS[0];
    const dateOptions = [place.nextDeparture, '28 Des 2026', '15 Jan 2027'];
    const chosenDate = dateOptions[selectedDateSlot] || place.nextDeparture;
    const subtotal = place.price * guestsCount;
    const serviceFee = 250000;
    const grandTotal = Math.max(0, subtotal + serviceFee - appliedPromoDiscount);

    return (
      <div className="relative w-full h-full bg-[#FAFAFB] flex flex-col justify-between overflow-hidden">
        {renderStatusBar(false)}

        {/* Top Header */}
        <div className="px-6 pt-2 pb-3 flex items-center justify-between bg-white border-b border-gray-100 shrink-0">
          <button
            onClick={() => {
              if (bookingSuccess) {
                setActiveScreen('main');
                setActiveTab('trips');
              } else {
                setActiveScreen('detail');
              }
            }}
            aria-label="Kembali"
            className="w-9 h-9 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h1
              className="text-base font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {bookingSuccess ? 'Pembayaran Berhasil' : 'Checkout Perjalanan'}
            </h1>
            <p className="text-[10px] text-gray-400">
              {bookingSuccess ? 'E-Tiket Anda telah terbit' : 'Langkah Terakhir Pemesanan'}
            </p>
          </div>
          <div className="w-9" />
        </div>

        {!bookingSuccess ? (
          <>
            {/* Scrollable Checkout Form */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-4 space-y-4">
              {/* 1. Ringkasan Paket */}
              <div className="bg-white rounded-3xl p-3.5 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0EA5E9]">
                      {place.category} • {place.duration}
                    </span>
                    <h3
                      className="text-[15px] font-bold text-gray-900 truncate mt-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {place.name}, {place.country}
                    </h3>
                    <p className="text-[11px] text-gray-400 truncate">
                      {place.hotelName}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Calendar className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span className="font-semibold">{chosenDate}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                      className="w-6 h-6 rounded-full bg-gray-100 font-bold text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-900">
                      {guestsCount} Peserta
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.min(10, g + 1))}
                      className="w-6 h-6 rounded-full bg-gray-100 font-bold text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Data Pemesan Utama */}
              <div className="bg-white rounded-3xl p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-3">
                <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  Data Pemesan & Kontak E-Tiket
                </h4>

                <div>
                  <label className="block text-[10.5px] font-semibold text-gray-500 mb-1">
                    Nama Lengkap (Sesuai Paspor/KTP)
                  </label>
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#0EA5E9]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10.5px] font-semibold text-gray-500 mb-1">
                      Email E-Tiket
                    </label>
                    <input
                      type="email"
                      value={passengerEmail}
                      onChange={(e) => setPassengerEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-800 focus:outline-none focus:border-[#0EA5E9]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-semibold text-gray-500 mb-1">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={passengerPhone}
                      onChange={(e) => setPassengerPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-800 focus:outline-none focus:border-[#0EA5E9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] font-semibold text-gray-500 mb-1">
                    Catatan Khusus (Opsional)
                  </label>
                  <input
                    type="text"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Contoh: Kamar bebas asap rokok, kursi jendela..."
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[11px] text-gray-800 focus:outline-none focus:border-[#0EA5E9]"
                  />
                </div>
              </div>

              {/* 3. Kode Promo */}
              <div className="bg-white rounded-3xl p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <Sparkle className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    Kode Promo
                  </span>
                  <button
                    type="button"
                    onClick={() => setPromoCodeInput('LIBURANHEMAT')}
                    className="text-[10px] font-bold text-[#0EA5E9] hover:underline cursor-pointer"
                  >
                    Pakai LIBURANHEMAT
                  </button>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Masukkan kode promo"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs uppercase font-semibold text-gray-800 focus:outline-none focus:border-[#0EA5E9]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 rounded-xl bg-sky-50 text-[#0EA5E9] text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer"
                  >
                    Terapkan
                  </button>
                </div>
              </div>

              {/* 4. Metode Pembayaran */}
              <div className="bg-white rounded-3xl p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-2.5">
                <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  Metode Pembayaran
                </h4>

                {[
                  {
                    name: 'BCA Virtual Account',
                    sub: 'Verifikasi otomatis • Bebas biaya admin',
                    icon: Building2
                  },
                  {
                    name: 'QRIS Instan',
                    sub: 'GoPay, OVO, DANA, ShopeePay & M-Banking',
                    icon: QrCode
                  },
                  {
                    name: 'Visa •••• 4829',
                    sub: 'Kartu Kredit Utama • Cicilan 0% tersedia',
                    icon: CreditCard
                  }
                ].map((method) => {
                  const active = selectedPaymentMethod === method.name;
                  return (
                    <div
                      key={method.name}
                      onClick={() => setSelectedPaymentMethod(method.name)}
                      className={`p-3 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                        active
                          ? 'bg-sky-50/80 border-[#0EA5E9]'
                          : 'bg-gray-50 border-gray-100 hover:bg-gray-100/70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#0EA5E9] flex items-center justify-center shadow-2xs">
                          <method.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">
                            {method.name}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {method.sub}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                          active
                            ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white'
                            : 'border-gray-300'
                        }`}
                      >
                        {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 5. Rincian Harga */}
              <div className="bg-white rounded-3xl p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-2 text-xs">
                <h4 className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <FileText className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  Rincian Pembayaran
                </h4>
                <div className="flex justify-between text-gray-500">
                  <span>
                    Paket Wisata ({guestsCount}x {formatShortIDR(place.price)})
                  </span>
                  <span className="font-semibold text-gray-800">
                    {formatIDR(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Asuransi & Biaya Layanan</span>
                  <span className="font-semibold text-gray-800">
                    {formatIDR(serviceFee)}
                  </span>
                </div>
                {appliedPromoDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Diskon Promo (LIBURANHEMAT)</span>
                    <span>- {formatIDR(appliedPromoDiscount)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-dashed border-gray-200 flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total Tagihan</span>
                  <span className="text-sm font-extrabold text-[#0EA5E9]">
                    {formatIDR(grandTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Sticky Bottom Pay Bar */}
            <div className="bg-white border-t border-gray-100 px-6 pt-3 pb-1 shrink-0">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-medium text-gray-400 block">
                    Total Bayar
                  </span>
                  <span
                    className="text-[16px] font-extrabold text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {formatIDR(grandTotal)}
                  </span>
                </div>
                <button
                  onClick={confirmReservation}
                  className="px-6 py-3.5 rounded-full text-white font-semibold text-xs bg-gradient-to-r from-[#22B0FF] to-[#0095F6] shadow-[0_12px_24px_-6px_rgba(14,165,233,0.52)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                >
                  Bayar Sekarang
                </button>
              </div>
              {renderHomeIndicator()}
            </div>
          </>
        ) : (
          /* Layar Sukses Setelah Checkout */
          <div className="flex-1 flex flex-col justify-between p-6 text-center bg-white">
            <div className="my-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0EA5E9] text-[10.5px] font-bold">
                Kode Booking: {latestBookedTrip?.bookingCode}
              </span>
              <h2
                className="text-2xl font-extrabold text-gray-900 mt-2.5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Pesanan Dikonfirmasi!
              </h2>
              <p className="text-xs text-gray-500 mt-1.5 max-w-[260px] leading-relaxed">
                E-Tiket & voucher hotel untuk{' '}
                <span className="font-bold text-gray-800">{place.name}</span> ({guestsCount} peserta) telah dikirim ke{' '}
                <span className="font-semibold text-gray-700">{passengerEmail}</span>.
              </p>

              <div className="w-full bg-gray-50 rounded-3xl p-4 mt-5 text-left space-y-2 text-xs border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pemesan</span>
                  <span className="font-bold text-gray-800">{passengerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Keberangkatan</span>
                  <span className="font-bold text-gray-800">{chosenDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Metode Bayar</span>
                  <span className="font-bold text-gray-800">{selectedPaymentMethod}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-500 font-semibold">Total Lunas</span>
                  <span className="font-extrabold text-[#0EA5E9]">
                    {formatIDR(grandTotal)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => {
                  setActiveScreen('main');
                  setActiveTab('trips');
                  if (latestBookedTrip) setActiveTicketModal(latestBookedTrip);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#22B0FF] to-[#0095F6] text-white font-semibold text-xs shadow-md cursor-pointer"
              >
                Lihat E-Tiket & Kode QR
              </button>
              <button
                onClick={() => {
                  setActiveScreen('main');
                  setActiveTab('explore');
                }}
                className="w-full py-3 rounded-full bg-gray-100 text-gray-700 font-semibold text-xs hover:bg-gray-200 cursor-pointer"
              >
                Kembali ke Beranda
              </button>
              {renderHomeIndicator()}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E4E7EC] via-[#EEF1F5] to-[#DCE2EA] flex flex-col items-center justify-center py-6 px-4 font-sans select-none">
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Realistic iPhone 15 Pro Titanium Hardware Bezel */}
      <div className="relative w-full max-w-[392px] h-[812px] bg-[#1C1D21] rounded-[56px] p-[12px] shadow-[0_35px_80px_-15px_rgba(15,23,42,0.35),0_0_0_2px_#3A3D45,inset_0_0_4px_rgba(255,255,255,0.2)]">
        {/* Hardware Side Buttons */}
        <div className="hidden sm:block absolute -left-[3px] top-[130px] w-[3px] h-8 bg-[#3A3D45] rounded-l-sm" />
        <div className="hidden sm:block absolute -left-[3px] top-[180px] w-[3px] h-14 bg-[#3A3D45] rounded-l-sm" />
        <div className="hidden sm:block absolute -left-[3px] top-[248px] w-[3px] h-14 bg-[#3A3D45] rounded-l-sm" />
        <div className="hidden sm:block absolute -right-[3px] top-[200px] w-[3px] h-20 bg-[#3A3D45] rounded-r-sm" />

        {/* Inner Mobile Screen Viewport */}
        <div className="relative w-full h-full bg-white rounded-[45px] overflow-hidden flex flex-col">
          {/* In-App Toast Notification Banner */}
          {toastMessage && (
            <div className="absolute top-14 inset-x-8 z-50 bg-gray-900/90 backdrop-blur-md text-white text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22B0FF]" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Active Screen Router */}
          {activeScreen === 'onboarding' && renderOnboardingScreen()}
          {activeScreen === 'main' && renderMainTabbedScreen()}
          {activeScreen === 'detail' && renderDetailScreen()}
          {activeScreen === 'checkout' && renderCheckoutPage()}

          {/* Inside-Phone Filter Bottom Sheet */}
          {showFilterModal && (
            <div className="absolute inset-0 z-40 bg-black/45 backdrop-blur-xs flex items-end">
              <div className="bg-white w-full rounded-t-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-200">
                <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Filter Destinasi
                  </h3>
                  <button
                    onClick={() => setShowFilterModal(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-gray-700 mb-2">
                      <span>Anggaran Maksimal / Orang</span>
                      <span className="text-[#0EA5E9]">{formatShortIDR(maxBudget)}</span>
                    </div>
                    <input
                      type="range"
                      min={10000000}
                      max={30000000}
                      step={500000}
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(Number(e.target.value))}
                      className="w-full accent-[#0EA5E9] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>Rp 10 Jt</span>
                      <span>Rp 30 Jt</span>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-gray-700 mb-2">
                      Kategori Wisata
                    </span>
                    <div className="flex gap-2">
                      {['Populer', 'Petualangan', 'Semua'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            selectedCategory === cat
                              ? 'bg-[#0EA5E9] text-white border-[#0EA5E9]'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowFilterModal(false)}
                  className="mt-6 w-full py-3.5 rounded-full bg-gradient-to-r from-[#22B0FF] to-[#0095F6] text-white font-semibold text-sm shadow-md hover:brightness-105 cursor-pointer"
                >
                  Tampilkan Hasil
                </button>
              </div>
            </div>
          )}

          {/* MODAL LENGKAP 1: PANEL NOTIFIKASI */}
          {showNotificationsModal && (
            <div className="absolute inset-0 z-40 bg-black/45 backdrop-blur-xs flex items-end">
              <div className="bg-white w-full rounded-t-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[82%] flex flex-col">
                <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4 shrink-0" />
                <div className="flex items-center justify-between mb-3 shrink-0">
                  <div>
                    <h3
                      className="text-lg font-bold text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Notifikasi
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Pembaruan jadwal & penawaran perjalanan
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {unreadNotificationsCount > 0 && (
                      <button
                        onClick={markAllNotificationsRead}
                        className="text-[10.5px] font-bold text-[#0EA5E9] bg-sky-50 px-2.5 py-1.5 rounded-xl cursor-pointer"
                      >
                        Baca Semua
                      </button>
                    )}
                    <button
                      onClick={() => setShowNotificationsModal(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5 overflow-y-auto no-scrollbar pr-0.5">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      onClick={() =>
                        setNotifications((prev) =>
                          prev.map((n) =>
                            n.id === notif.id ? { ...n, unread: false } : n
                          )
                        )
                      }
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        notif.unread
                          ? 'bg-sky-50/60 border-sky-100'
                          : 'bg-gray-50 border-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                          {notif.unread && (
                            <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                          )}
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-gray-400">{notif.time}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                        {notif.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MODAL LENGKAP 2: E-TIKET & BOARDING PASS QR */}
          {activeTicketModal && (
            <div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-xs flex items-center justify-center p-5">
              <div className="bg-white w-full rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-[#22B0FF] to-[#0095F6] p-5 text-white relative">
                  <button
                    onClick={() => setActiveTicketModal(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] uppercase tracking-widest text-sky-100 font-bold">
                    E-Tiket & Voucher Hotel
                  </p>
                  <h3
                    className="text-xl font-extrabold mt-0.5"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {activeTicketModal.place.name}, {activeTicketModal.place.country}
                  </h3>
                  <p className="text-xs text-sky-100 mt-0.5">
                    {activeTicketModal.place.hotelName}
                  </p>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 text-xs pb-4 border-b border-dashed border-gray-200">
                    <div>
                      <p className="text-[10px] text-gray-400">Nama Penumpang</p>
                      <p className="font-bold text-gray-900 mt-0.5">Clara Vance</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">Kode Booking</p>
                      <p className="font-bold text-[#0EA5E9] mt-0.5">
                        {activeTicketModal.bookingCode}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">Tanggal Berangkat</p>
                      <p className="font-bold text-gray-900 mt-0.5">
                        {activeTicketModal.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">Jumlah Peserta</p>
                      <p className="font-bold text-gray-900 mt-0.5">
                        {activeTicketModal.guests} Orang ({activeTicketModal.place.duration})
                      </p>
                    </div>
                  </div>

                  {/* Visual QR Boarding Pass */}
                  <div className="pt-4 flex flex-col items-center text-center">
                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <QrCode className="w-24 h-24 text-gray-900 stroke-[1.5]" />
                    </div>
                    <p className="text-[10.5px] text-gray-400 mt-2">
                      Pindai kode QR ini di konter check-in bandara & lobi hotel
                    </p>
                    <button
                      onClick={() => {
                        showToast('E-Tiket PDF tersimpan ke perangkat');
                        setActiveTicketModal(null);
                      }}
                      className="mt-4 w-full py-3 rounded-full bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 cursor-pointer"
                    >
                      Unduh E-Tiket (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODAL LENGKAP 3: SEMUA KATALOG DESTINASI */}
          {showAllPlacesModal && (
            <div className="absolute inset-0 z-40 bg-[#FAFAFB] flex flex-col animate-in slide-in-from-right duration-200">
              {renderStatusBar(false)}
              <div className="px-6 pt-2 pb-3 flex items-center justify-between border-b border-gray-100 bg-white">
                <button
                  onClick={() => setShowAllPlacesModal(false)}
                  className="w-9 h-9 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-800 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3
                  className="text-base font-bold text-gray-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Semua Destinasi ({allPlaces.length})
                </h3>
                <div className="w-9" />
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-3">
                {allPlaces.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setShowAllPlacesModal(false);
                      openPlaceDetail(item);
                    }}
                    className="bg-white rounded-3xl p-3 shadow-xs flex items-center gap-3.5 cursor-pointer hover:shadow-md transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0EA5E9]">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-0.5 text-xs font-bold text-gray-800">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {item.rating}
                        </span>
                      </div>
                      <h4
                        className="text-[15px] font-bold text-gray-900 truncate mt-1"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {item.country} • {item.duration}
                      </p>
                      <p className="text-xs font-extrabold text-[#0EA5E9] mt-1">
                        {formatIDR(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {renderHomeIndicator()}
            </div>
          )}

          {/* MODAL LENGKAP 4: PENGATURAN DETAIL PROFIL */}
          {activeProfileSheet && (
            <div className="absolute inset-0 z-40 bg-black/45 backdrop-blur-xs flex items-end">
              <div className="bg-white w-full rounded-t-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-200">
                <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {activeProfileSheet === 'payment' && 'Metode Pembayaran'}
                    {activeProfileSheet === 'insurance' && 'Polis Asuransi Perjalanan'}
                    {activeProfileSheet === 'flight' && 'Preferensi Penerbangan'}
                  </h3>
                  <button
                    onClick={() => setActiveProfileSheet(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {activeProfileSheet === 'payment' && (
                  <div className="space-y-2.5">
                    {[
                      { name: 'BCA Virtual Account', desc: 'Otomatis terverifikasi • Bebas biaya admin' },
                      { name: 'QRIS Instan', desc: 'GoPay, OVO, DANA, ShopeePay & Mobile Banking' },
                      { name: 'Visa •••• 4829', desc: 'Kartu Kredit Utama • Berlaku s/d 09/29' }
                    ].map((pm) => {
                      const active = selectedPaymentMethod === pm.name;
                      return (
                        <div
                          key={pm.name}
                          onClick={() => setSelectedPaymentMethod(pm.name)}
                          className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer ${
                            active
                              ? 'bg-sky-50 border-[#0EA5E9]'
                              : 'bg-gray-50 border-gray-100'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-gray-900">{pm.name}</p>
                            <p className="text-[10.5px] text-gray-400">{pm.desc}</p>
                          </div>
                          {active && <Check className="w-4 h-4 text-[#0EA5E9]" />}
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeProfileSheet === 'insurance' && (
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-800">
                        Allianz Global Travel Platinum
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                        AKTIF
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Nomor Polis: <span className="font-bold">ALZ-ID-992041</span>. Melindungi pembatalan perjalanan, keterlambatan bagasi, hingga perlindungan medis internasional hingga Rp 1,5 Miliar.
                    </p>
                  </div>
                )}

                {activeProfileSheet === 'flight' && (
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-gray-700 mb-1.5">Pilihan Kursi Favorit</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['Kursi Jendela (Window)', 'Kursi Lorong (Aisle)'].map((seat) => (
                          <button
                            key={seat}
                            onClick={() => setSeatPreference(seat)}
                            className={`py-2.5 px-3 rounded-xl font-bold border text-[11px] cursor-pointer ${
                              seatPreference === seat
                                ? 'bg-sky-50 border-[#0EA5E9] text-[#0EA5E9]'
                                : 'bg-gray-50 border-gray-100 text-gray-600'
                            }`}
                          >
                            {seat}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1.5">Preferensi Hidangan</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['Halal Standar', 'Vegetarian'].map((meal) => (
                          <button
                            key={meal}
                            onClick={() => setMealPreference(meal)}
                            className={`py-2.5 px-3 rounded-xl font-bold border text-[11px] cursor-pointer ${
                              mealPreference === meal
                                ? 'bg-sky-50 border-[#0EA5E9] text-[#0EA5E9]'
                                : 'bg-gray-50 border-gray-100 text-gray-600'
                            }`}
                          >
                            {meal}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    showToast('Pengaturan profil berhasil disimpan');
                    setActiveProfileSheet(null);
                  }}
                  className="mt-5 w-full py-3.5 rounded-full bg-gradient-to-r from-[#22B0FF] to-[#0095F6] text-white font-semibold text-xs shadow-md cursor-pointer"
                >
                  Simpan & Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
