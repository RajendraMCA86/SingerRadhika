const GallerySection = () => {
  const galleries = [
    {
      id: 1,
      image:
        "./public/assets/gallery1.jpg",
      title: "Honored",
      description:"Live midnight Bhajan Sandhya for Shree Kkatu shyam ji",
    },
    {
      id: 2,
      image:
        "./public/assets/galery2.jpg",
      title: "Stage Song",
      description:"On stage performance for shree krishna janmasthami",
    },
    {
      id: 3,
      image:
        "./public/assets/gallery3.jpg",
      title: "Honor of Guest",
      description:"Baba Mahankal Shahi Sawari ",
    },
    {
      id: 4,
      image:
        "./public/assets/gallery4.jpg",
      title: "Practice session",
      description:"Capturing the moments during practice in early days"
    },
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center p-10 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Visual Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleries.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-84 object-scale-down transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-300 ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GallerySection;
