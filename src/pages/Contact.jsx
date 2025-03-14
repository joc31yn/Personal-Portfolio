import NavBar from "@/components/NavBar";
import ContactLogos from '@/components/ContactLogos';
import Swal from 'sweetalert2';
import Image from 'next/image';
import cool from '@/imgs/cool.jpg';

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "652057f0-ac36-4344-b87c-3894f2c62bbe");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Thank you for your message!",
                icon: "success",
                confirmButtonColor: "#2868EE",
            });
        }
    };

    return (
        <>
            <div className="w-full h-full">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <NavBar />
                {/* <div className="text-center">
                <h1>Hey feel free to <span>Contact Me</span></h1>
                <h2>I would love to meet you!</h2>
            </div> */}
                {/* w-56 sm:w-72 lg:w-96 */}
                <div className="flex flex-row items-center">
                    <div className="flex flex-col w-1/3 max-w-lg px-[2%] min-w-56">
                        <form onSubmit={onSubmit} className="w-full bg-blue-100 shadow-[0_0_1rem_rgba(0,0,0,0.05)] py-3.5 px-5 rounded-lg drop-shadow-xl pb-[5%]">
                            <h2 className="font-bold text-center text-2xl">Contact Form</h2>
                            <div className="my-3">
                                <label className="font-semibold">Full Name</label>
                                <input type="text" name="name" className="w-full h-9 my-2 py-4 px-2.5 transparent border-0 rounded-md border-black outline-none text-charcoal" placeholder="Enter your name" required />
                            </div>
                            <div className="my-3">
                                <label className="font-semibold">Email</label>
                                <input type="text" name="email" className="w-full h-9 my-2 py-4 px-2.5 transparent border-0 rounded-md border-black outline-none text-charcoal" placeholder="Enter your email" required />
                            </div>
                            <div className="my-3">
                                <label className="font-semibold">Message</label>
                                <textarea name="message" className="w-full h-28 sm:h-40 resize-none my-2 py-4 px-2.5 transparent border-0 rounded-md border-black outline-none text-charcoal" placeholder="Enter your message!" required></textarea>
                            </div>
                            <button type="submit" className="mt-3 mb-[10%] py-1.5 px-2.5 bg-indigo-500 rounded-md text-white font-semibold border-none hover:bg-indigo-700 cursor-pointer">Send</button>
                            <ContactLogos />
                        </form>
                    </div>
                    <Image src ={cool} className = "rounded-xl h-full" alt = "cool image" />
                </div>
            </div>
        </>
    );
}

export default Contact;