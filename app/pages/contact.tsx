import { Button } from "../components/UI/button";
import { Card, CardContent } from "../components/UI/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Button variant="outline" className="w-full">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  export default Contact;