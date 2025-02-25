const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "StudyFuel helped me land my first web development job!",
      image: "/images/john.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "The courses are well-structured and easy to follow.",
      image: "/images/jane.jpg",
    },
    {
      name: "Mike Johnson",
      feedback: "I love the coding challenges and hands-on projects!",
      image: "/images/mike.jpg",
    },
    {
      name: "Sarah Brown",
      feedback: "Great platform for anyone looking to learn web development.",
      image: "/images/sarah.jpg",
    },
    {
      name: "David Lee",
      feedback: "The community is so supportive and helpful.",
      image: "/images/david.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full border-4 border-indigo-500 mb-4"
            />
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <h4 className="mt-4 text-lg font-semibold text-indigo-600">
              {testimonial.name}
            </h4>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
