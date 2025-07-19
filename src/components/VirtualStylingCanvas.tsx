import React, { useState } from 'react'
import { RotateCcw, Save, Share2, Sparkles } from 'lucide-react'

interface ClothingItem {
  id: string
  name: string
  category: 'top' | 'bottom' | 'overlay' | 'accessory'
  image: string
  zIndex: number
}

const clothingItems: ClothingItem[] = [
  {
    id: 'blouse_gold',
    name: 'Golden Blouse',
    category: 'top',
    image: '/assets/top_blouse_gold.png',
    zIndex: 2
  },
  {
    id: 'lehenga_red',
    name: 'Red Lehenga',
    category: 'bottom',
    image: '/assets/bottom_lehenga_red.png',
    zIndex: 1
  },
  {
    id: 'saree_drape',
    name: 'Saree Drape',
    category: 'overlay',
    image: '/assets/overlay_saree_drape.png',
    zIndex: 3
  },
  {
    id: 'jhumka_earrings',
    name: 'Jhumka Earrings',
    category: 'accessory',
    image: '/assets/accessory_earrings_jhumka.png',
    zIndex: 4
  }
]

export default function VirtualStylingCanvas() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [rotation, setRotation] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const clearAll = () => {
    setSelectedItems([])
  }

  const rotateAvatar = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const filteredItems = activeCategory === 'all' 
    ? clothingItems 
    : clothingItems.filter(item => item.category === activeCategory)

  const selectedClothingItems = clothingItems.filter(item => selectedItems.includes(item.id))

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pastel-yellow/20 to-cream p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold text-maroon mb-2">
            Virtual Styling Canvas
          </h1>
          <p className="text-maroon/70 text-lg">
            Mix & match traditional Indian outfits on your avatar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Clothing Selection Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pastel-yellow/30">
              <h2 className="text-2xl font-playfair font-semibold text-maroon mb-4">
                Choose Your Style
              </h2>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['all', 'top', 'bottom', 'overlay', 'accessory'].map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-maroon text-white shadow-md'
                        : 'bg-pastel-yellow/30 text-maroon hover:bg-pastel-yellow/50'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Clothing Items Grid */}
              <div className="grid grid-cols-2 gap-4">
                {filteredItems.map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedItems.includes(item.id)
                        ? 'ring-4 ring-maroon shadow-lg scale-105'
                        : 'hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <div className="aspect-square bg-gradient-to-br from-pastel-yellow/20 to-white p-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-pastel-yellow/30 rounded-lg flex items-center justify-center">
                              <span class="text-maroon/60 text-sm">${item.name}</span>
                            </div>
                          `
                        }}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon/90 to-transparent p-3">
                      <p className="text-white text-sm font-medium">{item.name}</p>
                    </div>
                    {selectedItems.includes(item.id) && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-maroon rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pastel-yellow/30">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={clearAll}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-pastel-yellow/30 text-maroon rounded-xl hover:bg-pastel-yellow/50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear All
                </button>
                <button
                  onClick={rotateAvatar}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-maroon text-white rounded-xl hover:bg-maroon/90 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Rotate 360°
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-pastel-yellow text-maroon rounded-xl hover:bg-pastel-yellow/80 transition-colors">
                  <Save className="w-4 h-4" />
                  Save Look
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-maroon text-white rounded-xl hover:bg-maroon/90 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Avatar Display */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pastel-yellow/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-semibold text-maroon mb-2">
                  Your Virtual Mirror
                </h3>
                <p className="text-maroon/70">
                  Selected items: {selectedItems.length}
                </p>
              </div>

              {/* Avatar Container */}
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-pastel-yellow/10 to-pastel-yellow/30 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `rotateY(${rotation}deg)` }}
                >
                  {/* Base Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/assets/avatar_medium_skin.png"
                      alt="Avatar"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.parentElement!.innerHTML = `
                          <div class="w-48 h-72 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full mx-auto flex items-center justify-center">
                            <span class="text-maroon/60">Avatar</span>
                          </div>
                        `
                      }}
                    />
                  </div>

                  {/* Layered Clothing Items */}
                  {selectedClothingItems
                    .sort((a, b) => a.zIndex - b.zIndex)
                    .map(item => (
                      <div
                        key={item.id}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ zIndex: item.zIndex }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-pastel-yellow/40 rounded-full"></div>
                <div className="absolute top-8 right-6 w-4 h-4 bg-maroon/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-pastel-yellow/50 rounded-full"></div>
              </div>

              {/* Style Summary */}
              {selectedItems.length > 0 && (
                <div className="mt-6 p-4 bg-pastel-yellow/20 rounded-xl">
                  <h4 className="font-semibold text-maroon mb-2">Current Look:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClothingItems.map(item => (
                      <span
                        key={item.id}
                        className="px-3 py-1 bg-white/60 text-maroon text-sm rounded-full"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}