import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/img/githubSideImg.png';
import github from '../assets/img/github-center.png';
import profile from '../assets/img/profile.jpg';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen dark:bg-black'>
      <div className='w-full h-16 flex items-center p-5 dark:bg-black border-b-2 border-gray-500'>
        <header className='flex justify-between items-center w-full'>
          <div className='flex justify-between items-center gap-4'>
            <span className='dark:text-white'><FontAwesomeIcon icon={faBars} /></span>
            <span className='bg-white rounded-full'>
              <svg className='bg-white text-white rounded-full' height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </span>
            <span className='dark:text-white text-xl'>Dashboard</span>
          </div>

          <div className='flex gap-3'>
            <div className='flex items-center relative'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white absolute left-2' />
              <input type="text" placeholder='type / to search' className='outline-none bg-transparent border border-gray-500 rounded-md pl-8 py-1' />
            </div>
            
            <span className='border border-gray-500 flex gap-5 rounded-md text-gray-300 px-2'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className='flex pt-1'>
                <FontAwesomeIcon icon={faSortDown} />
              </div>
            </span>

            <div className='flex justify-center items-center border border-gray-500 rounded-md py-0 px-1'>
              <div className='w-5 h-5 rounded-full border border-gray-300 flex justify-center items-center'>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-300'></div>
              </div>
            </div>

            <div className='flex items-center border border-gray-500 rounded-md py-0 px-1'>
              <span className='text-gray-300'><FontAwesomeIcon icon={faCodePullRequest} /></span>
            </div>

            <div className='flex items-center border border-gray-500 rounded-md py-0 px-1'>
              <span className='text-gray-300'><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
            </div>

            <div className='w-8 h-8 rounded-full border-2 border-gray-500'>
              <img src={profile} alt="vikas profile" className='rounded-full' />
            </div>
          </div>
        </header>
      </div>

      <div className='w-full min-h-screen flex'>
        <div className='w-[20%] min-h-screen dark:bg-[#0d1117] p-8 sticky top-0'>
          <div className='flex justify-between items-end'>
            <p className='text-white'>Top Repositories</p>
            <button className='bg-[#238636] text-white px-4 py-1 rounded-md'><FontAwesomeIcon icon={faBook} /> New</button>
          </div>
          <div className='flex justify-center'>
            <input
              type="text"
              className='w-full bg-transparent border-[1px] border-gray-500 p-1 rounded-md mt-3 placeholder:text-gray-500 text-gray-500'
              placeholder='Find a repository...'
            />
          </div>

          <div className='mt-4'>
            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/netflix-clone</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/thread-clone</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/portfolio</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/e-commerce-ui</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/blog-app</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/node-token-auth</span>

            </div>

            <div className='flex items-center py-1 gap-3'>

              <div className='w-6 h-6 rounded-full'>
                <img src={profile} alt="vikas profile" className='rounded-full' />
              </div>
              <span className='dark:text-white'>Raisahab77/landing-page</span>

            </div>
          </div>

          <span>Recent activity</span>

          <p className='border-[1px] border-dashed border-gray-500 p-4 rounded-md text-gray-500 text-sm'>
            When you take actions across GitHub, we’ll provide links to that activity here.
          </p>
        </div>

        <div className='w-[50%] min-h-screen px-8 mt-4 grow'>
          <div className='bg-[#161b22] border-[1px] border-gray-500 px-4 py-6 rounded-md'>
            <div className='flex justify-between'>
              <h1 className='text-white text-2xl'>Join GitHub Education!</h1>
              <FontAwesomeIcon className='text-white pr-10' icon={faXmark} />
            </div>
            <p className='text-slate-400 my-3'>GitHub Education opens doors to new skills, tools, and a collaborative community eager to drive innovation. Join us and build a foundation for your future in technology.</p>
            <img src={github} alt="github main section" />
            <button className='bg-[#238636] text-white py-1 px-4 rounded-md mt-5'>Join GitHub Education</button>
          </div>
          <div className='my-4 flex justify-between items-center'>
            <h4 className='text-white text-2xl'>Home</h4>
            <div className='flex gap-4 items-center'>
              <div className='text-blue-600'>Send feedback</div>
              <button className='bg-[#161b22] border-[1px] border-gray-500 rounded-md text-gray-300 py-1 px-4 flex justify-center items-center'>Filter <span className='bg-[#2c394bd9] rounded-full px-1.5 ml-2'> 8 </span></button>
            </div>
          </div>
          <div className='bg-[#161b22] border-[1px] border-gray-500 p-4 rounded-md'>
            <div className='flex justify-between items-center'>
              <h4 className='text-2xl text-white'>Updates to your homepage feed</h4>
              <FontAwesomeIcon className='text-white pr-10' icon={faXmark} />
            </div>
            <p className='mt-3 text-white text-sm'>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
            <p className='text-blue-600 hover:underline cursor-pointer mt-2 ml-2'>Learn more</p>
          </div>

          <div>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex gap-4 items-center'>
                <FontAwesomeIcon className='text-white bg-[#161b22] rounded-full p-2' icon={faCode} />
                <p className='text-white'>Start writing code</p>
              </div>

              <FontAwesomeIcon className='text-white' icon={faEllipsis} />
            </div>

            <div className='flex gap-2'>
              <div className='bg-[#161b22] border-[1px] border-gray-500 p-4 rounded-md w-1/2'>
                <p className='text-white font-semibold'>Start a new repository for Raisahab77</p>
                <p className='text-gray-500 text-sm py-2'>A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                <p className='text-white font-semibold'>Repository name *</p>
                <input type="text" placeholder='name your new repository' className='bg-[#0D1117] border border-gray-500 w-full rounded-md p-1' />

                <div className='my-3'>
                  <div className='flex gap-2'>
                    <div>
                      <input
                        type="radio"
                        name="repository_type"
                        id="radio_public"
                        className='w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
                        checked
                      />
                    </div>
                    <div className=''>
                      <label
                        htmlFor="radio_public"
                        className='text-white'>
                        Public
                      </label>
                      <p className='text-gray-500 text-xs'>Anyone on the internet can see this repository</p>
                    </div>
                  </div>

                  <div className='flex gap-2'>
                    <div>
                      <input type="radio" name="repository_type" id="radio_private" className='w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600' />
                    </div>
                    <div className=''>
                      <label htmlFor="radio_private" className='text-white'>Private</label>
                      <p className='text-gray-500 text-xs'>You choose who can see and commit to this repository</p>
                    </div>
                  </div>

                </div>
                <button className='bg-[#238636] text-white py-1 px-4 rounded-md'>Create a new repository</button>

              </div>

              <div className='bg-[#161b22] border-[1px] border-gray-500 p-4 rounded-md w-1/2'>
                <p className='text-white font-semibold'>Introduce yourself with a profile README</p>
                <p className='text-gray-500 text-sm py-2'>Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>

                <div className='border border-gray-500 rounded-md overflow-hidden'>
                  <div className='bg-[#0D1117] w-full p-2 text-white border-b border-gray-500 flex justify-between items-center'>
                    <p className='text-sm'>Raisahab77<span className='text-gray-500'>/</span> README<span className='text-gray-500'>.md</span> </p>
                    <button className='bg-[#238636] text-white py-1 px-4 rounded-md'>Create</button>
                  </div>
                  <p className='text-white bg-[#161b22] text-xs p-2'>
                    <ol type='1' className='space-y-2'>
                      <li>👋 Hi, I’m @Raisahab77</li>
                      <li>👀 I’m interested in ...</li>
                      <li>🌱 I’m currently learning ...</li>
                      <li>💞️ I’m looking to collaborate on ...</li>
                      <li>📫 How to reach me ...</li>
                      <li>😄 Pronouns: ...</li>
                      <li>⚡ Fun fact: ...</li>
                    </ol>
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className='w-[25%] overflow-hidden mt-4 mr-4'>
          <div className='relative img-bg'>
            <img className='w-full h-64 rounded-md' src={image} alt="background gradient" />

            <div className='absolute top-4'>
              <div className='w-full flex justify-between items-center'>
                <img src={'https://github.githubassets.com/assets/logo-edce4ec46f6c.svg'}
                  className='h-8 w-auto pl-3' />
                <FontAwesomeIcon className='text-white pr-10' icon={faXmark} />
              </div>
              <div className='mt-2 px-3'>
                <h1 className='text-xl text-white'>The world’s fair of software is here.</h1>
                <p className='text-gray-300 text-sm my-3'>The GitHub Universe call for sessions is now open! Apply to share your expertise by submitting a session proposal today. Plus, get 35% off your tickets to GitHub Universe only for a limited time.</p>
                <button className='bg-[#21262d] text-gray-300 w-full rounded-md py-1.5 my-3'>Learn more</button>
              </div>

            </div>

          </div>

          <div className='bg-[#161b22] border border-gray-500 p-3 rounded-md my-4'>

            <h3 className='text-2xl text-white mb-4'>Latest changes</h3>

            <div className='border-l border-gray-500'>
              <div className='flex gap-4 border-l border-gray-500 relative'>

                <div className='w-3 h-3 rounded-full bg-gray-500 absolute -left-1.5'></div>

                <div className='ml-3 pb-3'>
                  <p className='text-xs text-gray-500'>2 days ago</p>
                  <p className='text-white text-md hover:text-blue-600 hover:underline cursor-pointer'>
                    Updated dates for Actions runner using Node20 instead of  Node16 by default
                  </p>
                </div>
              </div>
            </div>

            <div className='border-l border-gray-500'>
              <div className='flex gap-4 border-l border-gray-500 relative'>

                <div className='w-3 h-3 rounded-full bg-gray-500 absolute -left-1.5'></div>

                <div className='ml-3 pb-3'>
                  <p className='text-xs text-gray-500'>3 days ago</p>
                  <p className='text-white text-md hover:text-blue-600 hover:underline cursor-pointer'>
                    The GitHub Enterprise Server 3.13 Release Candidate is available
                  </p>
                </div>
              </div>
            </div>

            <div className='border-l border-gray-500'>
              <div className='flex gap-4 border-l border-gray-500 relative'>

                <div className='w-3 h-3 rounded-full bg-gray-500 absolute -left-1.5'></div>

                <div className='ml-3 pb-3'>
                  <p className='text-xs text-gray-500'>4 days ago</p>
                  <p className='text-white text-md hover:text-blue-600 hover:underline cursor-pointer'>
                      Deprecation – security advisories in private repositories
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
