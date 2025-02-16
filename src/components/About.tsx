
import { Check, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Dedicated expertise in property documentation",
    },
    {
      icon: BookOpen,
      title: "Legal Expert",
      description: "Comprehensive knowledge of property law",
    },
    {
      icon: Users,
      title: "1000+ Clients",
      description: "Successfully processed documentations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            About Ibrahim Shaikh
          </h2>
          <p className="text-text-light font-inter">
            A trusted name in property documentation with a commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-primary-light hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-light font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
            Why Choose Ibrahim Shaikh?
          </h3>
          <ul className="space-y-4">
            {[
              "Expert in property documentation and legal procedures",
              "Personalized attention to each client's needs",
              "Transparent and efficient process handling",
              "Up-to-date with latest property laws and regulations",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="ml-3 text-text-light font-inter">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
