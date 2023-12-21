import b1 from "../../assets/Images/b1.jpg"
const Benefit = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#ECF9FD]">
  <div className="hero-content flex-col lg:flex-row gap-5">
    <img src={b1} className="w-auto lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Explore Our Community: Who Can Benefit?</h1>
      <h1 className="text-xl font-semibold mt-6">1.Freelancers and Contractors </h1>
      <p className="">Manage your freelance projects effortlessly. Keep track of tasks, deadlines, and client requirements in one centralized platform. Impress your clients with timely deliveries and a transparent workflow.</p>
      <h1 className="text-xl font-semibold mt-6">2.Remote Workers and Digital Nomads </h1>
      <p className="">Clickit supports the flexible work environment, allowing remote teams to collaborate seamlessly. Stay connected, assign tasks, and monitor progress regardless of geographical boundaries.</p>
      <h1 className="text-xl font-semibold mt-6">3.Developers </h1>
      <p className="">Whether you're a seasoned software engineer, a coding enthusiast, or someone venturing into the world of programming, our platform provides a collaborative space to share insights, troubleshoot challenges, and stay updated on the latest tech trends.</p>
      <h1 className="text-xl font-semibold mt-6">4.Corporate Professionals</h1>
      <p className="">For professionals navigating the corporate landscape, our website offers a hub for networking, career advice, and industry discussions. </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Benefit;