import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const nearbyLandmarks = [
    {
      name: "Akurdi Railway Station",
      distance: "2.5 km",
      icon: "Train",
      type: "Transport"
    },
    {
      name: "Pune University",
      distance: "8.2 km",
      icon: "GraduationCap",
      type: "Education"
    },
    {
      name: "Chinchwad Station",
      distance: "3.1 km",
      icon: "Train",
      type: "Transport"
    },
    {
      name: "Phoenix Mall",
      distance: "4.5 km",
      icon: "ShoppingBag",
      type: "Shopping"
    },
    {
      name: "Nigdi Bus Stand",
      distance: "1.8 km",
      icon: "Bus",
      type: "Transport"
    },
    {
      name: "Bhosari MIDC",
      distance: "6.3 km",
      icon: "Building",
      type: "Industrial"
    }
  ];

  const transportOptions = [
    {
      mode: "PMPML Bus",
      routes: ["Route 106, 107, 108"],
      icon: "Bus",
      color: "text-blue-600"
    },
    {
      mode: "Auto Rickshaw",
      routes: ["Available 24/7"],
      icon: "Car",
      color: "text-green-600"
    },
    {
      mode: "Private Vehicle",
      routes: ["Ample Parking Available"],
      icon: "ParkingCircle",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Find Us on Campus
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Located in the heart of Akurdi, Pune with excellent connectivity and nearby amenities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="DYPCET Campus Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=18.6298,73.7997&z=15&output=embed"
                className="border-0"
              ></iframe>
            </div>
            
            {/* Transport Options */}
            <div className="mt-6 bg-surface rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Icon name="Navigation" size={24} className="text-primary" />
                How to Reach
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transportOptions?.map((transport, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className={`p-2 rounded-lg bg-gray-50 ${transport?.color}`}>
                      <Icon name={transport?.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">{transport?.mode}</h4>
                      <p className="text-sm text-text-secondary mt-1">
                        {transport?.routes?.[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="space-y-6">
            <div className="bg-surface rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-secondary" />
                Nearby Landmarks
              </h3>
              
              <div className="space-y-3">
                {nearbyLandmarks?.map((landmark, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-50 text-gray-600">
                        <Icon name={landmark?.icon} size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary text-sm">{landmark?.name}</p>
                        <p className="text-xs text-text-secondary">{landmark?.type}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">{landmark?.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Icon name="Navigation" size={20} />
                  <span className="text-sm font-medium">Get Directions</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Icon name="Phone" size={20} />
                  <span className="text-sm font-medium">Call Campus</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Icon name="Calendar" size={20} />
                  <span className="text-sm font-medium">Schedule Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;