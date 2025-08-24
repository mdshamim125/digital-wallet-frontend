
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "John Doe",
    role: "Startup Founder",
    review: "This platform helped me hire top talent quickly. Highly recommended!",
  },
  {
    name: "Sarah Lee",
    role: "Project Manager",
    review: "A smooth experience from start to finish. Love the UI & features!",
  },
  {
    name: "Ali Khan",
    role: "Freelancer",
    review: "I found multiple projects here. It boosted my career growth.",
  },
];

export default function Testimonials() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Card
              key={i}
              className="shadow-md rounded-2xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                  “{review.review}”
                </p>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {review.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
