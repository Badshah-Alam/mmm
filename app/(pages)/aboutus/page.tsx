"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { BsArrowRightSquareFill } from "react-icons/bs";

const AboutUs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleAnswer = (id: string) => {
    setVisibleAnswer((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-8 md:gap-6 mt-5">
        {/* Sidebar */}
        
        <div className="col-span-3 ml-4 md:ml-8 lg:ml-16 pr-4 md:px-0">
          <nav className="sticky top-16 flex flex-col justify-center pt-6 gap-2 mb-6">
            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#about-us"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                About us
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#our-trust-and-safety-principles"
                className="block text-gray-800 font-medium hover:text-orange-500"
                aria-current="page"
              >
                Our Trust & Safety principles
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-we-enforce-the-rules"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How we enforce the rules
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-our-Content-Moderation-team-works"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How our Content Moderation team works
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-our-Dispute-Resolution-team-works"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How our Dispute Resolution team works
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-we-prevent-scam"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How we prevent scam
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-we-prevent-deception"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How we prevent deception
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-we-fight-money-laundering"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How we fight money laundering
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#Privacy-&-Security"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                Privacy & Security
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#How-we-fight-slavery"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                How we fight slavery
              </a>
            </div>

            <div className="mt-2 text-lg md:text-xl">
              <a
                href="#Transparency-reports"
                className="block text-gray-800 font-medium hover:text-orange-500"
              >
                Transparency reports
              </a>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-5 mr-4 md:mr-8 lg:mr-16">
          <div className="">
            <div className="flex-1 pl-4 pt-6">
              <p id="about-us" className="bg-black md:text-4xl text-xl md:font-bold  font-semibold text-white py-6 flex items-center justify-center mt-22">
                Transparency
              </p>
              <div  className="mt-12">
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold text-gray-800 mb-4 ">
                  About us
                </h2>
                <>
                  {isVisible && (
                    <button
                      onClick={scrollToTop}
                      className="fixed bottom-8 right-14 flex items-center gap-2 bg-white/50 text-gray-500 px-10 py-4 w-50 shadow-md hover:bg-white hover:text-orange-500 transition duration-300 rounded-lg"
                      aria-label="Back to Top"
                    >
                      <MdOutlineArrowUpward />
                      Back to Top
                    </button>
                  )}
                </>
                <div className="mb-8 text-gray-800 text-justify">
                  <p className="text-base leading-relaxed mb-4">
                    Welcome to our platform! We are here to create a worldwide
                    community that connects individuals who may never have the
                    chance to meet offline.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    Our goal is to create a safe and welcoming online
                    environment that removes barriers and brings together people
                    from different backgrounds and countries.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    {` Whether you're an extrovert or an introvert, we want you to
                    feel comfortable on our platform.`}
                  </p>
                </div>

                <div className="mb-2 text-gray-800 text-justify">
                  <h3 className="md:text-2xl text-xl font-semibold  mb-4">
                    On our platform, we advocate core values such as:
                  </h3>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <h4 className="text-base font-semibold mb-1">🛡 Security</h4>
                    <p className="">
                      We place great importance on the security of all
                      communications that pass through our platform.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <h4 className="text-base font-semibold mb-1">
                      🥰Freedom of Expression
                    </h4>
                    <p className="">
                      We encourage open and honest communication to create a
                      welcoming environment.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <h4 className="text-base font-semibold mb-1">
                      🚫Authenticity
                    </h4>
                    <p className="">
                      We strive to promote genuine connections and fight online
                      fraud.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <h4 className="text-base font-semibold  mb-1">🔐Privacy</h4>
                    <p className="">
                      We value your privacy and take measures to protect your
                      personal information.
                    </p>
                  </div>
                </div>

                <div className="mb-2 pt-2 text-gray-800 text-justify">
                  <h3 className="md:text-2xl text-xl font-semibold  mb-4">
                    Community Guidelines
                  </h3>
                  <p className="text-base leading-relaxed mb-2">
                    {`  Our freedom coexists with respect to other people's
                    boundaries. That's why we have some guidelines that we
                    believe must be followed.`}
                  </p>
                  <p className="text-base leading-relaxed mb-2">
                    {`  Below you can see a summary of our rules and values. More
                    detailed information about our platform's policies can be
                    found in the{" "}`}
                    <a
                      href="https:bestdates.com/community-pages/rules-policies#terms-of-service"
                      className=""
                    >
                      Terms of Use{" "}
                    </a>
                    div.
                  </p>
                  <p className="text-base leading-relaxed mb-2">
                    By using our platform, you agree to abide by these, which
                    are designed to keep the community healthy and respectful.
                    Please read through them carefully:
                  </p>
                  <ol className="list-decimal md:pl-8 pl-4 space-y-1 mb-2">
                    <li className="leading-relaxed">
                      <b>Adults only</b>: You must be at least 18 years old to
                      use our platform. We also have a zero-tolerance policy for
                      any form of material that sexually or violently exploits
                      anyone under 18, such content is strictly prohibited.
                      Accounts engaging in such activity will be blocked
                      immediately.
                    </li>
                    <li className="leading-relaxed">
                      {` Respect: Treat others as you'd like to be treated
                      and maintain a respectful attitude - this includes
                      refraining from bullying, harassment, violence, abuse,
                      “stalking”, etc. This also applies to inclusivity.
                      Discrimination and hate speech based on race, ethnicity,
                      national origin, religion, gender identity, sexual
                      orientation, disability, or anything else are strictly
                      prohibited on our platform.`}
                    </li>
                    <li className=" leading-relaxed">
                      <b>Authenticity</b>: Be yourself and don’t impersonate
                      others. Anyone found attempting to impersonate others will
                      be immediately blocked. We aim for our community to be a
                      safe and welcoming space for all, so we kindly request
                      that you provide accurate, truthful, and current
                      information about yourself.
                    </li>
                    <li className="leading-relaxed">
                      <b>Consent</b>: Freedom of expression is one of our most
                      important values, but you should remember that respecting
                      personal boundaries is crucial. Avoid posting pornographic
                      or adult content, including explicit sexual acts, nudity,
                      or other sexually explicit material. Instead, find out
                      what your chat partner is looking for and check if you are
                      on the same page.
                    </li>
                    <li className=" leading-relaxed">
                      <b>No scams</b>: At our platform, we have zero tolerance
                      for scammers and scam activity. Anyone found attempting to
                      defraud, deceive or manipulate others for financial gain
                      will be immediately blocked. Please avoid sharing personal
                      information on public pages and be cautious when
                      exchanging personal information with other users.
                    </li>
                    <li className=" leading-relaxed">
                      <b>No promotion or solicitation</b>: Follow the law and
                      refrain from advertising, selling, or buying illegal goods
                      or services - this includes sex or escort services (real
                      or virtual, including nudes), drugs, weapons, terrorism,
                      medical paraphernalia, and others. We also have strict
                      policies against promoting other platforms. If you use our
                      platform to drive people to external websites or apps via
                      links or otherwise we may suspend your account.
                    </li>
                  </ol>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-50 mb-2">
                    <p className="text-gray-600">
                      📎 If you think that your account has been unfairly
                      suspended or your content was unreasonably removed, please
                      contact our Customer Support.
                    </p>
                  </div>
                  <p className="leading-relaxed mb-2">
                    {" "}
                    {` We believe in your ability to respect and follow these
                    rules, and we're grateful to have you here as part of our
                    community.`}
                  </p>
                </div>
              </div>

              <div
                id="our-trust-and-safety-principles"
                className="pt-24 text-gray-800 text-justify mb-8"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold  mb-6">
                  Our Trust & Safety principles
                </h2>
                <h3 className="md:text-2xl text-xl font-semibold  mb-8"> 👁️ Vision </h3>
                <p className=" mb-4">
                  <b>The main goal of our team</b> is to create a safe and
                  exceptional environment for communication and interaction of
                  our users.
                </p>
                <h3 className="md:text-2xl text-xl font-semibold  mb-6"> 🛡️ Mission </h3>
                <p className="mb-4">
                  <strong>Our mission is simple:</strong>{" "}
                  {` to make the world a
                  better place by blocking users and content that shouldn't be
                  online.`}
                </p>
                <p className="mb-4">
                  {`  Think of us as a shield that protects our users from
                  low-quality, harmful or irrelevant content, inappropriate
                  behavior, false expectations and fraud. We're committed to
                  developing effective preventative systems to ensure the safety
                  of our community.`}
                </p>
                <h3 className="md:text-2xl text-xl font-semibold mb-6"> 💓 Values </h3>
                <p className="mb-4">
                  Transparency and high quality are the foundation of our work.
                  We also place great emphasis on a data-driven and user-centric
                  approach.
                </p>
                <h3 className="md:text-2xl text-xl font-semibold mb-6"> 🎯 Our focus </h3>
                <p className="mb-4">
                  As a team, we aim to achieve the following results in our
                  work:
                </p>
                <ul className="list-disc pl-8  mb-2">
                  <li className="">
                    99% accuracy in our decisions (no one is perfect);
                  </li>
                  <li className="">
                    100% coherence and consistency in our decision-making
                    process;
                  </li>
                  <li className="">
                    100% compliance with clearly documented procedures that meet
                    regulatory requirements;
                  </li>
                  <li className="">
                    A decrease in the total number of violations that shows
                    stable and statistically significant positive progress;
                  </li>
                  <li className="">Fair dispute settlement.</li>
                </ul>
              </div>

              <div
                id="How-we-enforce-the-rules"
                className="pt-24 text-gray-800 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-6">
                  How we enforce the rules
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  {" "}
                  To ensure a safe experience for all users, our platform has
                  implemented a system that prevents the registration of
                  irrelevant profiles and blocks the uploading of harmful
                  content. Action is also taken against any inappropriate
                  behavior by existing users, and it is monitored.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  Our&nbsp;
                  <a
                    rel="noreferrer noopener"
                    href="/community-pages/rules-policies#community-guidelines"
                    className="text-orange-500 font-medium"
                  >
                    {" "}
                    Community Guidelines{" "}
                  </a>
                  go beyond user profiles and encompass all content available on
                  our platform, including videos, audio, images, and texts. To
                  effectively enforce these policies, we use a combination of AI
                  technology and a dedicated Trust&Safety team of over 50
                  professionals to ensure compliance.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  The advanced moderation engine, based on machine learning, is
                  able to detect and flag text violations, abuse, or
                  inappropriate images.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  To maintain a friendly and welcoming environment, we have
                  implemented a keyword tracking system that blocks
                  inappropriate text in our chats, greatly reducing the
                  likelihood of messages containing banned words being sent to
                  other users. This system is also able to detect variations and
                  different spellings of unwanted words.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  At the same time, our Content Moderation Team acts as a
                  protective filter, ensuring that only trustworthy content is
                  displayed. Our Dispute Resolution Team immediately deals with
                  any suspicious activity or unacceptable behavior.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  Through a combination of manual and automated moderation, we
                  strive to remove all inappropriate content from our platform.
                  Accounts that commit serious or repeated violations of our
                  policies may be temporarily suspended or banned forever.
                </p>
                <div className="flex">
                  <BsArrowRightSquareFill className="text-blue-500 text-xl text-center mt-1" />
                  <p className="text-gray-800">
                    {" "}
                    If you think that your account has been unfairly suspended
                    or your content was unreasonably removed, please contact us
                    at{" "}
                    <a
                      href="mailto:support@bestdates.com"
                      className="text-orange-500 font-medium"
                    >
                      support@bestdates.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div
                id="How-our-Content-Moderation-team-works"
                className="pt-24 text-gray-800 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-8">
                  {" "}
                  How our Content Moderation team works{" "}
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  On the platform, our top priority is to create a friendly and
                  welcoming atmosphere. We want to create an environment where
                  everyone feels safe and comfortable.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  Our platform allows to exchange various types of content like
                  videos, photos or audio, as well as text content. To ensure a
                  pleasant and safe experience we use a combination of AI and
                  human moderation to cover all content shared across platform.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  {`  To ensure successful AI and human moderation, we've taken a
                  few important steps:`}
                </p>
                <ol className="list-decimal pl-8  mb-2">
                  <li>
                    {`    We have set clear rules and limits on what is allowed and
                    what isn't;`}
                  </li>
                  <li>
                    We have thoroughly tested the technical capabilities of our
                    AI and verified the accuracy of its decisions;
                  </li>
                  <li>
                    {` We have given our users the opportunity to dispute the AI's
                    decisions if they consider them invalid.`}
                  </li>
                </ol>
                <p className="text-base leading-relaxed mb-8">
                  The principles of what is allowed and what is prohibited apply
                  to all types of content on our platform. We have strict
                  <a
                    rel="noreferrer noopener"
                    href="/community-pages/rules-policies#community-guidelines"
                    className="text-orange-500 font-medium"
                  >
                    {" "}
                    Community Guidelines{" "}
                  </a>{" "}
                  {` to ensure that content containing violence, hate speech, spam
                  or sexually explicit content aren't posted by users.`}
                </p>
              </div>

              <div
                id="How-our-Dispute-Resolution-team-works"
                className="pt-24 text-gray-800 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-8">
                  How our Dispute Resolution team works
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  There are lots of users on the platform and disputes are
                  inevitable. Therefore, similar to the principle of fair
                  justice we have to ensure a fair dispute settlement on the
                  platform.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Hence, our Trust and Safety Team works closely with any
                  complaint the platform receives. The platform aims at helping
                  every user to receive fair treatment for their matter.
                  However, a fair review does not mean that the dispute will be
                  resolved in favor of a claimant. Conversely, the dispute shall
                  be reviewed impartially and may even result in no action on
                  behalf of the platform. The platform can not guarantee any
                  outcome of the dispute or any action taken towards someone.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  On our platform, we take every request made through our
                  support team or abuse reporting feature seriously. Our Dispute
                  Resolution Team carefully investigates and reviews each case
                  to ensure a fair resolution.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Cases are opened when there is a clear violation of our
                  <a
                    rel="noreferrer noopener"
                    href="/community-pages/rules-policies#terms-of-service"
                    className="text-orange-500 font-medium"
                  >
                    {" "}
                    Terms of Service{" "}
                  </a>
                  or other platform policies. Situations or cases that occur
                  outside of the platform cannot be used as grounds for
                  investigation.
                </p>
                <h3 className="md:text-2xl text-xl font-medium mb-2">
                  When investigating a case, we follow these principles:
                </h3>
                <ol className="list-decimal pl-8  mb-2">
                  <li>
                    Users who file a complaint must provide us with evidence and
                    arguments. Allegations without evidence cannot be considered
                    in the review and investigation;
                  </li>
                  <li>
                    Once a case is opened, both parties are given the
                    opportunity to present their evidence and arguments. We
                    impartially collect data from both the claimant and the
                    respondent. While there is no limit to the submission of
                    evidence, there may be a deadline for submission. Failure to
                    meet the deadline may result in the platform refusing to
                    accept further evidence;
                  </li>
                  <li>
                    {`  Our investigation isn't limited to the platform. We may
                    conduct research outside of the platform to verify
                    information about a case. Dispute Resolution Team will
                    evaluate the admissibility of outside information. We may
                    also consider private correspondence, but only if it has
                    been voluntarily and lawfully provided to us;`}
                    <br />
                    {`  The results of the case investigation won't be communicated
                    to the parties involved (or to a party if the case is
                    against the platform). However, the decision on the
                    investigation will be shared with the affected party(ies) in
                    accordance with internal procedures.`}
                  </li>
                </ol>
              </div>

              <div
                id="How-we-prevent-scam"
                className="pt-24 text-gray-800 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-6">How we prevent scam</h2>
                <p className="mb-2">
                  A scam is a deceitful conduct when a scammer receives or tries
                  to receive a benefit (usually money) from a victim (the person
                  who scams the victim).
                </p>
                <p className="mb-4">
                  <b className="font-bold">
                    The platform does not accept any form of scam on it.
                  </b>
                  To prevent it, we do the following:
                </p>
                <ol className="list-decimal pl-8 mb-8">
                  <li className="">
                    We prohibit scam in any of its forms (like fraud, deception,
                    etc.) on a legal level. Please feel free to find out more on
                    this in our
                    <a
                      rel="noreferrer noopener"
                      href="/community-pages/rules-policies#terms-of-service"
                      className="text-orange-500 font-medium"
                    >
                      {" "}
                      Terms of Service
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      rel="noreferrer noopener"
                      href="/community-pages/rules-policies#community-guidelines"
                      className="text-orange-500 font-medium"
                    >
                      {" "}
                      Community Guidelines
                    </a>
                    ;
                  </li>
                  <li className="">
                    {` We've developed an Anti-scam system that helps us identify
                    suspicious activity in a timely manner. We constantly work
                    on the improvement of our Anti-scam systems;`}
                  </li>
                  <li className="">
                    {`   We have our own content moderation system. If any content is
                    detected that could defraud someone, it'll be removed
                    immediately. We take fraud very seriously and hold our users
                    accountable. Those involved in fraud will either be banned
                    or completely removed from our platform;`}
                  </li>
                  <li className="">
                    We also place great emphasis on the training of our staff.
                    Although we have highly professional and well-trained Trust
                    &amp; Safety specialists, we constantly strive to increase
                    their expertise;
                  </li>
                  <li className="">
                    We conduct separate educational activities for our users.
                    Occasionally, we send out mass emails with information on
                    how to recognize fraud and instructions on how to deal with
                    becoming a victim of fraud. We do recommend acknowledging
                    yourself with our guide on how to stay alert and protect
                    yourself from online scams. We believe this should help us
                    create a community of well-educated users as knowledge is
                    the most powerful tool when fighting scams.
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                  <p className="mb-4">
                    ☝️ <b className="font-bold">We care about your safety!</b>
                  </p>
                  <p className="mb-4">
                    Even though we don’t conduct criminal background checks on
                    users whose profiles are seen on our platform, we:
                  </p>

                  <ul className="list-disc pl-8 space-y-1 mb-8">
                    <li className="">
                      Encourage you to be careful while talking to new people
                      online and look up information from open sources before
                      sharing anything personal, to be a bit more confident that
                      the person you’re talking to is trustworthy.
                    </li>
                    <li className="">
                      Recommend using official resources with publicly available
                      criminal records and sex offender registries, managed by
                      police and other local law enforcement authorities. For
                      example, in the US, you can refer to{" "}
                      <a
                        href="https://www.nsopw.gov/Home"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-medium"
                      >
                        National Sex Offenders Registry
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <p className="mb-8">
                  {`  If you suspect that someone is trying to scam you, or if
                  you're unfortunate enough to become a victim of scam, our
                  support team is here for you. We strongly encourage you to
                  contact us and report any potential or actual scam incident.`}
                </p>
              </div>

              <div
                id="How-we-prevent-deception"
                className="pt-24 text-gray-800 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-4">
                  How we prevent deception
                </h2>

                <p className="mb-4">
                  Deception is another form of misconduct that we do not accept
                  on our platform. The difference between scam and deception is
                  as follows: a scammer usually lies to receive money from a
                  person he or she wants to scam. In the meantime, the deception
                  may be something fake – like the name in your profile that is
                  not yours.
                </p>

                <p className="mb-2">
                  We have zero tolerance policy for deception on our platform.
                </p>

                <p className="mb-4">
                  Our prevention measures are the following:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-2">
                  <p className="mb-4">
                    1️⃣{" "}
                    <b className="font-bold">
                      High standards in the advertising
                    </b>
                  </p>
                </div>

                <p className="mb-2">
                  We are constantly trying to make our advertisements more clear
                  and more sincere by:
                </p>

                <ul className="list-disc pl-8 space-y-2 mb-4">
                  <li className=" mb-2">
                    ensuring that our contractors adhere to these values in
                    every advertisement or promotion they run. The platform
                    takes reasonable efforts to control its contractors. All
                    contractors accept legal obligations starting from the
                    simple deletion of misleading advertisements and ending with
                    the complete termination of our business relations for a
                    breach of our requirements;
                  </li>
                  <li className="mb-2">
                    creating internal policies that regulate the content we
                    consider acceptable for advertising purposes.
                  </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-2">
                  <p className=" mb-4">
                    2️⃣ <b className="font-bold">Identity verification</b>
                  </p>
                </div>

                <p className="mb-2">
                  The other important part of fighting deception is fighting the
                  deception that may come from users of the platform:
                </p>

                <ul className="list-disc pl-8 space-y-2 mb-4">
                  <li className="mb-2">
                    As you may have already read — a category of the Top user is
                    the category of users that have gone through our procedure
                    of identity verification. This means that to become a Top
                    user, the applicant must provide us with identification
                    documents to confirm their identity. We have also followed
                    best practices here — in most cases, we also require a video
                    of this person holding identification documents and speaking
                    the text we ask for;
                  </li>
                  <li className="mb-2">
                    We also prohibit all types of deceptive content on the
                    platform. This includes a false representation of users;
                    i.e., telling lies about their identity, sharing, or
                    creating deceptive content on the platform. For more
                    detailed information on this, please refer to our{" "}
                    <a
                      rel="noreferrer noopener"
                      href="/community-pages/rules-policies#terms-of-service"
                      className="text-orange-500 font-medium"
                    >
                      Terms of Service
                    </a>
                    . All the content created by Top users is pre-moderated,
                    which means it is not shown to the end user without platform
                    approval.
                  </li>
                </ul>
              </div>

              <div
                id="How-we-fight-money-laundering"
                className="pt-24 text-justify"
              >
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-6">
                  How we fight money laundering
                </h2>

                <p className="mb-4 text-gray-800">
                  We believe that our platform is not a place where someone can
                  launder money. To fight it, we have a dedicated two-tier
                  system.
                </p>

                <p className="mb-4 text-gray-800">
                  In order to process all payments securely, we work closely
                  with our trusted payment service provider (please read more on
                  this in our{" "}
                  <a
                    href="/community-pages/rules-policies#privacy-policy"
                    data-type="inner-application-link"
                    className="text-orange-500 font-medium"
                  >
                    Privacy Policy
                  </a>
                  ). He specializes in international transactions and has all
                  the necessary certifications required for secure payment
                  processing.
                </p>

                <p className="mb-4 text-gray-800">
                  {` The security of your payments is of utmost importance to us
                  and we use the most advanced measures to protect them. That is
                  why our platform fully complies with the standards of PCI DSS,
                  which meet the highest security requirements. If you'd like to
                  learn more, we recommend that you visit the{" "}`}
                  <a
                    href="https://www.pcisecuritystandards.org/"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-medium"
                  >
                    PCI Security Standards Council
                  </a>{" "}
                  website.
                </p>

                <p className="mb-4 text-gray-800">
                  Monitoring the payments we receive is a top priority. Our
                  platform uses a patented anti-fraud system that quickly
                  detects suspicious or potentially risky transactions. Such a
                  system is developed to ensure the highest possible security
                  for all payments and to prevent potential issues related to
                  money laundering.
                </p>

                <p className="mb-4 text-gray-800">
                  {`   We also use such patented anti-fraud systems to monitor the
                  use of funds (for information on the platform's internal
                  payment methods for paid services, please refer to our{" "}`}
                  <a
                    href="/community-pages/rules-policies#payment-and-refund-policy"
                    data-type="inner-application-link"
                    className="text-orange-500 font-medium"
                  >
                    Payment and Refund Policy
                  </a>
                  {`As soon as this system detects suspicious activities of a
                  user, we're alerted immediately. In this way, we can
                  immediately inform users about questionable activities on the
                  platform. While this system cannot provide absolute protection
                  against unauthorized credit card use, it serves as a valuable
                  warning to users so that they can respond quickly to
                  suspicious transactions.`}
                </p>

                <p className="mb-4 text-gray-800">
                  We have sanctions against the money-laundering operations that
                  took place on the platform. It may result in blocking a user
                  temporarily or permanently, or in a full deletion of the
                  user’s profile.
                </p>

                <p className="mb-2 text-gray-800">
                  {` In order to ensure the highest level of security and prevent
                  possible instances of financial fraud or breaches, you may be
                  required to complete a simple invoice verification process on
                  our website. For this, you'll need to upload a copy of your ID
                  and a photo of your credit card. Please note that this is only
                  a precautionary measure to confirm your identity as a genuine
                  user and legitimate cardholder for the payment(s) in question.`}
                </p>
              </div>

              <div
                id="Privacy-&-Security"
                className="pt-24 text-grey-800 text-justify"
              >
                <p className="md:text-4xl text-xl md:font-bold  font-semibold mb-4">
                  Privacy &amp;  Security
                </p>
                <p className="mb-4 text-gray-800">
                  Because you entrust us with your information, the security and
                  the privacy of your data is our top priority. Ensuring that we
                  maintain a robust, transparent, and accountable security
                  program is core to our commitment to you.
                </p>
              </div>

              <div className=" mb-4 text-gray-800 text-justify">
                <p className="md:text-2xl text-xl font-semibold mb-3 mt-3 text-gray-800">
                  Privacy&amp;Safety
                </p>
                {[
                  {
                    id: "answer1",
                    question:
                      "How do we respond to data requests from Law Enforcement?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Our goal is to maintain a safe and fun environment
                          where our users are free to express themselves and
                          stay in touch with each other. We are working to build
                          upon the productive relationship we share with law
                          enforcement authorities around the world - who are
                          vital partners in our efforts to combat illegal or
                          harmful activity on our platform.
                        </p>
                        <p className="mb-4">
                          Our dedicated Law Enforcement Operations (LEO) team is
                          focused on responding to preservation requests, valid
                          legal process, and inquiries from law enforcement. The
                          team operates 24 hours a day, seven days a week. A
                          team member handles every request from law enforcement
                          so every time law enforcement corresponds with us,
                          they are reaching a person, not a computer. In the
                          case of emergency disclosure requests from law
                          enforcement, our 24/7 team usually responds within
                          several hours.
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer2",
                    question: "How can I delete my data?",
                    answer: (
                      <>
                        <p className="mb-2 ">
                          Have you decided to take a break for a while? You can
                          delete your profile by following these steps:
                        </p>
                        <p className="mb-2">Desktop:</p>
                        <ul className="list-disc pl-8 space-y-1 mb-2">
                          <li className="mb-1">
                            Click on your profile icon in the top right corner.
                          </li>
                          <li className="mb-1">{`Select "Settings."`}</li>
                          <li className="mb-1">
                            {`  Click "Deactivate my account" and follow the
                            instructions.`}
                          </li>
                        </ul>
                        <p className="mb-2">Mobile:</p>
                        <ul className="list-disc pl-8 space-y-1 mb-2">
                          <li className="mb-1">
                            Click on your profile icon in the top right corner.
                          </li>
                          <li className="mb-1">{`Select "Settings."`}</li>
                          <li className="mb-1">
                            {`  Click "Account Deactivation" and follow the
                            instructions.`}
                          </li>
                        </ul>
                        <p className="mb-4">
                          This will remove your profile from our platform
                          publicly so it will no longer be visible to other
                          people. If you change your mind you may reactivate
                          your profile.
                        </p>
                        <p className="mb-4">
                          If you wish to begin the erasure process straight
                          away, you have the right to request for your data to
                          be erased by submitting a Data Erasure Request with
                          our{" "}
                          <a
                            href="mailto:support@bestdates.com"
                            className="text-orange-500 font-medium"
                          >
                            Customer Support
                          </a>{" "}
                          team. Once you’ve submitted this request, the process
                          can take up to 30 days for completion.
                        </p>
                        <p className="mb-4">
                          Please note, if your profile has been blocked, we are
                          required to retain basic account data to enforce such
                          blocks. A limited amount of information will therefore
                          be retained to enforce the block. We also retain data
                          where we are required to do so for legal or regulatory
                          reasons. This is in line with the General Data
                          Protection Regulation (GDPR), and with The California
                          Consumer Privacy Act (CCPA) if you are a resident of
                          California, United States.
                        </p>
                        <p className="text-base mb-2">
                          For further information regarding your data, please
                          see our{" "}
                          <a
                            href="/community-pages/rules-policies#privacy-policy"
                            className="text-orange-500 font-medium"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer3",
                    question:
                      "How can I request my data or retrieve past conversations?",
                    answer: (
                      <>
                        <p className="text-base mb-2">
                          Looking for your account information or conversations?
                          You have the right to access your data via a Subject
                          Access Request.
                        </p>
                        <p className="text-base mb-2">
                          There are{" "}
                          <a
                            href="/community-pages/rules-policies#privacy-policy"
                            className="text-orange-500 font-medium"
                          >
                            several different ways
                          </a>{" "}
                          to request your data, but the fastest option is to
                          submit your request via our{" "}
                          <a
                            href="mailto:support@bestdates.com"
                            className="text-orange-500 font-medium"
                          >
                            Customer Support
                          </a>
                          .
                        </p>
                        <p className="text-base mb-2">
                          If you’re specifically requesting a copy of your
                          conversation with someone, both you and your
                          connection will need to submit separate requests in
                          order to receive each side of your conversation.
                        </p>
                        <p className="text-base mb-2">
                          Please note, we may not be able to retrieve your data
                          if your profile has been deleted for longer than 28
                          days. In addition, requests can take up to 30 days to
                          process so we appreciate your patience while our team
                          handles your request.
                        </p>
                        <p className="text-base mb-2">
                          For more info about your rights, please check out our
                          detailed{" "}
                          <a
                            href="/community-pages/rules-policies#privacy-policy"
                            className="text-orange-500 font-medium"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer4",
                    question: "I think my account has been hacked",
                    answer: (
                      <>
                        <p className="text-base mb-2">
                          If you think your account has been hacked or taken
                          over, we recommend you to change your profile email
                          address.
                        </p>
                        <p className="text-base mb-2">
                          {`  You'll need to accept the request from your new email
                          account listed in your profile. This helps us confirm
                          that you have access to the email address that you're
                          requesting to associate with your account.`}
                        </p>
                        <p className="text-base mb-2">
                          Please reach out{" "}
                          <a
                            href="mailto:support@bestdates.com"
                            className="text-orange-500 font-medium"
                          >
                            support@bestdates.com
                          </a>{" "}
                          with any other concerns.
                        </p>
                        <p className="text-base mb-2">
                          You may also want to learn how to protect yourself
                          against malicious software that can potentially
                          compromise your account.
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer5",
                    question: "How do I report an account for impersonation?",
                    answer: (
                      <p className="text-base mb-2">
                        {`If you want to report someone that's pretending to be
                        you or someone you know, please reach out to our Support
                        Team directly or email{" "}`}
                        <a
                          href="mailto:support@bestdates.com"
                          className="text-orange-500 font-medium"
                        >
                          support@bestdates.com
                        </a>
                        .
                      </p>
                    ),
                  },
                  {
                    id: "answer6",
                    question:
                      "How to protect yourself against malicious software?",
                    answer: (
                      <>
                        <p className="text-base mb-2">
                          {`  Malicious software is any harmful application or file
                          designed to gain access to your computer or online
                          accounts. If you're infected, malicious software can
                          collect information from you and take unwanted actions
                          on your behalf.`}
                        </p>
                        <p className="text-base mb-2">
                          {`  If we think you're infected with malicious software,
                          we may notify you and ask you to scan your computer or
                          mobile device with recommended software.`}
                        </p>
                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-2 mt-4">
                          <p className="text-base font-bold">
                            Learn the signs of malicious software.
                          </p>
                        </div>
                        <p className="text-base mb-2">
                          Malicious software can infect your computer or mobile
                          device (such as a laptop or smartphone) as well as
                          your web browser (such as Chrome or Firefox). Here are
                          some signs that you may be infected with malicious
                          software:
                        </p>
                        <p className="text-base mb-2">
                          On your computer or mobile device:
                        </p>
                        <ul className="list-disc pl-8 list-inside mb-2">
                          <li>
                            Your applications run slower or tasks take longer
                            than usual to complete.
                          </li>
                          <li>
                            {`  You notice new applications that you don't remember
                            installing.`}
                          </li>
                          <li>
                            You notice strange pop-ups or other ads without
                            opening a web browser.
                          </li>
                        </ul>
                        <p className="text-base mb-2">On your web browser:</p>
                        <ul className="list-disc pl-8 list-inside mb-2">
                          <li>
                            {` You notice strange pop-ups or other ads that you
                            don't remember seeing before.`}
                          </li>
                          <li>
                            {`   Your search engine or home page has changed and you
                            don't remember changing it.`}
                          </li>
                        </ul>
                        <p className="text-base mb-2">
                          {` If malicious software appears on your computer or
                          mobile device, you'll want to remove it as quickly as
                          possible to protect yourself.`}
                        </p>
                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-2 mt-4">
                          <p className="text-base font-bold">
                            Protect your account from malicious software.
                          </p>
                        </div>
                        <p className="text-base mb-2 ">
                          You can remove most malicious software from your
                          computer or mobile device by following these steps:
                        </p>
                        <ol className="list-decimal pl-8 list-inside mb-2">
                          <li className="mb-1">
                            <b>Scan your device.</b>
                          </li>
                          <li className="mb-1">
                            <b>Clean your web browser.</b> If you use Chrome,
                            you can also download the{" "}
                            <a
                              href="https://www.google.com/chrome/cleanup-tool/"
                              rel="noreferrer noopener"
                              className="text-orange-500  font-semibold"
                            >
                              Chrome Cleanup Tool
                            </a>{" "}
                            for help with malicious software.
                          </li>
                          <li className="mb-1">
                            <b>Update your web browser.</b> Running the latest
                            version of your web browser ensures that you have
                            the latest security updates:
                          </li>
                          <ul className="list-disc pl-8 list-inside mb-1">
                            <li>
                              <a
                                href="https://www.google.com/chrome/update/"
                                rel="noreferrer noopener"
                                className="text-orange-500 font-semibold "
                              >
                                Chrome
                              </a>
                              ;
                            </li>
                            <li>
                              <a
                                href="https://support.mozilla.org/en-US/kb/update-firefox-latest-release"
                                rel="noreferrer noopener"
                                className="text-orange-500  font-semibold"
                              >
                                Firefox
                              </a>
                              ;
                            </li>
                            <li>
                              <a
                                href="http://www.apple.com/safari/download/"
                                rel="noreferrer noopener"
                                className="text-orange-500  font-semibold"
                              >
                                Safari
                              </a>
                              ;
                            </li>
                            <li>
                              <a
                                href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home"
                                rel="noreferrer noopener"
                                className="text-orange-500  font-semibold"
                              >
                                Internet Explorer
                              </a>
                              ;
                            </li>
                            <li>
                              <a
                                href="https://www.microsoft.com/en-us/edge/download?form=MA13M0"
                                rel="noreferrer noopener"
                                className="text-orange-500  font-semibold"
                              >
                                Microsoft Edge
                              </a>
                              .
                            </li>
                          </ul>
                        </ol>
                      </>
                    ),
                  },

                  {
                    id: "answer7",
                    question: "Safety Tips",
                    answer: (
                      <ol className="list-decimal pl-8 mb-4">
                        <li>
                          Don’t share your password, access to your account or
                          any official identity document with anyone.
                        </li>
                        <li>
                          Be cautious when deciding what personal information to
                          share in your profile.
                        </li>
                        <li>Never send any money to another member.</li>
                      </ol>
                    ),
                  },
                ].map(({ id, question, answer }) => (
                  <div key={id} className="pb-1">
                    <button
                      className="text-lg font-semibold focus:outline-none text-gray-800"
                      onClick={() => toggleAnswer(id)}
                    >
                      {visibleAnswer === id ? "▼" : "►"} {question}
                    </button>
                    {visibleAnswer === id && (
                      <div className=" text-gray-800">{answer}</div>
                    )}
                  </div>
                ))}

                <p className="md:text-2xl text-xl font-semibold mb-3 mt-3">Security</p>
                {[
                  {
                    id: "answer8",
                    question: "Internal Information Security Program",
                    answer: (
                      <>
                        <p>
                          We strive to increase security and reduce risk within
                          our digital environment. We proactively build secure
                          access protocols and network architecture to enable
                          systematic control of internal access to our
                          facilities, systems, and resources, using the least
                          privilege paradigm.
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer9",
                    question: "Governance, Risk, and Compliance",
                    answer: (
                      <>
                        <p>
                          All our Teams undergo security and privacy training
                          the moment they start as well as annually. We have
                          implemented and enforced physical, operational, and
                          technical controls, as well as enforced security
                          policies and procedures to secure our systems and
                          member data. In addition to performing extensive
                          internal security risk assessments, we also perform
                          in-depth reviews of the security posture of our
                          third-party vendors.
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer10",
                    question: "Monitoring and Threat Management",
                    answer: (
                      <>
                        <p>
                          Access to our infrastructure and systems is
                          continuously logged and monitored. Our security
                          monitoring, investigation, threat hunting, and
                          response program ensures that we are alerted on as
                          well as appropriately investigate, triage, and
                          remediate security events.
                        </p>
                      </>
                    ),
                  },
                  {
                    id: "answer11",
                    question: "Compliance Certifications",
                    answer: (
                      <>
                        <p>
                          We are contracted with partners which undergo yearly
                          audits by independent firms to ensure compliance of
                          our Services with PCI-DSS security requirements.
                        </p>
                      </>
                    ),
                  },
                ].map(({ id, question, answer }) => (
                  <div key={id} className="pb-1">
                    <button
                      className="text-lg font-semibold focus:outline-none text-gray-800"
                      onClick={() => toggleAnswer(id)}
                    >
                      {visibleAnswer === id ? "▼" : "►"} {question}
                    </button>
                    {visibleAnswer === id && (
                      <div className=" text-gray-800 text-justify">
                        {answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div id="How-we-fight-slavery" className="pt-24 text-justify">
                <h2 className="md:text-4xl text-xl font-semibold mb-8">
                  How we fight slavery
                </h2>

                <p className=" mb-4 text-gray-800">
                  The platform is not for slavery and human trafficking. We
                  condemn any type of slavery and human trafficking. We are not
                  obliged under any of the Modern Slavery Acts (both in the U.K.
                  and Australia), but would like to contribute and let you know
                  the following:
                </p>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
                  Our policies concerning slavery and human trafficking
                </h3>

                <p className=" mb-4 text-gray-800">
                  We do not tolerate any violations of any of the slavery and
                  human trafficking laws. We adhere to this position and are
                  ready to help our contractors to comply with the rules that
                  stand against slavery and human trafficking.
                </p>

                <p className=" mb-4 text-gray-800">
                  We do not tolerate any violations of any of the slavery and
                  human trafficking laws. We adhere to this position and are
                  ready to help our contractors to comply with the rules that
                  stand against slavery and human trafficking.
                </p>

                <p className="mb-4 text-justify text-gray-800">
                  We are also dedicated to making our platform free from slavery
                  and human trafficking. For this, we are improving ourselves
                  and teaching our users how to conduct themselves in a way that
                  is compliant with applicable legislation. You can learn more
                  about our approach to our platform in the{" "}
                  <a
                    rel="noreferrer noopener"
                    href="/community-pages/rules-policies#community-guidelines"
                    className="text-orange-500 font-medium"
                  >
                    Community Guidelines
                  </a>
                  .
                </p>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
                  The training about slavery and human trafficking available to
                  our staff
                </h3>

                <p className=" mb-6 text-gray-800 text-justify">
                  We conduct regular training and provide guidance both for the
                  people that work for the platform and our contractors. Such
                  events outline the most ethical standards of business conduct
                  and strong non-appreciation for slavery and human trafficking.
                </p>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
                  Platform structure, business, and supply chains
                </h3>

                <p className=" mb-4 text-gray-800 text-justify">
                  We employ only professionally qualified people and duly
                  qualified contractors all over the world. We are a company
                  that promotes, among its employees, dignity, and respect, and
                  blames discrimination, harassment, and other inappropriate
                  behavior. We ensure compliance with employment legislation and
                  best practices in the work organization.
                </p>

                <p className=" mb-4 text-gray-800 text-justify">
                  Our major suppliers are companies involved in low-risk sectors
                  (such as marketing and consulting services). We are also
                  dedicated to sharing best practices and our approach with all
                  our contractors throughout the supply chain. The platform has
                  internal policies that regulate not only the commercial issues
                  with its suppliers but also the ethical ones.
                </p>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
                  Our due diligence processes concerning slavery and human
                  trafficking in its business and supply chains
                </h3>

                <p className=" mb-4 text-gray-800 text-justify">
                  We conduct business by rendering the services right to the
                  users. Thus, we desire to have top-quality contractors. To
                  verify the contractors, we conduct KYC and/or AML audits. We
                  believe this can help us detect fraudulent activities (if any)
                  of our contemplated contractors and let us know if it is
                  reasonable to work with the relevant company or not.
                </p>

                <p className=" mb-4 text-gray-800 text-justify">
                  We also believe in the human factor. Therefore, we always meet
                  the management of potential business partners and check if
                  these are the people of the same mindset that we are. This
                  helps us understand and assess the potential risks of our
                  future collaboration.
                </p>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800 text-justify">
                  The parts of our business and supply chains with the risk of
                  slavery and human trafficking and the steps we have taken to
                  assess and manage that risk
                </h3>

                <p className=" text-gray-800 text-justify">
                  {`  We understand that our website may be abused by those that are
                  interested in slavery and human trafficking. Therefore, we
                  believe that close supervision over the users' actions on the
                  platform is an essence in fighting against the hypothetical
                  abuse of the website for slavery and human trafficking.`}
                </p>

                <p className=" mb-6 text-gray-800 text-justify">
                  We have both AI technology and a Moderation Team who
                  supervises the communication on the platform to foresee and
                  fight any cases that may concern slavery and human
                  trafficking. We are glad to state that we had no cases when
                  such violations were reported to the relevant authorities.
                  However, it is our strong position to report them in case we
                  detect such a breach.
                </p>
              </div>



              <div className="pt-24 " id="Transparency-reports">
                <h2 className="md:text-4xl text-xl md:font-bold  font-semibold mb-6">
                  Transparency reports
                </h2>

                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
                  2023 Transparency Report
                </h3>
                <p className="mb-4 text-justify">
                  This report seeks to highlight some of the areas that have
                  evolved to protect and promote trust online in 2023. Our Trust
                  & Safety principles are built on the creation of a safe and
                  exceptional environment for the communication and interaction
                  of our users.
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  Transparency, cost efficiency, and high quality are the
                  foundation of our work. We also place great emphasis on a
                  data-driven and user-centric approach.
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  <strong>Our mission is simple:</strong>{" "}
                  {`to make the world a
                  better place by blocking users and content that shouldn't be
                  online. We act as a shield that protects our users from
                  low-quality, harmful or irrelevant content, inappropriate
                  behavior, false expectations and reality, and fraud. We're
                  committed to developing effective preventative systems to
                  ensure the safety of our community.`}
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  This report provides visibility into our Trust & Safety
                  processes including details related to:
                </p>
                <ul className="list-disc pl-8 mb-4 text-gray-800 text-justify">
                  <li>
                    2023 safety updates we’ve made on Community Guidelines,
                    Product or Educational resources;
                  </li>
                  <li>how much content we have taken down in 2023.</li>
                </ul>

                <p className="font-bold mb-4">Safety updates</p>
                <ul className="list-disc pl-8 mb-4 text-gray-800 text-justify">
                  <li>
                    We have successfully transitioned to a new AI moderation
                    provider. This change has led to a notable decrease of 13
                    percentage points in false positive identifications. We
                    value your continued feedback as we strive to enhance our
                    platform even further.
                  </li>
                  <li>
                    {`     We are contracted with partners, which undergo yearly audits
                    by independent firms to ensure compliance of our Services
                    with PCI-DSS security requirements. The primary goal of PCI
                    DSS is to safeguard and optimize the security of sensitive
                    cardholder data, such as credit card numbers, expiration
                    dates and security codes. The standard's security controls
                    help businesses minimize the risk of data breaches, fraud
                    and identity theft.`}
                  </li>
                  <li>
                    Data subject access requests flow significantly improved. We
                    want to safeguard and empower our users by helping them
                    understand how their information is being used and accessed.
                    We have developed an online tool that supports our users to
                    make subject access requests in a way that enables us to
                    respond more effectively. The easiest way to make a subject
                    access request is to use our online service. It takes about
                    10 minutes.
                    <p>
                      {`   The subject access tool helps users to quickly identify
                      where to send their requests and how to get a response.
                      Privacy should never be an afterthought. Users' data is
                      critical to us, and we take great care to keep it safe and
                      under the users' control. We believe that trust is created
                      through transparency, and we want to be transparent about
                      our commitments on what users can expect when it comes to
                      our shared responsibility for their awareness on managing
                      and processing their data.`}
                    </p>
                  </li>
                </ul>

                <p className="font-bold mb-4">Numbers at a glance</p>
                <ul className="list-disc pl-8 mb-4 text-gray-800 text-justify">
                  <li>
                    <strong>100%</strong> of content generated by our top users
                    undergoes thorough screening through a combination of human
                    and automated content moderation. AI technologies we use
                    cover 60% of the content with automated moderation, ensuring
                    efficient and effective management of our platform.
                  </li>
                  <li>
                    <strong>100%</strong> of content we moderate undergoes
                    either pre-moderation or real-time moderation. This
                    meticulous process ensures that content is not accessible to
                    end users until it successfully passes through our rigorous
                    moderation standards or is swiftly removed within seconds
                    after being uploaded.
                  </li>
                  <li>
                    <strong>2.2 million</strong> is the total number of reviewed
                    items (including user profiles) over h1 2023 period. Over H2
                    2023 around <strong>1.2 million</strong> items (including
                    user profiles) were reviewed.
                  </li>
                  <li>
                    <strong>465,857</strong> violative items and accounts were
                    actioned over h1 2023 period and <strong>382,390</strong>{" "}
                    items over H2 2023 period.
                  </li>
                </ul>

                <p className="font-bold mb-4 text-justify">
                  Moderation in Channels: Coverage, Removals, and Enforcements
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  To keep our community safe, where a user breaches our Terms of
                  use, we take appropriate action. This may include content
                  removal, account rejection, or account deactivation.
                </p>
                <ul className="list-disc pl-8 mb-4 text-gray-800 text-justify">
                  <li>
                    <strong>3.4 million</strong> is the total number of reviewed
                    items (including user profiles) in 2023.
                  </li>
                  <li>
                    <strong>848,247</strong> violative items and accounts were
                    removed in 2023.
                  </li>
                </ul>

                <p className="text-lg mb-4 text-gray-800 text-justify">
                  Reviewed content items vs. violative items and accounts:
                </p>
                <img
                  className="w-full mb-4"
                  alt="Reviewed content items vs. violative items and accounts"
                  src="/assets/images/aboutus/mmm_month_1.png"
                />

                <p className="text-lg mb-4 text-gray-800 text-justify">
                  Share of accounts actioned due to Community Guidelines
                  Violation:
                </p>
                <img
                  className="w-full mb-4"
                  alt="Share of accounts actioned due to Community Guidelines Violation"
                  src="/assets/images/aboutus/mmm_month_2.png"
                />

                <p className="mb-4 text-gray-800 text-justify">
                  Profiles are often rejected for reasons which can be easily
                  rectified (for example failure to provide a clear picture of
                  government-issued identification documents for top members or
                  sharing personal content information). Where the reason for
                  rejection can be rectified, our Support Team will work with
                  the individual to try to address these issues.
                </p>

                <p className="mb-4 text-gray-800 text-justify">
                  Total content removal by policy:
                </p>
                <img
                  className="w-full mb-4"
                  alt="Total content removal by policy"
                  src="/assets/images/aboutus/mmm_month_3.png"
                />

                <p className="mb-4 text-gray-800 text-justify">
                  We are dedicated to providing value and a safe environment for
                  our users by ensuring content quality, reducing severe
                  violations, and actively addressing issues related to
                  inappropriate content.
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  Our data highlights a tendency among our users to upload adult
                  content and content that falls short of our quality standards
                  for paid content. Maintaining these standards is crucial to
                  ensure that our users receive value for the money spent on the
                  paid content.
                </p>
                <p className="mb-4 text-gray-800 text-justify">
                  Our platform maintains a low incidence of severe violations in
                  categories such as violent and hateful behavior and scam
                  activity. Our stringent content moderation measures have
                  effectively minimized such undesirable content.
                </p>

                <p className="mb-4 text-gray-800 text-justify">
                  Monthly content removal by policy:
                </p>

                <div className="overflow-x-auto">
                  <table className="border border-collapse border-black mb-4 w-full">
                    <thead>
                      <tr>
                        <th className="border border-black py-2 font-medium text-left text-gray-800">
                          Policy violation
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Jan&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Feb&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Mar&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Apr&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          May&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Jun&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Jul&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Aug&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Sep&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Oct&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Nov&apos;23
                        </th>
                        <th className="border border-black py-2 font-bold">
                          Dec&apos;23
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Other violations
                        </td>
                        <td className="border border-black py-2">53,96%</td>
                        <td className="border border-black py-2">55,00%</td>
                        <td className="border border-black py-2">51,29%</td>
                        <td className="border border-black py-2">52,74%</td>
                        <td className="border border-black py-2">54,56%</td>
                        <td className="border border-black py-2">60,89%</td>
                        <td className="border border-black py-2">58,81%</td>
                        <td className="border border-black py-2">2,23%</td>
                        <td className="border border-black py-2">3,36%</td>
                        <td className="border border-black py-2">4,31%</td>
                        <td className="border border-black py-2">4,5%</td>
                        <td className="border border-black py-2">5,59%</td>
                      </tr>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Low quality content
                        </td>
                        <td className="border border-black py-2">25,49%</td>
                        <td className="border border-black py-2">24,24%</td>
                        <td className="border border-black py-2">26,21%</td>
                        <td className="border border-black py-2">25,32%</td>
                        <td className="border border-black py-2">24,90%</td>
                        <td className="border border-black py-2">21,32%</td>
                        <td className="border border-black py-2">22,52%</td>
                        <td className="border border-black py-2">50,96%</td>
                        <td className="border border-black py-2">49,76%</td>
                        <td className="border border-black py-2">46,53%</td>
                        <td className="border border-black py-2">45,27%</td>
                        <td className="border border-black py-2">42,74%</td>
                      </tr>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Adult Nudity and sexual activity
                        </td>
                        <td className="border border-black py-2">18,71%</td>
                        <td className="border border-black py-2">18,92%</td>
                        <td className="border border-black py-2">20,33%</td>
                        <td className="border border-black py-2">20,12%</td>
                        <td className="border border-black py-2">18,94%</td>
                        <td className="border border-black py-2">16,05%</td>
                        <td className="border border-black py-2">16,85%</td>
                        <td className="border border-black py-2">42,10%</td>
                        <td className="border border-black py-2">41,53%</td>
                        <td className="border border-black py-2">44,58%</td>
                        <td className="border border-black py-2">45,74%</td>
                        <td className="border border-black py-2">47,48%</td>
                      </tr>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Scam activities
                        </td>
                        <td className="border border-black py-2">0,04%</td>
                        <td className="border border-black py-2">0,05%</td>
                        <td className="border border-black py-2">0,07%</td>
                        <td className="border border-black py-2">0,05%</td>
                        <td className="border border-black py-2">0,03%</td>
                        <td className="border border-black py-2">0,01%</td>
                        <td className="border border-black py-2">0,03%</td>
                        <td className="border border-black py-2">0,09%</td>
                        <td className="border border-black py-2">0,10%</td>
                        <td className="border border-black py-2">0,09%</td>
                        <td className="border border-black py-2">0,06%</td>
                        <td className="border border-black py-2">0,09%</td>
                      </tr>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Integrity and authenticity
                        </td>
                        <td className="border border-black py-2">0,90%</td>
                        <td className="border border-black py-2">0,89%</td>
                        <td className="border border-black py-2">1,05%</td>
                        <td className="border border-black py-2">0,89%</td>
                        <td className="border border-black py-2">0,63%</td>
                        <td className="border border-black py-2">0,97%</td>
                        <td className="border border-black py-2">0,92%</td>
                        <td className="border border-black py-2">2,11%</td>
                        <td className="border border-black py-2">2,14%</td>
                        <td className="border border-black py-2">1,78%</td>
                        <td className="border border-black py-2">1,74%</td>
                        <td className="border border-black py-2">2,34%</td>
                      </tr>
                      <tr>
                        <td className="border border-black py-2 font-medium text-gray-800">
                          Violent and Hateful behaviour
                        </td>
                        <td className="border border-black py-2">0,89%</td>
                        <td className="border border-black py-2">5,00%</td>
                        <td className="border border-black py-2">1,05%</td>
                        <td className="border border-black py-2">0,89%</td>
                        <td className="border border-black py-2">0,93%</td>
                        <td className="border border-black py-2">0,75%</td>
                        <td className="border border-black py-2">0,87%</td>
                        <td className="border border-black py-2">2,51%</td>
                        <td className="border border-black py-2">3,11%</td>
                        <td className="border border-black py-2">2,70%</td>
                        <td className="border border-black py-2">2,68%</td>
                        <td className="border border-black py-2">1,75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="font-bold mb-4">Reports made on platform</div>

                {/* Response time image */}
                <div className="space-y-4 mb-4">
                  <p className="text-base text-gray-800 text-justify">
                    Response time to appealed and community-reported content:
                  </p>
                  <img
                    loading="lazy"
                    alt="Response time to appealed and community-reported content"
                    src="/assets/images/aboutus/mmm_month_4.png"
                    className="w-full"
                  />
                  <p className="text mb-2 text-gray-800 text-justify">
                    Data reflects the difference between when we received a user
                    report and the time at which the content was removed (in
                    case we find a Community Guidelines violation) or accepted
                    (in case we do not locate a Community Guidelines violation).
                    NOTE: Only media content that has been both
                    reported/appealed by users and resulted in a
                    removal/approval action are included. Reports on profiles
                    are generally reviewed longer as they require more thorough
                    investigation.
                  </p>
                </div>

                {/* Community Guidelines Violations Text */}
                <div className="space-y-4">
                  <p className=" font-bold text-justify">
                    Community Guidelines violations
                  </p>
                  <p className="text-gray-800 text-justify">
                    Community Guidelines violations are identified both
                    proactively, using our internal trigger systems, and
                    reactively, through reports submitted via the Abuse reports
                    feature or by contacting Customer Support.
                  </p>
                  <ul className="list-disc pl-8 space-y-1 text-justify">
                    <li className="text-gray-800">
                      <b>64%</b> of all found Community Guidelines violations
                      were reported by our users*, the rest were detected by our
                      trigger systems. In H2 2023 users reported 55% of all
                      found Community Guidelines violations.
                      <p className="text-gray-800">
                        <b>*an average share of users who reported</b> Community
                        Guidelines violations was 0.53% in H1 2023 and 0.10% in
                        H2 2023 from all active users (those who interacted with
                        other platform users).
                      </p>
                    </li>
                    <li className="text-gray-800">
                      <b>54%</b> of user reports lead to sanctions against
                      another user, like temporary or permanent blocks or
                      warnings during H1 2023. The second part of the year
                      showed a growth of relevant complaints reaching 85%. We
                      will invest more in user education initiatives to decrease
                      the number of irrelevant complaints.
                    </li>
                  </ul>
                </div>

                {/* Community Guidelines Violations by Categories Image */}
                <div className="space-y-4 mb-4">
                  <img
                    loading="lazy"
                    alt="Community Guidelines violations by categories"
                    src="/assets/images/aboutus/mmm_month_5.png"
                    className="w-full"
                  />
                  <p className="mb-2 text-gray-800 text-justify">
                    Most cases of the category “Scam activity” were located by
                    the trigger system (only 6% were reported by users).
                    Developing scam prevention systems shows considerable
                    potential and motivates us to invest more in this process.
                  </p>
                </div>

                {/* Monthly Violations Table */}
                <div>
                  <p className="mb-4 text-gray-800 text-justify">
                    Monthly Community Guidelines violations by policy:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="border border-collapse w-full text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-black py-2 px-4 text-left font-medium text-gray-800">
                            Policy violation
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Jan&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Feb&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Mar&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Apr&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            May&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Jun&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Jul&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Aug&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Sep&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Oct&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Nov&apos;23
                          </th>
                          <th className="border border-black py-2 px-4 text-left">
                            Dec&apos;23
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="border border-black py-2 px-4 font-medium text-gray-800">
                            Adult Nudity and sexual activity
                          </td>
                          <td className="border border-black py-2 px-4">22%</td>
                          <td className="border border-black py-2 px-4">9%</td>
                          <td className="border border-black py-2 px-4">10%</td>
                          <td className="border border-black py-2 px-4">16%</td>
                          <td className="border border-black py-2 px-4">17%</td>
                          <td className="border border-black py-2 px-4">19%</td>
                          <td className="border border-black py-2 px-4">
                            26.3%
                          </td>
                          <td className="border border-black py-2 px-4">
                            17.6%
                          </td>
                          <td className="border border-black py-2 px-4">
                            27.3%
                          </td>
                          <td className="border border-black py-2 px-4">
                            31.6%
                          </td>
                          <td className="border border-black py-2 px-4">
                            21.7%
                          </td>
                          <td className="border border-black py-2 px-4">
                            25.0%
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="border border-black py-2 px-4 font-medium text-gray-800">
                            Integrity and authenticity
                          </td>
                          <td className="border border-black py-2 px-4">22%</td>
                          <td className="border border-black py-2 px-4">26%</td>
                          <td className="border border-black py-2 px-4">20%</td>
                          <td className="border border-black py-2 px-4">28%</td>
                          <td className="border border-black py-2 px-4">13%</td>
                          <td className="border border-black py-2 px-4">10%</td>
                          <td className="border border-black py-2 px-4">
                            21.1%
                          </td>
                          <td className="border border-black py-2 px-4">
                            11.8%
                          </td>
                          <td className="border border-black py-2 px-4">
                            9.1%
                          </td>
                          <td className="border border-black py-2 px-4">
                            15.8%
                          </td>
                          <td className="border border-black py-2 px-4">
                            13.0%
                          </td>
                          <td className="border border-black py-2 px-4">
                            12.5%
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="border border-black py-2 px-4 font-medium text-gray-800">
                            Other policy violations
                          </td>
                          <td className="border border-black py-2 px-4">37%</td>
                          <td className="border border-black py-2 px-4">46%</td>
                          <td className="border border-black py-2 px-4">41%</td>
                          <td className="border border-black py-2 px-4">35%</td>
                          <td className="border border-black py-2 px-4">35%</td>
                          <td className="border border-black py-2 px-4">25%</td>
                          <td className="border border-black py-2 px-4">
                            21.1%
                          </td>
                          <td className="border border-black py-2 px-4">
                            29.4%
                          </td>
                          <td className="border border-black py-2 px-4">
                            13.6%
                          </td>
                          <td className="border border-black py-2 px-4">
                            21.1%
                          </td>
                          <td className="border border-black py-2 px-4">
                            17.4%
                          </td>
                          <td className="border border-black py-2 px-4">
                            16.7%
                          </td>
                        </tr>
                        {/* Repeat rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="font-bold my-4 text-justify">
                  Law Enforcement and Government Requests
                </p>
                <p className="text-base mb-6 text-gray-800 text-justify">
                  In 2023, there have been no requests from Law &amp; Government
                  entities to remove or restrict any content or accounts on our
                  platform. We remain committed to upholding transparency and
                  freedom of expression while adhering to relevant legal and
                  regulatory frameworks.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
