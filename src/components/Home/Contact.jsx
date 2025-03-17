import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import AdComponent from "../AdSense/AdComponent";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phoneNumber, message } = formData;
        const whatsappNumber = "919096352312"; // Without '+'

        const whatsappMessage = `Hello, I am ${firstName} ${lastName}.\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div id="contact" className="bg-white px-4 md:px-16 py-8">
            <div className="w-full h-[2px] bg-black"></div>
            <h1 className="text-2xl md:text-3xl font-bold px-2  mt-6">CONTACT US</h1>

            <div className="max-w-7xl mx-auto px-3 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: Form */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                            Send us a Message
                        </h2>
                        <Card className="p-6">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <Input
                                            required
                                            type="text"
                                            placeholder="John"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <Input
                                            required
                                            type="text"
                                            placeholder="Doe"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="+91 123 456 7890"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <Textarea
                                        required
                                        placeholder="How can we help you?"
                                        className="h-32"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    className="w-full h-[36px] bg-[#ffd838] rounded-sm hover:bg-[#B39362] text-black hover:text-black transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                                {success && <p className="text-green-600 mt-2">Message sent successfully!</p>}
                                {error && <p className="text-red-600 mt-2">Error: {error}</p>}
                            </form>
                        </Card>
                    </div>

                    {/* Right: Contact Info */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            {[  
                                {
                                    icon: <MapPin className="h-6 w-6 text-[#C5A572] mr-4" />,
                                    title: "Address",
                                    text: "Gat no.263, MIDC Rd, near to a Raymond Fasteners India Pvt. Ltd., near Mercedes Benz, Phase III, Industrial Area,Chakan, Pune, Maharashtra 410501, India",
                                },
                                {
                                    icon: <Phone className="h-6 w-6 text-[#C5A572] mr-4" />,
                                    title: "Phone",
                                    text: "+91 9096352312",
                                },
                                {
                                    icon: <Mail className="h-6 w-6 text-[#C5A572] mr-4" />,
                                    title: "Email",
                                    text: "info.indumove.engg@gmail.com",
                                },
                                {
                                    icon: <Clock className="h-6 w-6 text-[#C5A572] mr-4" />,
                                    title: "Working Hours",
                                    text: "Monday - Saturday: 9:00 AM - 5:00 PM\nEmergency: 24/7",
                                },
                            ].map((item, index) => (
                                <Card key={index} className="p-6 text-sm flex items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        {/* <AdComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
