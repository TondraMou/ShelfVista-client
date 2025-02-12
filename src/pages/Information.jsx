

const Information = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 mb-10 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Library Information
          </h1>
    
          {/* Contact Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Contact Information</h2>
            <p className="text-gray-600 mt-2">
              <strong>Address:</strong> 123 Library Lane, Knowledge City
            </p>
            <p className="text-gray-600"><strong>Phone Number:</strong> +123-456-7890</p>
            <p className="text-gray-600"><strong>Fax Number:</strong> (021) 5711144</p>
          </div>
    
          {/* Opening Hours */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Opening Hours</h2>
            <ul className="text-gray-600 mt-2">
              <li><strong>Monday - Friday:</strong></li>
              <li>Open: 08.00 AM</li>
              <li>Break: 12.00 - 01.00 PM</li>
              <li>Close: 08.00 PM</li>
              <li className="mt-2"><strong>Saturday:</strong></li>
              <li>Open: 08.00 AM</li>
              <li>Break: 12.00 - 01.00 PM</li>
              <li>Close: 05.00 PM</li>
            </ul>
          </div>
    
          {/* Collections */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Collections</h2>
            <p className="text-gray-600 mt-2">
              We have a wide range of collections, from fiction to science materials, including printed materials and digital collections. We also have daily serial publications like newspapers and monthly serials such as magazines.
            </p>
          </div>
    
          {/* Library Membership */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Library Membership</h2>
            <p className="text-gray-600 mt-2">
              To borrow our library collections, you must first become a library member. There are terms and conditions that you must follow to ensure a smooth borrowing experience.
            </p>
          </div>
        </div>
      );
    };

export default Information;