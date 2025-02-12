const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-blue-600">About ShelfVista</h1>
                    <p className="mt-2 text-lg text-gray-600">Empowering Knowledge, One Book at a Time</p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        ShelfVista is a modern digital library platform dedicated to making knowledge accessible to everyone. We offer an extensive collection of books, ranging from fiction to academic materials, available in both printed and digital formats. Our mission is to create a seamless reading experience for book lovers, students, and researchers alike.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To provide easy access to a vast collection of books and resources, fostering a love for reading and learning in people of all ages.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To become a leading digital and physical library platform that connects knowledge seekers with valuable literary resources across the world.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
                    <p className="text-gray-600 mt-2">A group of passionate individuals dedicated to enhancing your reading experience.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <img src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133876.jpg?t=st=1739356139~exp=1739359739~hmac=1dd5d924d37f2df6534ccc316782a6fee40d7df4360aa6d9243a2afa76031afb&w=360"
                                alt="Founder"
                                className="mx-auto w-32 h-32 object-cover rounded-full mb-3"
                            />
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-600 text-sm">Founder & CEO</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <img src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793895.jpg?t=st=1739356200~exp=1739359800~hmac=abb42cedd9e08ff490acc59ad4b067e3b2166259630f8198e6a81462e5836466&w=360"
                                alt="CTO"
                                className="mx-auto w-32 h-32 object-cover rounded-full mb-3"
                            />
                            <h3 className="text-lg font-semibold">Jane Smith</h3>
                            <p className="text-gray-600 text-sm">Chief Technology Officer</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <img src="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?t=st=1739356235~exp=1739359835~hmac=001cb23407e0863fd88e49d5b27cf55f0ff864a4e1f29f8570543193ca072c92&w=740"
                                alt="Librarian"
                                className="mx-auto w-32 h-32 object-cover rounded-full mb-3"
                            />
                            <h3 className="text-lg font-semibold">Emily Brown</h3>
                            <p className="text-gray-600 text-sm">Head Librarian</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;