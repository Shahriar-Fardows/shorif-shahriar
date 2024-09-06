import boutPic from '../../assets/about_pic.jpg';

const About = () => {
    return (
        <section className="bg-gray-100  flex items-center justify-center py-40 ">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Image */}
                <div className="flex justify-center">
                    <img
                        src={boutPic}
                        alt="Shahriar "
                        className="rounded-lg shadow-lg w-96 object-cover"
                    />
                </div>

                {/* Right Column: About Text */}
                <div className="text-center md:text-left xl:pr-40">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-7 mb-4">
                        I&apos;m a skilled <span className="font-semibold">Graphic Designer</span> and <span className="font-semibold">UX/UI Designer</span>. My expertise lies in creating clean, user-friendly designs that blend functionality and visual appeal.
                    </p>
                    <p className="text-lg leading-7 mb-4">
                        In addition to graphic design, I have experience in <span className="font-semibold">WordPress development</span>, offering tailored solutions to help businesses create unique, easy-to-navigate websites.
                    </p>

                    <div className=" ">
                        <button className="btn bg-black text-white hover:bg-white border hover:text-black">View My Work</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
