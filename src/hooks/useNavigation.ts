import { useMemo, useState } from 'react';
import { DESTINATIONS, RECOMMENDED_TOURS } from '../data/travel';
import type { TravelPackage } from '../types/travel';

export function useNavigation() {
  const [activeScreen, setActiveScreen] = useState('onboarding');
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedCategory, setSelectedCategory] = useState('Populer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<TravelPackage>(DESTINATIONS[0]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['santorini', 'banff']);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [selectedDateSlot, setSelectedDateSlot] = useState(0);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [maxBudget, setMaxBudget] = useState(30000000);
  const [showAllPlacesModal, setShowAllPlacesModal] = useState(false);

  const filteredDestinations = useMemo(() => DESTINATIONS.filter((place) => {
    const matchesCategory = selectedCategory === 'Semua' || place.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = place.name.toLowerCase().includes(query) || place.country.toLowerCase().includes(query);
    return matchesCategory && matchesSearch && place.price <= maxBudget;
  }), [selectedCategory, searchQuery, maxBudget]);

  const filteredRecommended = useMemo(() => RECOMMENDED_TOURS.filter((tour) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = tour.name.toLowerCase().includes(query) || tour.country.toLowerCase().includes(query);
    return matchesSearch && tour.price <= maxBudget;
  }), [searchQuery, maxBudget]);

  const allPlaces = useMemo(() => [...DESTINATIONS, ...RECOMMENDED_TOURS], []);
  const savedPlaces = useMemo(
    () => allPlaces.filter((place) => bookmarkedIds.includes(place.id)),
    [allPlaces, bookmarkedIds]
  );

  return {
    activeScreen, setActiveScreen, activeTab, setActiveTab,
    selectedCategory, setSelectedCategory, searchQuery, setSearchQuery,
    selectedPlace, setSelectedPlace, bookmarkedIds, setBookmarkedIds,
    isDescExpanded, setIsDescExpanded, selectedDateSlot, setSelectedDateSlot,
    showFilterModal, setShowFilterModal, maxBudget, setMaxBudget,
    showAllPlacesModal, setShowAllPlacesModal,
    filteredDestinations, filteredRecommended, allPlaces, savedPlaces
  };
}
