import MaxWidth from "@/components/MaxWidth";
import NMTTextLogo from "@/components/NMTTextLogo";
import React from "react";

const Aboutus = () => {
  return (
    <section id="about-us">
      <MaxWidth className="p-4">
        <div className="bg-gray-50 py-12 rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-nmt font-semibold tracking-wide uppercase">
                About Us
              </h2>
              <h1 className="flex items gap-2 justify-center mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900">
                Welcome to <NMTTextLogo />
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We transform innovative ideas into impactful digital solutions.
                With a wealth of experience in delivering cutting-edge
                technology, we are your trusted partner for businesses seeking
                dynamic software that enhances growth, efficiency, and security.
              </p>
            </div>
            <div className="mt-10">
              <p className="max-w-4xl mx-auto text-lg text-gray-700">
                Our story began with a clear mission: to provide organizations
                with custom-made software solutions that foster innovation and
                drive success. Today, we’re a full-service development firm,
                committed to turning your vision into scalable products designed
                for long-term success.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Expertise</h2>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Web Application Development
              </h3>
              <p className="mt-2 text-gray-600">
                We design and build reliable, scalable web applications tailored
                to your business objectives. Whether you need a client-facing
                solution, a complex management system, or a seamless e-commerce
                platform, our web apps are crafted to deliver intuitive user
                experiences and high performance in today’s digital world.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                2. Mobile Application Development
              </h3>
              <p className="mt-2 text-gray-600">
                In an era where mobile engagement is essential, we create apps
                that blend functionality with flawless design for iOS and
                Android devices. Our mobile development process, from planning
                through deployment, focuses on creating user-friendly,
                innovative applications that deliver value and engagement.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                3. Internet of Things (IoT)
              </h3>
              <p className="mt-2 text-gray-600">
                As businesses embrace connected technology, our IoT services
                provide smart solutions for seamless device interaction and
                data-driven insights. We develop systems that allow businesses
                to collect and analyze real-time data from smart devices,
                improving efficiency, automation, and decision-making.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                4. Server Integration Services
              </h3>
              <p className="mt-2 text-gray-600">
                We simplify complex server integrations, ensuring your
                infrastructure is secure, scalable, and finely tuned for peak
                performance. From cloud services and databases to third-party
                API integrations, we create a smooth, interconnected environment
                that maximizes your system’s potential.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                5. Ongoing Maintenance and Security
              </h3>
              <p className="mt-2 text-gray-600">
                Maintaining the reliability and security of your applications
                and servers is crucial in the fast-evolving digital landscape.
                Our maintenance services ensure systems remain updated and
                functional, while our security protocols safeguard against
                threats. We proactively monitor and address issues to keep your
                operations uninterrupted and secure.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Why Partner with Us?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              At{" "}
              <span className="bg-nmt px-1 rounded text-white font-bold">
                NMT
              </span>{" "}
              <b>Solutions</b>, our focus extends beyond just delivering
              technical solutions. We take the time to understand your goals and
              challenges, collaborating closely to create solutions that make a
              meaningful impact. Our team of experienced developers, engineers,
              and strategists is dedicated to providing top-quality service and
              support.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Innovation:</strong> We continuously advance our skills
                and stay up-to-date with the latest technologies to offer you
                the best solutions.
              </li>
              <li>
                <strong>Quality:</strong> Every solution we deliver is designed
                for reliability, scalability, and top-notch performance.
              </li>
              <li>
                <strong>Collaboration:</strong> We partner with you to
                understand your needs and deliver solutions that exceed your
                expectations.
              </li>
              <li>
                <strong>Security & Trust:</strong> We prioritize the protection
                of your data and the reliability of your systems with robust
                security measures.
              </li>
            </ul>
            <p className="mt-4 text-lg text-gray-700">
              Let’s work together to bring your ideas to life. Whether you need
              a new digital product, smart IoT solutions, or comprehensive
              system security,{" "}
              <span className="bg-nmt px-1 rounded text-white font-bold">
                NMT
              </span>{" "}
              <b>Solutions</b> is here to help turn your vision into reality.
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Aboutus;
