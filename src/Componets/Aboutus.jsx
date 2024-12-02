import React from 'react'

function Aboutus() {
  return (
    <>
      <div name="AboutUs" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>About</h1>
          <p>Hi! I’m Amit Kumar, a passionate web developer with a keen interest in creating engaging, user-friendly, and
            responsive web applications. With a strong foundation in front-end and back-end development, I specialize in building
            websites that are both functional and aesthetically pleasing.</p>
          <br />
          <h1 className='text-green-600 font-semibold text-xl'>Education</h1>
          <div className="flex justify-center items-center p-4">
            <div className="overflow-x-auto w-full">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Qualification</th>
                    <th className="border border-gray-300 px-4 py-2">Passing Year</th>
                    <th className="border border-gray-300 px-4 py-2">Board/University</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Master of Computer Application (MCA)</td>
                    <td className="border border-gray-300 px-4 py-2">2024</td>
                    <td className="border border-gray-300 px-4 py-2">
                      School of Management Sciences Varanasi (AKTU)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Bachelor of Computer Application (BCA)</td>
                    <td className="border border-gray-300 px-4 py-2">2020</td>
                    <td className="border border-gray-300 px-4 py-2">
                      School of Management Sciences Varanasi (MGKVP)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Intermediate</td>
                    <td className="border border-gray-300 px-4 py-2">2016</td>
                    <td className="border border-gray-300 px-4 py-2">U.P Board</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Matric</td>
                    <td className="border border-gray-300 px-4 py-2">2014</td>
                    <td className="border border-gray-300 px-4 py-2">U.P Board</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h1 className='text-green-600 font-semibold text-xl py-2'>Traning & Certifications</h1>
          <ul class="list-disc pl-5">
            <li>Completed 6 months of live project-oriented internship in Advance java with spring MVC framework from Kamadgiri Software Soulutions (p) ltd. during january 2024 to june 2024</li>
          <li>I have done two month of summer internship in PHP from School of Management Sciences Varanasi during 15 july 2023 to 15 september 2023</li>
          <li>Attended a 7 days workshop in Advance.NET at my College by real time expert Er.S Mishra sir in may 2023</li>
          </ul>
          <h1 className='text-green-600 font-semibold text-xl py-2'>Skills & Expertise</h1>
          <p>I am proficient in:</p>
          <ul className='list-disc pl-5'>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li><strong>Backend: </strong>PHP,java(Core + Advance)</li>
            <li><strong>Database:</strong> MySQL, JDBC,JDBC Templet</li>
            <li><strong>Version Controle: </strong>Git,GitHub</li>
            <li><strong>Software used:</strong>Eclips,Xampp,VS Code</li>
          </ul>
          <h1 className='text-green-600 font-semibold text-xl py-2'>Achivements & Awards</h1>
          <ul className='list-disc pl-5'>
            <li><strong>Teck Marathon</strong> a 16 hours continous techno brain race frome 06:00 P.M 13 june 2023 to 10:00 A.M 14 june 2023 and <strong>Secured Third Position</strong></li>
            <li>Outstanding Performer in summer internship batch 2024</li>
          </ul>
          <h1 className='text-green-600 font-semibold text-xl py-2'>Mission Statement</h1>
          <p>"I am committed to crafting innovative, user-centered web solutions that blend functionality with aesthetics. 
            My mission is to empower businesses and individuals through responsive, accessible, and high-performance websites 
            that drive engagement and deliver exceptional user experiences."</p>
        </div>
      </div>
    </>
  )
}

export default Aboutus
