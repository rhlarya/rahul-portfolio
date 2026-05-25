import { useEffect } from "react";
console.log("PORTFOLIO FILE RUNNING");
export default function Portfolio() {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    "C",
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "OpenCV",
    "Face Detection API",
    "OOPs Basics",
    "SDLC",
    "Debugging",
    "Windows OS",
    "VS Code",
    "MS Word",
    "MS Excel",
    "MS PowerPoint",
    "React",
    "GitHub",
  ];

  const coreSkills = [
    "Problem Solving",
    "Logical Thinking",
    "Teamwork",
    "Communication",
    "Quick Learner",
    "Adaptability",
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-gray-900 scroll-smooth text-left">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-16">
          
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Rahul Saini
          </h1>

       <p className="text-xl text-gray-600 max-w-3xl leading-8">
  BCA Graduate passionate about Web Development, APIs, and Software Development. 
  Skilled in building modern applications, solving logical problems, and eager to 
  contribute to growth-oriented IT organizations with continuously evolving technical expertise.
</p>
<br />

<div className="flex items-center">
 <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  style={{ marginRight: "20px" }}
  className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:scale-105 transition duration-300"
>
  Contact Me
</button>

<button
  onClick={() => window.open("/resume.pdf")}
  className="border-2 border-black px-8 py-4 rounded-2xl text-lg font-medium hover:bg-black hover:text-white transition duration-300"
>
  Download Resume
</button>
</div>
        </div>
      </section>
      <br />

      {/* ABOUT */}
     <section className="max-w-6xl mx-auto px-6 mt-6 pb-10">
       <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-14 mt-10">
       <h2
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: "5px",
  }}
>
  About Me
</h2>
          <p className="text-lg text-gray-600 leading-10">
           Motivated and detail-oriented BCA Graduate seeking an entry-level role in the IT industry. 
  Skilled in programming fundamentals, API integration, debugging, and software development. 
  Passionate about learning modern technologies and solving real-world problems through technology.
          </p>
        </div>
      </section>
<br />
{/* CAREER OBJECTIVE */}

<section className="max-w-6xl mx-auto px-6 pb-10">
  <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-14">

    <h2
      style={{
        fontSize: "24px",
        fontWeight: "600",
        color: "#4b5563",
        marginBottom: "10px",
      }}
    >
      Career Objective
    </h2>

    <p className="text-lg text-gray-600 leading-9">
      Seeking an opportunity to start my career in the IT
      industry where I can apply my technical skills, learn
      modern technologies, and contribute to real-world
      software development projects.
    </p>

  </div>
</section>
<br />
      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-14">
          <h2
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: "5px",
  }}
>
  Education
</h2>

         <div className="space-y-5">

  <div className="border-l-4 border-black pl-6">
    <p className="text-lg font-semibold">
     BCA (Bachelor of Computer Applications)
    </p>

    <p className="text-lg text-gray-600 mt-1">
      Shobhit University, Gangoh
    </p>
  </div>

  <div className="border-l-4 border-black pl-6">
    <p className="text-lg font-semibold">
      12th & 10th
    </p>

    <p className="text-lg text-gray-600 mt-1">
      Kalvin Central Academy, Nakur
    </p>
  </div>

</div>
        </div>
      </section>
<br />
      {/* TECHNICAL SKILLS */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-14">
          <h2
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: "5px",
  }}
>
 Technical Skills
</h2>

    <div className="flex flex-col gap-3 text-gray-700 text-base">

  <p>
    <span className="font-semibold">Programming:</span> C, C++, HTML, CSS, Python, JavaScript
  </p>

  <p>
    <span className="font-semibold">IT Fundamentals:</span> OOPs Basics, SDLC, Debugging, APIs
  </p>

  <p>
    <span className="font-semibold">Tools:</span> REST API, Face Detection API, OpenCV
  </p>

</div>
        </div>
      </section>
<br />
      {/* PROJECT */}
      <section className="max-w-6xl mx-auto px-6 pt-0 pb-10">
       <div className="bg-white rounded-[30px] shadow-xl pt-4 px-10 pb-10 md:px-14 md:pb-14">
       <h2
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#4b5563",
    margin: "0",
    lineHeight: "0.1",
  }}
>
  Project
</h2>
        <div className="border border-gray-200 rounded-[25px] p-5 hover:shadow-lg transition duration-300 mt-1">
         <h3
  style={{
    marginBottom: "7px",
    lineHeight: "1",
  }}
  className="text-2xl font-medium"
>
  Face Detection System using API
</h3>

<p
  style={{
    marginTop: "0px",
    lineHeight: "1.6",
  }}
  className="text-lg text-gray-600"
>
              Developed a face detection application using Python
              and pre-trained APIs. Implemented image and real-time
              input processing to detect human faces accurately.
              Integrated REST APIs and tested the application
              for reliability and performance.
            </p>
          </div>
        </div>
      </section>
<br />
      {/* CERTIFICATION */}
   <section className="max-w-6xl mx-auto px-6 pt-0 pb-10">
       <div className="bg-white rounded-[30px] shadow-xl pt-4 px-10 pb-10 md:px-14 md:pb-14">
       <h2
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#4b5563",
    margin: "0",
    lineHeight: "0.1",
  }}
>
  Certification
</h2>
        <div className="border border-gray-200 rounded-[25px] p-5 hover:shadow-lg transition duration-300 mt-1">
         <h3
  style={{
    marginBottom: "7px",
    lineHeight: "1",
  }}
  className="text-2xl font-medium"
>
              IBM SkillsBuild – Artificial Intelligence Certificate
            </h3>

            <p className="text-lg text-gray-600 leading-7 mt-1">
              Completed under IBM SkillsBuild in Advanced IT Skills
              Program with Grade B in February 2026.
            </p>
          </div>
        </div>
      </section>
<br />
     {/* TECHNOLOGIES */}

<section className="max-w-6xl mx-auto px-6 pb-10">
  <div className="bg-white rounded-[30px] shadow-xl p-10 md:p-14">

    <h2
      style={{
        fontSize: "24px",
        fontWeight: "600",
        color: "#4b5563",
        marginBottom: "12px",
      }}
    >
      Tools & Technologies
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      <span className="bg-gray-100 px-4 py-2 rounded-full">
        React
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        JavaScript
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        Python
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        REST API
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        OpenCV
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        GitHub
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        HTML
      </span>

      <span className="bg-gray-100 px-4 py-2 rounded-full">
        CSS
      </span>
    </div>

  </div>
</section>

<br />
      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="bg-black text-white rounded-[30px] shadow-xl p-10 md:p-14">
         <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#4b5563", marginBottom: "4px" }}>
  Contact
</h2>

          <div className="space-y-6 text-lg">
            <p>📞 6239554481</p>

            <p>📧 saini.r6070@gmail.com</p>

            <p>📍 Nakur, Uttar Pradesh</p>
            <p>
  💼 LinkedIn:
  <a
    href="https://www.linkedin.com/in/rahul-saini-762695377"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-2 underline hover:text-gray-300"
  >
    linkedin.com/in/rahul-saini-762695377
  </a>
</p>

<p>
  💻 GitHub:
  <a
    href="https://github.com/rhlarya"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-2 underline hover:text-gray-300"
  >
    github.com/rhlarya
  </a>
</p>
          </div>
        </div>
      </section>
    </div>
  );
}