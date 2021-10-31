import React, { useState } from 'react';

import DiscussionBoard from 'react-discussion-board';

import 'react-discussion-board/dist/index.css';

const Forum = () => {
  const allPosts = [
    {
      profileImage:'',
      name: 'Moctar THIAM',
      content: '<p>Grace a yourschool jai pu a reussi a faire mon choix  </p>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
    {
      profileImage:
        '',
      name: 'Saliou Toure',
      content:'<p> Merci a yourschool davoir penser a mettre en place ce genre de projet</p>',
      date: new Date('02 Jan 2020 09:12:00 GMT')
    },
     {
      profileImage:'',
      name: 'Moussa DIOP',
      content: '<p>Grace a yourschool jai pu a reussi a faire mon choix  </p>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
     {
      profileImage:'',
      name: 'Anne CAthy ',
      content: '<p>Bonjour yourschool je suis du GABON je voulais savoir est ce que tous les etablissments superieures sont presents </p>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
     {
      profileImage:'',
      name: 'Yourschool',
      content: '<p>Bonjour Anne Cathy les autres etablissements seront ajoutes sous peu  </p>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
  ]

  const [posts, setPosts] = useState(allPosts)

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          '',
        name: 'Moctar@gmail.com',
        content: text,
        date: curDate
      }
    ])
  }

  return (
    <div className='App'>
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  )
}
export default Forum;