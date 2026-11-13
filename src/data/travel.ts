import type { TravelPackage } from '../types/travel';

// Currency formatting helpers
export const formatIDR = (amount: number): string => {
  return 'Rp ' + amount.toLocaleString('id-ID');
};

export const formatShortIDR = (amount: number): string => {
  const juta = amount / 1000000;
  return `Rp ${Number.isInteger(juta) ? juta : juta.toFixed(1).replace('.', ',')} Jt`;
};

// --- Data Destinasi Wisata (Bahasa Indonesia & IDR) ---
export const DESTINATIONS: TravelPackage[] = [
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

export const RECOMMENDED_TOURS: TravelPackage[] = [
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
