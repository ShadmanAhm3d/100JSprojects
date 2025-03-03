import React, { useState } from "react";

const Jtest = () => {
  // Sample data for cards
  const [cards] = useState([
    {
      id: 1,
      title: "Getting Started",
      description: "Learn how to use our platform with this quick start guide.",
      imageUrl: "/api/placeholder/400/200",
      category: "Guide"
    },
    {
      id: 2,
      title: "New Features",
      description: "Explore the latest updates and improvements to our platform.",
      imageUrl: "/api/placeholder/400/200",
      category: "Updates"
    },
    {
      id: 3,
      title: "Community Highlights",
      description: "See what our community members have been creating.",
      imageUrl: "/api/placeholder/400/200",
      category: "Community"
    }
  ]);

  // Sample data for feed
  const [feedItems] = useState([
    {
      id: 1,
      author: "Jane Smith",
      avatar: "/api/placeholder/40/40",
      content: "Just published my first project! Check it out and let me know what you think.",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: "John Doe",
      avatar: "/api/placeholder/40/40",
      content: "Looking for collaborators on my new open-source project. DM me if interested!",
      timestamp: "4 hours ago",
      likes: 15,
      comments: 8
    },
    {
      id: 3,
      author: "Alex Johnson",
      avatar: "/api/placeholder/40/40",
      content: "Just released a tutorial on building responsive layouts. Link in bio!",
      timestamp: "6 hours ago",
      likes: 42,
      comments: 12
    },
    {
      id: 4,
      author: "Sam Taylor",
      avatar: "/api/placeholder/40/40",
      content: "What tools are people using for state management these days? Looking for recommendations.",
      timestamp: "8 hours ago",
      likes: 10,
      comments: 22
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left column - Featured Cards */}
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Featured Content</h2>
              <div className="space-y-4">
                {cards.map((card) => (
                  <div key={card.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <img src={card.imageUrl} alt={card.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {card.category}
                      </span>
                      <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                      <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium">
                        Learn more →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Feed */}
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
              <div className="bg-white rounded-lg shadow">
                {/* New post input */}
                <div className="p-4 border-b">
                  <div className="flex items-start space-x-4">
                    <img src="/api/placeholder/40/40" alt="Your avatar" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <textarea
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's on your mind?"
                        rows="2"
                      />
                      <div className="mt-2 flex justify-end">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feed items */}
                <div className="divide-y">
                  {feedItems.map((item) => (
                    <div key={item.id} className="p-4">
                      <div className="flex space-x-3">
                        <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{item.author}</h3>
                            <span className="text-sm text-gray-500">{item.timestamp}</span>
                          </div>
                          <p className="mt-1">{item.content}</p>
                          <div className="mt-2 flex items-center space-x-4">
                            <button className="flex items-center text-gray-500 hover:text-blue-600">
                              <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                ></path>
                              </svg>
                              {item.likes}
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-blue-600">
                              <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              {item.comments}
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-blue-600">
                              <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                              </svg>
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jtest;
