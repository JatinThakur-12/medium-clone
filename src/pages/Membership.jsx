import React,{useState, useEffect} from 'react'
import { Footer, Logo, MembershipHero, MembershipSection, MembershipBenefits, UserTestimonial, } from '../components'
import { Link, useNavigate } from 'react-router-dom'

function Membership() {
    const navigate = useNavigate();

    // hero data
    const dataSet = [
        {
            bgImageSrc: "/planet.jpeg",
            content: "Ai the future of work: What stays 100% human",
            userAvatarSrc: "/35.jpg",
            userName: "Kurtis Pikes",
            userDesignation: "Author of ",
            userDesignationDetail: "make talent in yourself",
            rgb: "252,132,50",
        },
        {
            bgImageSrc: "/blueImage.jpeg",
            content: "Don't Just Set Goals Build Systems.",
            userAvatarSrc: "/75.jpg",
            userName: "David Rodriguez",
            userDesignation: "Author of ",
            userDesignationDetail: "Find Your Purpose",
            rgb: "34,200,216",
        },
        {
            bgImageSrc: "/yellowScene.jpeg",
            content: "Express yourself through creativity.",
            userAvatarSrc: "/82.jpg",
            userName: "Lauren Mitchell",
            userDesignation: "Author of ",
            userDesignationDetail: "Unleash Your Creativity",
            rgb: "244,225,77",
        },
        {
            bgImageSrc: "/nightStreet1.jpeg",
            content: "The Power of Persistence knows no bounds.",
            userAvatarSrc: "/21.jpg",
            userName: "Markus Adams",
            userDesignation: "Author of ",
            userDesignationDetail: "make talent in yourself",
            rgb: "208,208,208",
        },
        {
            bgImageSrc: "/garden.jpeg",
            content: "The Case Of Reforestion Of Our City.",
            userAvatarSrc: "/60.jpg",
            userName: "Michael Carter",
            userDesignation: "Author of ",
            userDesignationDetail: "Mastering Mindfulness",
            rgb: "178,214,141",
        },
    ]
    // Membership benefit data
    const membershipBenefits = [
        {
            heading: "Reward writers",
            content: "Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.",
        },
        {
            heading: "Unlock every story",
            content: "Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.",
        },
        {
            heading: "Enhance your reading experience",
            content: "Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.",
        },
        {
            heading: "Elevate your writing",
            content: "Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.",
        },
        {
            heading: "Support a mission that matters",
            content: "Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.",
        },
    ]
    // Testimonial Data
    const testmonialData = [
        {
            imgSrc: "https://media.licdn.com/dms/image/C5103AQFsEjJ7EDrdXw/profile-displayphoto-shrink_400_400/0/1517591992557?e=2147483647&v=beta&t=U4yUatI7jAj2Hh_AaI_BtHGu2PAay1muNMJqdASaT_0",
            testimonial: "In the world of social media, the easy route often promotes the cheapest, tackiest, and lowest-effort content. However, Medium stands apart. Here, you encounter content that elevates your intellect—a refreshing departure from the mundane. As a reader and writer, I appreciate that distinctive quality.",
            name: "Anthony E. Stark",
            profession: "CEO and Chairmen of Strak Industries and Medium member."
        },
        {
            imgSrc: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bruce-Banner.The-Incredible-Hulk.webp",
            testimonial: "Medium, a true game-changer. Among my many subscriptions, it quickly became the most valued. The cost is negligible compared to the immense value it consistently delivers month after month. A transformational investment in knowledge.",
            name: "Dr. Bruce Banner",
            profession: "Scientist and Nuclear physicist at Culver University, Virginia and Medium member."
        },
        {
            imgSrc: "https://3.bp.blogspot.com/-DCGN-EhmFro/W7-pFiSV8iI/AAAAAAAALng/2TahHX8i5M8zU9iBtJFJDIchCv7oIbuOQCLcBGAs/s1600/maxresdefault.jpg",
            testimonial: "For tech enthusiasts, Medium membership unveils a treasure trove of high-quality articles. The cost? A mere fraction of one good tech book. Choose between one book or unlocking countless insights on Medium—my career's best investment.",
            name: "Dr. Jane Foster",
            profession: "Astrophysicist Consultant for S.H.I.E.L.D. and Medium member."
        },
    ]

    const [currentData, setcurrentData] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcurrentData(prevIndex => (prevIndex + 1) % dataSet.length);
        }, 7000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <MembershipHero data={dataSet[currentData]}/>

            <MembershipSection sectionHeading="Why Membership?">
                {
                    membershipBenefits.map((data, index) => (
                        <MembershipBenefits heading={data.heading} content={data.content} key={index} />
                    ))
                }
            </MembershipSection>

            <MembershipSection sectionHeading="What members are saying">
                {
                    testmonialData.map((data, index) => (
                        <UserTestimonial key={index} name={data.name} imageSrc={data.imgSrc} profession={data.profession} testimonial={data.testimonial} />
                    ))
                }
            </MembershipSection>

            <div className='flex flex-col py-20 px-8 gap-12 border-b border-black items-center transition-all' style={{ backgroundColor: `rgba(${dataSet[currentData].rgb},0.4)`}}>
                <div className='font-medium lg:max-w-[735px] tracking-tight'>
                    <h2 className='fss text-5xl sm:text-7xl sticky top-40 text-center'>Unlock a world of wisdom</h2>
                </div>
                <button
                    className={`tracking-normal text-[13px] font-semibold md:inline-block px-4 py-2 leading-relaxed rounded-full text-white bg-[#191919] hover:bg-black duration-100`}
                    onClick={() => navigate("/signup")}> 
                    Get started
                </button>
            </div>

            <Footer />
        </>
    )
}

export default Membership