import React, { RefObject, Dispatch, SetStateAction } from 'react'
import ProjectCard from './ProjectCard'

function Projects({ref, isVisible, setIsVisible, modalData, setModalData}: {ref: RefObject<HTMLDivElement | null> , isVisible: boolean, setIsVisible: Dispatch<SetStateAction<boolean>>, modalData: ModalData, setModalData: Dispatch<SetStateAction<ModalData>>}) {
  return (
    <div
        ref={ref}
        className='pt-20 pb-52 bg-slate-950 text-white'
        style={{
            fontFamily: 'Space Mono, monospace'
        }}
    >
        <h1 className='text-4xl text-center mb-20' style={{fontFamily: 'Orbitron, serif', color: 'yellow', textShadow: '0 0 16px rgba(255, 255, 0, 0.8)'}}>My Projects</h1>
        <ProjectCard
            title='Tenzies'
            desc='This is a fun and interactive Tenzies game I built while learning ReactJS. The goal is simple – roll the dice until all of them show the same value. You can click on individual dice to hold their current value, preventing them from changing during future rolls. The game also features a timer that tracks how long it takes to complete the challenge, adding a competitive element to beat your best time! Through this project, I gained hands-on experience with key React fundamentals like state management, props, and component-based architecture.'
            itemNo='01'
            images={['1.jpg', '2.jpg', '3.jpg']}
            topM='0'
            gitLink='https://github.com/irohmanzano/Tenzies'
            modalData={modalData}
            setModalData={setModalData}
            techStack={['r']}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />

        <ProjectCard
            title='Meme Generator'
            desc='This is a fun and interactive Meme Generator I created while learning ReactJS. The app allows users to generate random meme images and customize them by adding top and bottom text through input fields. With just a click of the "Generate a new meme image" button, a new random meme is fetched and displayed. Users can personalize the meme to add their own twist, making it easy to create unique and hilarious content. Through this project, I gained valuable experience in fetching data from APIs and dynamically rendering it in a React application, reinforcing my understanding of state management and component-based development.'
            itemNo='02'
            images={['1.jpg', '2.jpg']}
            topM='10'
            gitLink='https://github.com/irohmanzano/Meme-Generator'
            modalData={modalData}
            setModalData={setModalData}
            techStack={['r']}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />

        <ProjectCard
            title='Quizzical'
            desc={`Quizzical is a fun and interactive ReactJS application designed to test your knowledge on various topics. When you click "Start quiz", the quiz begins by fetching 5 multiple-choice/true or false questions from an API. You can select your answers by clicking on the choices, which will be highlighted in blue. Once you've completed the quiz, click "Check answers" to have your answers evaluated and your score displayed. Correct answers are highlighted in green, while incorrect answers are marked in red. If you want to try again, simply click "Play again" to restart the quiz with a new set of questions. This was the first project I completed after learning TypeScript, and it allowed me to apply my new skills and test my understanding of the language in a real-world React application.`}
            itemNo='03'
            images={['1.jpg', '2.jpg', '3.jpg', '4.jpg']}
            topM='20'
            gitLink='https://github.com/irohmanzano/Quizzical'
            modalData={modalData}
            setModalData={setModalData}
            techStack={['r']}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />

        <ProjectCard
            title='Todo App'
            desc='This full-stack Todo App leverages the MERN stack with Next.js and TypeScript to create a seamless task management experience. Users can register or log in, add new tasks with the "+" icon, mark them as complete with a green checkmark, or delete them using the trash icon. The app’s interface is built using Tailwind CSS and Material UI (MUI). Developing this project enhanced my skills in full-stack development, strengthening my understanding of authentication, state management, and API integration within the MERN ecosystem.'
            itemNo='04'
            images={['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']}
            topM='30'
            gitLink='https://github.com/irohmanzano/Todo_App'
            modalData={modalData}
            setModalData={setModalData}
            techStack={['m', 'e', 'r', 'n']}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />

        <ProjectCard
            title='Social Media App'
            desc='This full-stack Social Media App is built using the MERN stack with Next.js and TypeScript on the frontend. Users can register or log in, upload profile avatars, and create posts with or without images. The app allows users to search for others, send, accept, or delete friend requests. Once connected, friends can view each other’s posts on their feeds. Users can like and comment on posts and receive notifications for these interactions. The app also supports editing and deleting posts. Styled with Tailwind CSS and Material UI (MUI), this project enhanced my skills in user authentication, CRUD operations, and API integration within the MERN stack.'
            itemNo='05'
            images={['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '8.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']}
            topM='40'
            gitLink='https://github.com/irohmanzano/Social_Media_App'
            modalData={modalData}
            setModalData={setModalData}
            techStack={['m', 'e', 'r', 'n']}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />
    </div>
  )
}

export default Projects