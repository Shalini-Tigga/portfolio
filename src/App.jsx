
import React, { useState, useEffect } from "react";
import "./style.css";


export default function App() {
  const [openWindows, setOpenWindows] = useState(["about"]);
  const [booting, setBooting] = useState(true);
  const [showContact, setShowContact] = useState(false);


  useEffect(() => {
    const header = document.querySelectorAll(".folder-header");
    header.forEach(h => {
      const parent = h.parentElement;
      h.onmousedown = function (e) {
        let offsetX = e.clientX - parent.offsetLeft;
        let offsetY = e.clientY - parent.offsetTop;
  
        function move(e) {
          parent.style.left = `${e.clientX - offsetX}px`;
          parent.style.top = `${e.clientY - offsetY}px`;
        }
  
        function up() {
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        }
  
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
      };
    });
  }, [openWindows]);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const certificates = [
    {
      title: "Cloud Computing Certificate",
      date: " Jul-Oct 2024",
      image: "/nptel.png", // Image of the PDF thumbnail
      pdf: "/nptel.pdf", // Actual PDF file
    },
    {
      title: "Complete Interview Preparation",
      date: "Jun 2024",
      image: "/summer.png", // Image of the PDF thumbnail
      pdf: "/summer training.pdf", // Actual PDF file
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      date: "May 2024",
      image: "/networking.png", // Image of the PDF thumbnail
      pdf: "/networking.pdf", // Actual PDF file
    },
    {
      title: "SQL for Data Science",
      date: "Feb 2024",
      image: "/dbms 60.jpg", // Image of the PDF thumbnail
      pdf : ""
    },
    {
      title: " Software Development Processes and Methodologies",
      date: "May 2024",
      image: "/software.png", // Image of the PDF thumbnail
      pdf : "/software.pdf"
    },
    {
      title: " IELTS Pro",
      date: "Nov 2024",
      image: "pel136.png", // Image of the PDF thumbnail
      pdf : "/pel136.pdf"
    },
  ];
  
  const achievements = [
    {
      title: "Google Girl Hackathon",
      date: "February 2025",
      description: "Participated in a national hackathon organized by Google.",
      icon: "/trophy.png",
    },
    {
      title: "Walmart Codehers Hackathon",
      date: "March 2025",
      description: "Participated in a national hackathon organized by Walmart.",
      icon: "/trophy.png",
    },
    {
      title: "Dean's List - Top 10% of Class",
      date: "Sep 2024",
      description: "For good academic performance and extra-curricular activities at University.",
      icon: "/trophy.png",
    },
    {
      title: "250+ LeetCode Problems Solved",
      date: "April 2024",
      icon: "/trophy.png",
    },
  ];
  const projects = [
    {
      title: "Automating Customer Insights",
      image: "/cutomer.png",
      alt: "Automating Customer Insights",
      description: "Automates the generation of customer insights from transactional data, helping businesses understand buying behavior and segment customers effectively.",
      tech: "Python, Pandas, Data Visualization Libraries",
      github: "https://github.com/Shalini-Tigga/Automating-Customer-Insights"
    },
    {
      title: "Tic Tac Toe Game",
      image: "/ttt.png",
      alt: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game with a GUI built for two players to play interactively.",
      tech: "Python, Tkinter",
      github: "https://github.com/Shalini-Tigga/Tic-Tac-Toe-game"
    },
    {
      title: "Evaluating Autocomplete Systems",
      image: "/nlp.png",
      alt: "Evaluating Autocomplete Systems",
      description: "Analyzes and compares different autocomplete algorithms based on accuracy, speed, and user experience to enhance text prediction performance.",
      tech: "Python, NLP, N-grams, Text Analysis, Jupyter Notebook",
      github: "https://github.com/Shalini-Tigga/Evaluating-Autocomplete-Systems"
    },
    {
      title: "Lottery Game",
      image: "/python.png",
      alt: "Lottery Game",
      description: "A simple command-line based lottery simulation where users select numbers and check results against random draws.",
      tech: "Python",
      github: "https://github.com/Shalini-Tigga/Lottery-Game"
    },
    {
      title: "Movie Ticket Booking System",
      image: "/movie.png",
      alt: "Movie Ticket Booking System",
      description: "A Python-based terminal application for booking movie tickets, with features like seat selection, pricing, and ticket confirmation.",
      tech: "Python",
      github: "https://github.com/Shalini-Tigga/Movie-Ticket-Booking-System"
    },
    {
      title: "Dales Home",
      image: "/dales homes.png",
      alt: "Dales Home",
      description: "A HTML project showcasing website layout basics using pure HTML and a bit of CSS.",
      tech: "HTML, CSS",
      github: "https://github.com/Shalini-Tigga/Html-Project"
    },
    {
      title: "Landmine Detection",
      image: "/landmine.png",
      alt: "Landmine Detection",
      description: "A machine learning-based model to detect landmines using sensor data and environmental readings, aiming to enhance safety in high-risk areas.",
      tech: "Python, Pandas, Scikit-learn, Jupyter Notebook",
      github: "https://github.com/Shalini-Tigga/Landmin-Detection"
    },
    {
      title: "Ola Bike Ride Request Forecast",
      image: "/ola.png",
      alt: "Ola Bike Ride Request Forecast",
      description: "A data analysis and forecasting project that predicts Ola bike ride demand in different city areas based on various time and location features.",
      tech: "Python, Pandas, NumPy, Matplotlib, Seaborn, Machine Learning",
      github: "https://github.com/Shalini-Tigga/Ola-Bike-Ride-Request-Forecast"
    }
  ];
  
  
  
  return (
    <>
      {booting ? (
        <div className="boot-screen">
          <pre>
            Booting ShaliniOS v1.0...<br />
            Loading modules ████████░░<br />
            Initializing desktop environment...<br />
            Welcome, Viewer 🖤
          </pre>
        </div>
      ) : (
        <div className="desktop">
          <div className="wallpaper">
          </div>

          <div className="desktop-icons">
            <DesktopIcon
              label="About Me"
              onClick={() => {
                if (!openWindows.includes("about")) {
                  setOpenWindows([...openWindows, "about"]);
                }
              }}
            />

            <DesktopIcon
              label="Education"
              onClick={() => {
                if (!openWindows.includes("education")) {
                  setOpenWindows([...openWindows, "education"]);
                }
              }}
            />
            <DesktopIcon
              label="Skills"
              onClick={() => {
                if (!openWindows.includes("skills")) {
                  setOpenWindows([...openWindows, "skills"]);
                }
              }}
            />
            <DesktopIcon
              label="Projects"
              onClick={() => {
                if (!openWindows.includes("projects")) {
                  setOpenWindows([...openWindows, "projects"]);
                }
              }}
            />
            <DesktopIcon
              label="Certificate"
              onClick={() => {
                if (!openWindows.includes("certificates")) {
                  setOpenWindows([...openWindows, "certificates"]);
                }
              }}
            />
            <DesktopIcon
              label="Achievements"
              onClick={() => {
                if (!openWindows.includes("achievements")) {
                  setOpenWindows([...openWindows, "achievements"]);
                }
              }}
            />
          </div>

          
          {openWindows.map((win) => (
            <FolderWindow
              key={win}
              title={win === "about" ? "about.exe" : win}
              onClose={() => setOpenWindows(openWindows.filter(w => w !== win))}
            >
              {/* About Section */}
              {win === "about" && (
                <div className="about-preview">
                  <div className="about-file">
                    <img src="/your-photo.jpg" alt="Shalini" className="avatar" />

                    <div className="about-actions">
                      <a href="/resume.pdf" download className="about-button small-button">
                        <img src="/download.png" alt="Download" />
                        Download Resume
                      </a>
                      <a href="https://youtu.be/3SV4nKE1TsY" target="_blank" rel="noopener noreferrer" className="about-button small-button">
                        <img src="/video.png" alt="Video CV" />
                        Watch Video CV
                      </a>
                    </div>

                    <div className="about-text">
                    <p>
                      Hey, I’m <strong>Shalini Tigga</strong> — born in <strong>Haridwar</strong>, rooted in <strong>Ranchi, Jharkhand</strong> .<br />
                      I’m a lover of long <strong>YouTube video essays</strong>, retro games like <strong>Tetris</strong>, <strong>Solitaire</strong> , and <strong>FreeCell</strong>  — I’m even <strong>building a Tetris clone</strong>! <br />
                      <strong>Python</strong> was my first language and still feels like home 🐍. These days, I’m crafting creative UIs with <strong>React</strong>  and exploring data stories with <strong>Pandas</strong> and <strong>Matplotlib</strong> .<br />
                      <strong>I believe in clean code</strong>, fun projects , and the joy of learning something new every day 💡.<br />
                      <strong>Actively looking for exciting roles</strong> in <strong>frontend development</strong>, <strong>data science</strong>, or anything that <strong>mixes code with creativity</strong> 🧠🎨.<br />
                      Always up for <strong>collaborations</strong>, quirky ideas 💡, or building something meaningful together .<br />
                      ⚠️ <em>Warning:</em> May break into a spontaneous debugging session or a nostalgic game of <strong>Tetris</strong> 🎮.
                    </p>

                    </div>
                  </div>
                </div>
              )}

              {/* Education Section */}
              {win === "education" && (
                <div className="education-preview">
                  {[
                    {
                      title: "🎓 B.Tech in Computer Science",
                      details: [
                        ["University", "Lovely Professional University, Phagwara"],
                        ["CGPA", "7.58"],
                        ["Years", "2022 – 2026"],
                        ["", <em>Top 10% of my class</em>],
                      ]
                    },
                    {
                      title: "🏫 Class 12 – CBSE",
                      details: [
                        ["School", "Delhi Public School, Ranipur"],
                        ["Percentage", "73%"],
                        ["Year", "2021 - 2022"],
                      ]
                    },
                    {
                      title: "🏫 Class 10 – CBSE",
                      details: [
                        ["School", "Delhi Public School, Ranipur"],
                        ["Percentage", "85%"],
                        ["Year", "2019 - 2020"],
                      ]
                    }
                  ].map((entry, idx) => (
                    <div className="edu-entry" key={idx}>
                      <h2>{entry.title}</h2>
                      {entry.details.map(([label, value], i) => (
                        <p key={i}>
                          {label && <strong>{label}:</strong>} {value}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Section */}
              {win === "skills" && (
                <div className="skills-grid">
                  {[
                    ["cpp-logo.png", "C++"],
                    ["python-logo.png", "Python"],
                    ["java-logo.png", "Java"],
                    ["numpy-logo.png", "Numpy"],
                    ["pandas-logo.png", "Pandas"],
                    ["javascript-logo.png", "JavaScript"],
                    ["nodejs-logo.png", "Node.js"],
                    ["html-logo.png", "HTML"],
                    ["css-logo.png", "CSS"],
                    ["opencv-logo.png", "OpenCV"],
                    ["tensorflow-logo.png", "Tensorflow"],
                    ["mysql-logo.png", "SQL"],
                    ["github-logo.png", "Github"],
                    ["postman-logo.png", "Postman"]
                  ].map(([icon, label], idx) => (
                    <div className="skill" key={idx}>
                      <img src={`/${icon}`} alt={label} className="skill-icon" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects Section */}
              {win === "projects" && (
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                      <img src={project.image} alt={project.title} className="project-image" />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p><strong>Tech:</strong> {project.tech}</p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button"
                      >
                        View on GitHub
                      </a>

                    </div>
                  ))}
                </div>
              )}

              {/* Certificates Section */}
              {win === "certificates" && (
                <div className="certificates-grid">
                  {certificates.map((cert, index) => (
                    <div className="certificate-card" key={index}>
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="certificate-image" 
                        onClick={() => window.open(cert.pdf, "_blank")}
                      />
                      <h3>{cert.title}</h3>
                      <p>{cert.date}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements Section */}
              {win === "achievements" && (
                <div className="achievements-list">
                  {achievements.map((achieve, index) => (
                    <div className="achievement-card" key={index}>
                      <img src={achieve.icon} alt="" className="achievement-icon" />
                      <div>
                        <h3>{achieve.title}</h3>
                        <p className="achievement-date">{achieve.date}</p>
                        <p>{achieve.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FolderWindow>
          ))}


          
          <div className="taskbar">
          <button className="start-button" onClick={() => setShowContact(true)}>
            <img src="/start.webp" alt="Start" />
            Contact
          </button>
          {showContact && (
            <div className="contact-window retro-window">
              <div className="window-header">
                <span>Contact Form</span>
                <button onClick={() => setShowContact(false)}>✕</button>
              </div>
              <form className="contact-form" action="https://formspree.io/f/xgvabynj" method="POST">
                <label>Name:<input type="text" name="name" required /></label>
                <label>Email:<input type="email" name="email" required /></label>
                <label>Message:<textarea name="message" rows="4" required></textarea></label>
                <button type="submit">Send</button>
              </form>
            </div>
          )}
            <div className="social-icons">
              <a href="https://leetcode.com/u/inilahs/" target="_blank">
                <img src="/leetcode.png" alt="LeetCode" />
              </a>
              <a href="https://github.com/Shalini-Tigga" target="_blank">
                <img src="/github-logo.png" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/shalini-tigga/" target="_blank">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DesktopIcon({ label, onClick }) {
  const iconSrc =
    label === "About Me" ? "/exe-icon.png" : "/folder-icon.png";

  return (
    <div className="icon" onClick={onClick}>
      <img src={iconSrc} alt={label} />
      <span>{label === "About Me" ? "about.exe" : label}</span>
    </div>
  );
}

function FolderWindow({ title, onClose, children }) {
  return (
    <div className="folder-window">
      <div className="folder-header">
        <span>{title}</span>
        <button onClick={onClose}>❌</button>
      </div>
      <div className="folder-content">{children}</div>
    </div>
  );
}



