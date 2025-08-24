import Header from "@/components/modules/contact/Header";
import ContactInfo from "@/components/modules/contact/ContactInfo";
import ContactForm from "@/components/modules/contact/ContactForm";

const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
