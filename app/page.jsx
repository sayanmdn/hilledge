'use client';

import Link from 'next/link';
import { Card } from 'components/card';
import { useState } from 'react';

export default function Page() {
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
                            <button 
                                onClick={() => setShowContactModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <p className="font-semibold text-gray-700 mb-2">📞 Call us at:</p>
                                <div className="space-y-2">
                                    <a href="tel:01169270876" className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-blue-800">
                                        📱 01169270876
                                    </a>
                                    <a href="tel:+917047087672" className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-blue-800">
                                        📱 +91 7047087672
                                    </a>
                                    <a href="tel:9429693871" className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-blue-800">
                                        📱 +91 9429693871
                                    </a>
                                    <a href="tel:7001137041" className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-blue-800">
                                        📱 +91 7001137041
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button 
                                onClick={() => setShowContactModal(false)}
                                className="btn bg-blue-600 text-white hover:bg-blue-700 px-6"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Hero Section */}
            <section className="text-center">
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">🏔️ Pathfinders Nest Hostel</h1>
                    <p className="text-xl text-gray-600 mb-4">Darjeeling, West Bengal</p>
                    <p className="text-lg text-gray-700">Your gateway to the Himalayas</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://www.booking.com/Share-qaH8S9" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700 sm:min-w-48">
                        Book Your Stay
                    </Link>
                    <button onClick={() => setShowContactModal(true)} className="btn btn-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 sm:min-w-48">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Welcome Message */}
            <section>
                <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-white mb-4">Welcome to Pathfinders Nest Hostel</h1>
                <p className="text-lg text-gray-200">Your perfect base camp for exploring the enchanting hills of Darjeeling. Experience comfort, convenience, and warm hospitality in the heart of the Himalayas.</p>
                </div>
            </section>

            {/* Key Highlights Cards */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="🏠 Comfortable Rooms">
                    <p>Private bathrooms, free WiFi, and all essential amenities for a pleasant stay.</p>
                </Card>
                
                <Card title="🎯 Prime Location">
                    <p>Just 10 minutes walk to Mall Road and close to major attractions.</p>
                </Card>
                
                <Card title="🍳 Daily Breakfast">
                    <p>À la carte breakfast with variety of options to start your day right.</p>
                </Card>
                
                <Card title="⭐ Highly Rated">
                    <p>Praised for attentive staff, great location, and spotless cleanliness.</p>
                </Card>
            </section>

            {/* Location Details */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <div className="text-gray-800">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Prime Location in Darjeeling</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>10 minutes walk</strong> to Mall Road - the heart of Darjeeling's shopping and dining</li>
                        <li><strong>Walking distance</strong> to Himalayan Mountaineering Institute & Zoological Park</li>
                        <li><strong>Close proximity</strong> to Mahakal Mandir and Japanese Peace Pagoda</li>
                        <li><strong>11 km</strong> from Tiger Hill - famous for sunrise views over Kanchenjunga</li>
                        <li><strong>67 km</strong> from Bagdogra International Airport</li>
                    </ul>
                </div>
            </section>

            {/* Detailed Facilities */}
            <section>
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">🛏️ Comfortable Accommodations</h3>
                            <p className="text-gray-600">Private bathrooms with baths and showers, complimentary slippers, free WiFi throughout the property, and comfortable beds with essential amenities for a restful stay.</p>
                        </div>
                        
                        <div className="p-4 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">🎮 Exceptional Facilities</h3>
                            <p className="text-gray-600">Relax in our cozy lounge, enjoy games in our dedicated games room, and take advantage of secure luggage storage for your convenience.</p>
                        </div>
                        
                        <div className="p-4 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">🍳 Delicious Breakfast</h3>
                            <p className="text-gray-600">Start your day right with our à la carte breakfast served daily, featuring a variety of options to suit all tastes and dietary preferences.</p>
                        </div>
                        
                        <div className="p-4 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">⭐ Guest Satisfaction</h3>
                            <p className="text-gray-600">Highly rated by travelers for our attentive staff, excellent location, and immaculate room cleanliness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Experience Darjeeling?</h2>
                <p className="text-lg mb-6">Book your stay at Pathfinders Nest Hostel and discover the magic of the Himalayas</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://www.booking.com/Share-qaH8S9" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100 sm:min-w-48">
                        View Rooms
                    </Link>
                    <Link href="https://www.instagram.com/pathfindersnesthostel/" target="_blank" rel="noopener noreferrer" className="btn btn-lg border-2 border-white text-white hover:bg-blue-700 sm:min-w-48">
                        Photo Gallery
                    </Link>
                </div>
            </section>

            {/* Contact Information */}
            <section className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">📍 Location</h3>
                    <p className="text-gray-600">Darjeeling, West Bengal<br />10 min walk to Mall Road</p>
                </div>
                
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">✈️ Airport</h3>
                    <p className="text-gray-600">67 km from<br />Bagdogra International Airport</p>
                </div>
                
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">🏔️ Tiger Hill</h3>
                    <p className="text-gray-600">11 km away<br />Famous sunrise viewpoint</p>
                </div>
            </section>
        </div>
    );
}